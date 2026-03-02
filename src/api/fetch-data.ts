export async function fetchData() {
  const recipes = "http://localhost:3500/recipes";
  const recipeTypes = "http://localhost:3500/recipes/recipeTypes";

  const [recipesRed, recipeTypesRed] = await Promise.all([
    fetch(recipes),
    fetch(recipeTypes),
  ]);

  if (!recipesRed.ok) {
    throw new Error(`Response status: ${recipesRed.status}`);
  }

  if (!recipeTypesRed.ok) {
    throw new Error(`Response status: ${recipeTypesRed.status}`);
  }

  const recipesData = await recipesRed.json();
  const recipeTypesData = await recipeTypesRed.json();

  return { recipesData, recipeTypesData };
}
