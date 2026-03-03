import type { RecipeTags } from "@/types";

export function InfoLabel({ tag }: { tag: RecipeTags }) {
  return (
    <div className="py-6 px-12 border rounded-2xl flex flex-col items-center text-[18px]">
      <h3 className="font-light">
        {tag.key === "Calories" ? "Calories" : "Total time"}
      </h3>
      <h3 className="font-semibold">
        {tag.key === "Calories" ? `${tag.value} cal` : `${tag.value} min`}
      </h3>
    </div>
  );
}
