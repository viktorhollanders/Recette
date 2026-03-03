import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { RecipeProvider } from "@/context/recipe-provider";
import "@/index.css";
import Recipes from "@/recipes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <Recipes />
      </BrowserRouter>
    </RecipeProvider>
  </StrictMode>,
);
