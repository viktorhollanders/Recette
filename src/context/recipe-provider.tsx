import type { Recipe, RecipeType } from "@/types";
import { useState, useEffect, type ReactNode, useMemo } from "react";
import { RecipeContext } from "./recipe-context";
import { fetchData } from "@/api/fetch-data";

interface RecipeProviderProps {
  children: ReactNode;
}

export function RecipeProvider(props: RecipeProviderProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeTypes, setRecipeTypes] = useState<RecipeType[]>([]);
  const [activeFilter, setActiveFilter] = useState<RecipeType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getData() {
      const { recipes, recipeTypes } = await fetchData();
      setRecipes(recipes);
      setRecipeTypes(recipeTypes);
    }
    getData();
  }, []);

  const filteredRecipes = useMemo(() => {
    if (recipes.length === 0) return recipes;

    const result = recipes.filter((r) =>
      r.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );

    if (activeFilter !== null && activeFilter.name !== "All") {
      return result.filter((r) => r.recipeType === activeFilter?._id);
    }
    return result;
  }, [recipes, searchQuery, activeFilter]);

  function filterRecipes(type: RecipeType) {
    setActiveFilter(type);
  }

  function searchRecipes(query: string) {
    setSearchQuery(query);
  }

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        recipeTypes,
        filteredRecipes,
        filterRecipes,
        searchRecipes,
        activeFilter,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
}
