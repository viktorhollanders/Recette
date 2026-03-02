import { Header } from "@/components/header";
import { useEffect } from "react";
import { fetchData } from "@/api/fetch-data";

export default function Recipes() {
  useEffect(() => {
    async function getData() {
      const { recipesData, recipeTypesData } = await fetchData();
      console.log(recipesData);
      console.log(recipeTypesData);
    }
    getData();
  }, []);

  return <Header />;
}
