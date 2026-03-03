import { useRecipe } from "@/context/hooks/use-recipe";
import type { RecipeType } from "@/types";

export function Button({ type }: { type: RecipeType }) {
  const { filterRecipes, activeFilter } = useRecipe();

  return (
    <button
      onClick={() => filterRecipes(type)}
      className={` px-6 py-2 uppercase rounded-4xl text-brand-gray-900 hover:text-brand-violet ${activeFilter?.name === type.name || (activeFilter === null && type.name === "All") ? "border border-brand-gray-900 rounded-4xl text-brand-violet" : ""}`}
    >
      {type.name}
    </button>
  );
}
