import { Header } from "@/components/header";
import { RecipeCard } from "@/components/recipe-card";
import { useRecipe } from "@/context/hooks/use-recipe";
import { Filter } from "@/components/filter";

export default function Recipes() {
  const { filteredRecipes } = useRecipe();

  console.log(filteredRecipes);

  return (
    <>
      <Header />
      <div className="px-3 md:px- xl:px-24 py-8">
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
          {filteredRecipes.map((recipe) => {
            return <RecipeCard key={recipe._id} recipe={recipe} />;
          })}
        </div>
      </div>
    </>
  );
}
