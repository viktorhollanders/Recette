import { useContext } from "react";
import { RecipeContext } from "../recipe-context";

export function useRecipe() {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("Recipe context must have a valid provider");
  }

  return context;
}
