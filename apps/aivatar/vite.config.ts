import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    allowedHosts: ["dev.3vl.ca", "localhost"],
    fs: {
      allow: [
        resolve(__dirname, '../../node_modules'),
        resolve(__dirname)
      ]
    }
  }
});
