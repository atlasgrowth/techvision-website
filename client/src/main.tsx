import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize environment variables from window if available
if (typeof window !== "undefined") {
  window.BASE_URL = window.BASE_URL || import.meta.env.VITE_BASE_URL || "";
  window.ASSET_URL = window.ASSET_URL || import.meta.env.VITE_ASSET_URL || "";
}

createRoot(document.getElementById("root")!).render(<App />);