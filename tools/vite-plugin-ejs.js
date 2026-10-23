import ejs from "ejs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

/**
 * Renders EJS tags (<%- include(...) %>) in the root HTML pages.
 * The data module is imported once and passed to every template.
 */
export default function ejsPlugin(data) {
  return {
    name: "render-ejs-in-html",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const out = ejs.render(html, { ...data, page: path.basename(ctx.filename || "") }, {
          filename: ctx.filename || path.join(root, "..", "index.html"),
          views: [path.join(root, "..", "src", "partials")]
        });
        return out.replace(/[ \t]+$/gm, "").replace(/\n{3,}/g, "\n\n");
      }
    }
  };
}
