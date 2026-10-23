import js from "@eslint/js";

const browserGlobals = {
  window: "readonly", document: "readonly", console: "readonly", localStorage: "readonly",
  sessionStorage: "readonly", fetch: "readonly", URL: "readonly", URLSearchParams: "readonly",
  setTimeout: "readonly", clearTimeout: "readonly", setInterval: "readonly", clearInterval: "readonly",
  history: "readonly", location: "readonly", navigator: "readonly", FormData: "readonly"
};

export default [
  { ignores: ["dist/**", "node_modules/**"] },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: "latest", sourceType: "module", globals: { ...browserGlobals, process: "readonly" } },
    rules: {
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      eqeqeq: ["warn", "always"],
      curly: ["warn", "all"]
    }
  }
];
