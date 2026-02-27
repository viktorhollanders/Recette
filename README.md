# Recipes Assignment for Web Programming II
A recipes app where a user can look up recipes and filter by category. They can also look at individual recipes and see what ingredients are needed and the instructions on how to cook the recipe.


## Author
Viktor Hollanders
[viktorh23@ru.is](mailto:viktorh23@ru.is)

## Prerequisites
- Node.js v18+
- pnpm v8+

## Getting Started
Install dependencies using pnpm:
```bash
pnpm install
```

Set up the accompanying API with the following commands.

Run the setup script:

macOS:
```bash
./scripts/mongo.sh
```

Windows:
```bash
.\scripts\mongo.ps1
```

This script sets up MongoDB locally on your machine, which is a requirement to run the external API.

Then issue a prepopulation step:
```bash
curl http://localhost:3500/populate
```

To test if the API is serving data run:
```bash
curl http://localhost:3500/recipes
```

Then run the development server:
```bash
pnpm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser to see the result.

## Tech Stack
- **Language:** TypeScript
- **Frontend:** Vite + Tailwind
- **Routing:** React Router
- **Linting:** Biome
- **HTTP Client:** Fetch API
