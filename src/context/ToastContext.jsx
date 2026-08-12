import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("toast-success");
  const timerRef = useRef(null);

  const showToast = useCallback((msg, toastType = "toast-success", duration = 4000) => {
    setMessage(msg || "Enquiry sent — a member of our team will reply within one working day.");
    setType(toastType);
    setVisible(true);
    clearTimeout(timerRef.current);
    if (duration > 0) {
      timerRef.current = setTimeout(() => setVisible(false), duration);
    }
  }, []);

  const hideToast = useCallback(() => {
    clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div
        className={`toast${visible ? " show" : ""} ${type}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
