import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { LogoRow } from "./components/Shared.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";

// Resilient chunk loader with automatic retry for heavy traffic / flaky mobile connections
function lazyWithRetry(componentImport) {
  return lazy(async () => {
    try {
      return await componentImport();
    } catch (error) {
      // Retry once after 500ms before throwing
      await new Promise((resolve) => setTimeout(resolve, 500));
      return await componentImport();
    }
  });
}

// Route-level code splitting for faster initial page load & high-traffic efficiency
const Home = lazyWithRetry(() => import("./pages/Home.jsx"));
const ProductsOverview = lazyWithRetry(() => import("./pages/ProductsOverview.jsx"));
const ProductDetail = lazyWithRetry(() => import("./pages/ProductDetail.jsx"));
const BrandsOverview = lazyWithRetry(() => import("./pages/BrandsOverview.jsx"));
const BrandDetail = lazyWithRetry(() => import("./pages/BrandDetail.jsx"));
const CustomerService = lazyWithRetry(() => import("./pages/CustomerService.jsx"));
const Careers = lazyWithRetry(() => import("./pages/Careers.jsx"));
const About = lazyWithRetry(() => import("./pages/About.jsx"));
const Contact = lazyWithRetry(() => import("./pages/Contact.jsx"));
const Privacy = lazyWithRetry(() => import("./pages/Privacy.jsx"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound.jsx"));

function PageFallback() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "36px", height: "36px", border: "3px solid var(--paper-2)", borderTopColor: "var(--copper)", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <ScrollToTop />
      <Header />
      <main>
        <ErrorBoundary>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsOverview />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/brands" element={<BrandsOverview />} />
              <Route path="/brands/:slug" element={<BrandDetail />} />
              <Route path="/brands/:slug/:productSlug" element={<BrandDetail />} />
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <LogoRow />
      <Footer />
    </ToastProvider>
  );
}