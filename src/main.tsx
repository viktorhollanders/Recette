import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@/index.css";
import Recipes from "./Recipes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Recipes />
    </BrowserRouter>
  </StrictMode>,
);
