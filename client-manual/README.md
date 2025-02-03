# IXO

## Client Manuanl

- deno init
- deno add npm:react npm:react-dom npm:react-router-dom npm:@types/react
  npm:vite npm:@vitejs/plugin-react npm:@deno/vite-plugin

add task in deno.json

```JSON
{
  "tasks": {
    "dev": "deno run -A --node-modules-dir=auto npm:vite",
    "build": "deno run -A --node-modules-dir=auto npm:vite build",
    "server:start": "deno run -A --node-modules-dir --watch ./server/main.ts",
    "serve": "deno task build && deno task server:start"
  },
  ...
}
```

add compilerOptions in deno.json

```JSON
{
  ... ,
  "compilerOptions": {
    "types": [
      "react", 
      "react-dom", 
      "@types/react"
    ],
    "lib": [
      "dom",
      "dom.iterable",
      "deno.ns"
    ],
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

add vite.config.ts

```TypeScript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";

import "react";
import "react-dom";

export default defineConfig({
  root: "./client",
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    deno(),
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
```

create client folder

```
client-manual/
├── client/                  
│   ├── public/                   # Static files (e.g., images, sounds)
│   ├── src/
│   │   ├── App.css               # App styles
│   │   ├── App.tsx               # Main App component
│   │   ├── index.css             # Global styles
│   │   ├── main.tsx              # Entry point
│   │   └── vite-env.d.ts         # Vite type defination
│   └── deno.json                 # Project metadata and dependencies
```

deno add jsr:@oak/oak jsr:@tajpouria/cors

create server folder

```
client-manual/
├── server/                  
│   ├── util/
│   │   └── routeStaticFilesFrom.ts     # Configure static site routes
│   ├── main.ts                         # Serve server
│   └── main_test.ts                    # Testing file
```

# React Router

deno add npm:react-router

```
client/                  
├── src/
│   └── pages
│   │   └── Home.tsx          # Home page
│   └── App.tsx               # Main App component
```

refactor code

```Typescript
import Home from "./pages/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Catch-all route for 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
```

# Tailwindcss

deno add npm:tailwindcss npm:@tailwindcss/vite

configure vite plugin vite.config.ts

```Typescript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
```

import tailwindcss index.css

```CSS
@import "tailwindcss";
```
