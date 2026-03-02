export async function fetchData() {
  const url = "http://localhost:3500/recipes";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}
