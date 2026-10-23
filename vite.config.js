import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ejsPlugin from "./tools/vite-plugin-ejs.js";
import * as data from "./src/data/site.js";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  plugins: [ejsPlugin(data)],
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  root: ".",
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        courses: resolve(root, "courses.html"),
        "course-details": resolve(root, "course-details.html"),
        enrollment: resolve(root, "enrollment.html")
      }
    }
  }
});
