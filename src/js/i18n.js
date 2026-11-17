import { dictionary } from "../data/i18n.js";

const STORAGE_KEY = "lang";
const DEFAULT_LANG = "en";

function readSavedLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    return;
  }
}

function translate(lang) {
  const words = dictionary[lang] || dictionary[DEFAULT_LANG];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = words[el.dataset.i18n];
    if (text) {
      el.textContent = text;
    }
  });

  ["placeholder", "aria-label", "alt"].forEach((attr) => {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => {
      const text = words[el.getAttribute(`data-i18n-${attr}`)];
      if (text) {
        el.setAttribute(attr, text);
      }
    });
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    saveLang(btn.dataset.lang);
    translate(btn.dataset.lang);
  });
});

translate(readSavedLang() || DEFAULT_LANG);
