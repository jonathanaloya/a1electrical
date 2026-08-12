import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { LogoRow } from "./components/Shared.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";

import Home from "./pages/Home.jsx";
import ProductsOverview from "./pages/ProductsOverview.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import BrandsOverview from "./pages/BrandsOverview.jsx";
import BrandDetail from "./pages/BrandDetail.jsx";
import CustomerService from "./pages/CustomerService.jsx";
import OrderingDelivery from "./pages/OrderingDelivery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <ToastProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsOverview />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/brands" element={<BrandsOverview />} />
          <Route path="/brands/:slug" element={<BrandDetail />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/ordering-delivery" element={<OrderingDelivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <LogoRow />
      <Footer />
    </ToastProvider>
  );
}