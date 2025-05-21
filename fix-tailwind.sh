#!/bin/bash

echo "Cleaning node_modules and lockfile..."
rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml

echo "Creating minimal tailwind.config.js..."
cat > tailwind.config.js <<EOF
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

echo "Creating minimal postcss.config.js..."
cat > postcss.config.js <<EOF
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

echo "Creating minimal tsconfig.json..."
cat > tsconfig.json <<EOF
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
EOF

echo "Installing dependencies..."
npm install tailwindcss@3 autoprefixer@10 postcss@8

echo "Building Tailwind output.css as a test..."
mkdir -p dist
npx tailwindcss -c tailwind.config.js -i ./src/index.css -o ./dist/output.css --minify

echo "Done! Now try running:"
echo "npx shadcn@latest init"
