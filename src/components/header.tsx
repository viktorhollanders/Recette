import { SearchBar } from "./ui/search-bar";

export function Header() {
  return (
    <header className="h-87.5 w-full bg-linear-to-b from-brand-teal to-brand-blue flex flex-col justify-around items-center">
      <SearchBar />
      <h1 className="text-center text-brand-white text-4xl">Explore Recipes</h1>
    </header>
  );
}
