import type { Recipe } from "@/types";
const categoryIcons: Record<string, string> = {
  Meat: "🥩",
  Fish: "🐟",
  Chicken: "🍗",
  Spicy: "🌶️",
  KidFriendly: "👶",
};

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="bg-brand-white px-5 py-2 flex flex-col items-center xl:items-start">
      <img
        className="h-[195px] w-[299px] object-cover"
        src={`data:image/png;base64,${recipe.image}`}
        alt={recipe.title}
      />

      <h3 className="text-brand-gray-900 font-bold my-3">{recipe.title}</h3>
      <div className="flex flex-row gap-x-4">
        {recipe.tags.map((tag) => {
          if (tag.value === true) {
            return (
              <span className="py-1 text-2xl" key={tag.key}>
                {categoryIcons[tag.key]}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}
