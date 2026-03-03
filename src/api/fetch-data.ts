export async function fetchData() {
  const recipesUrl = "http://localhost:3500/recipes";
  const recipeTypesUrl = "http://localhost:3500/recipes/recipeTypes";

  const [recipesRed, recipeTypesRed] = await Promise.all([
    fetch(recipesUrl),
    fetch(recipeTypesUrl),
  ]);

  if (!recipesRed.ok) {
    throw new Error(`Response status: ${recipesRed.status}`);
  }

  if (!recipeTypesRed.ok) {
    throw new Error(`Response status: ${recipeTypesRed.status}`);
  }

  const recipes = await recipesRed.json();
  const recipeTypes = await recipeTypesRed.json();

  return { recipes, recipeTypes };
}
