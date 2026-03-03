const baseUrl = "http://localhost:3500";

export async function fetchRecipes() {
  const recipesUrl = `${baseUrl}/recipes`;

  const recipesResponse = await fetch(recipesUrl);

  if (!recipesResponse.ok) {
    throw new Error(`Response status: ${recipesResponse.status}`);
  }

  const recipes = await recipesResponse.json();
  return recipes;
}

export async function fetchRecipeTypes() {
  const recipeTypesUrl = `${baseUrl}/recipes/recipeTypes`;

  const recipeTypesResponse = await fetch(recipeTypesUrl);

  if (!recipeTypesResponse.ok) {
    throw new Error(`Response status: ${recipeTypesResponse.status}`);
  }

  const recipeTypes = await recipeTypesResponse.json();
  return recipeTypes;
}

export async function fetchRecipe(recipeId: string) {
  const recipeUrl = `${baseUrl}/recipes/${recipeId}`;

  const recipeRed = await fetch(recipeUrl);

  if (!recipeRed.ok) {
    throw new Error(`Response status: ${recipeRed.status}`);
  }

  const recipe = await recipeRed.json();
  return recipe;
}
