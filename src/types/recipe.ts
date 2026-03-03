import type { RecipeTags } from "./recipe-tags";

export interface Recipe {
  _id: string;
  title: string;
  recipeType: string;
  image: string;
  tags: RecipeTags[];
}
