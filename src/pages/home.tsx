import { Header } from "@/components/header";
import { RecipeCard } from "@/components/recipe-card";
import { useRecipe } from "@/contexts/hooks/use-recipe";
import { Filter } from "@/components/filter";
import { Link } from "react-router";

export default function Home() {
  const { filteredRecipes, isLoading } = useRecipe();

  return (
    <>
      <Header />
      <div className="px-3 md:px- xl:px-27 py-10">
        <Filter />
        {isLoading ? (
          <div className="flex justify-center">
            <p>Is loading</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
              {filteredRecipes.map((recipe) => {
                return (
                  <Link key={recipe._id} to={`/recipes/${recipe._id}`}>
                    <RecipeCard recipe={recipe} />
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
