import type { RecipeTags } from "./recipeTags";

export interface Recipe {
  _id: string;
  title: string;
  recipeType: string;
  image: string;
  tags: RecipeTags[];
}
