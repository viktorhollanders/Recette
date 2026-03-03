import type { RecipeTags } from "./recipe-tags";

export interface Step {
  step: number;
  description: string;
}

export interface Items {
  ingredient: string;
}

export interface RecipeDetails {
  _id: string;
  title: string;
  description: string;
  author: string;
  image: string;
  ingredients: Items[];
  instructions: Step[];
  recipeType: string;
  tags: RecipeTags[];
}
