import type { recipeTags } from "./recipeTags";

export interface recipe {
  _id: string;
  title: string;
  recipeType: string;
  image: string;
  tags: recipeTags[];
}
