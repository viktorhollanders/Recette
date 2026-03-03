import type { Recipe, RecipeType } from "@/types";
import { createContext } from "react";

interface RecipeContextType {
  recipes: Recipe[];
  recipeTypes: RecipeType[];
  filteredRecipes: Recipe[];
  filterRecipes: (type: RecipeType) => void;
  searchRecipes: (query: string) => void;
  activeFilter: RecipeType | null;
}

export const RecipeContext = createContext<RecipeContextType | null>(null);
