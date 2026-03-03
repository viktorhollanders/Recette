import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecipeProvider } from "@/contexts/recipe-provider";
import { BrowserRouter, Routes, Route } from "react-router";
import "@/index.css";
import Home from "@/pages/home";
import RecipeDetailsPage from "@/pages/recipe-details";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  </StrictMode>,
);
