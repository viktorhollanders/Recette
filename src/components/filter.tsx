import { Button } from "./ui/button";
import { useRecipe } from "@/context/hooks/use-recipe";

export function Filter() {
  const { recipeTypes, filteredRecipes } = useRecipe();
  return (
    <>
      <div className="flex flex-row gap-x-10 font-medium justify-center bg-brand-white rounded-4xl py-2 mt-20">
        {[{ _id: "", name: "All" }, ...recipeTypes].map((type) => {
          return <Button key={type._id} type={type} />;
        })}
      </div>

      <h1 className="text-brand-gray-900 my-8">
        You have{" "}
        <span className="font-bold text-black text-[18px]">
          {filteredRecipes.length}
        </span>{" "}
        recipes to explore.
      </h1>
    </>
  );
}
