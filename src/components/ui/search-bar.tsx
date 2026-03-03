import { Search } from "lucide-react";
import { useRecipe } from "@/context/hooks/use-recipe";

export function SearchBar() {
  const { searchRecipes } = useRecipe();

  return (
    <div className="bg-brand-white w-[750px] p-6 rounded-4xl flex gap-2">
      <Search />
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for recipe"
        className="w-3/4 outline-none text-brand-gray-700 text-[18px]"
        onChange={(e) => searchRecipes(e.target.value)}
      />
    </div>
  );
}
