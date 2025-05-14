import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h2 className="font-semibold text-blue-900">Hello World!</h2>
  </StrictMode>
);
