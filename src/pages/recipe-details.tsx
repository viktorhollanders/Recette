import { fetchRecipe } from "@/api/fetch-data";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { InfoLabel } from "@/components/ui/info-lable";
import type { RecipeDetails, Step, Items } from "@/types";

export default function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getRecipe() {
      const data = await fetchRecipe(recipeId!);
      setRecipe(data);
      setIsLoading(false);
    }

    getRecipe();
  }, [recipeId]);

  return (
    <div className="">
      {isLoading ? (
        <div className="flex justify-center">
          <p>Prepping recipe</p>
        </div>
      ) : (
        <>
          <header>
            <div className="h-130">
              <img
                src={`data:image/png;base64,${recipe?.image}`}
                alt={recipe?.title}
                className="object-cover h-full w-full"
              />
            </div>
            <section className="px-3 md:px- xl:px-27 py-10 bg-brand-white rounded-b-xs mx-2 mb-2">
              <h1 className="text-4xl font-semibold">{recipe?.title}</h1>
              <h2 className="text-brand-gray-700 my-4 text-[18px]">
                by {recipe?.author}
              </h2>
              <div className="flex gap-x-7">
                {recipe?.tags.map((tag) =>
                  tag.key === "Calories" || tag.key === "TotalMinutes" ? (
                    <InfoLabel key={tag.key} tag={tag} />
                  ) : (
                    ""
                  ),
                )}
              </div>
              <h1 className="text-4xl font-semibold mt-6">About recipe</h1>
              <p className="text-brand-gray-700 mt-1">{recipe?.description}</p>
            </section>
          </header>
          <section className="px-3 md:px- xl:px-27 py-10 bg-brand-white rounded-b-xs mx-2 mb-2">
            <h1 className="text-4xl font-semibold mt-6 mb-4">Ingredients</h1>
            <ul className="list-disc list-inside text-brand-gray-700">
              {recipe?.ingredients.map((item: Items) => (
                <li key={item.ingredient}>{item.ingredient}</li>
              ))}
            </ul>

            <h1 className="text-4xl font-semibold mt-6  mb-4">Instructions</h1>
            <ul className="list-disc list-inside text-brand-gray-700">
              {recipe?.instructions.map((step: Step) => (
                <ol key={step.step}>{`${step.step}. ${step.description}`}</ol>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
