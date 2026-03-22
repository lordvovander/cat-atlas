const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

export const App = (() => {
  const THEME_KEY = "cat-atlas-theme";
  const LANG_KEY = "cat-atlas-lang";

  function initYear(){
    const el = $("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function getLang(){
    const saved = localStorage.getItem(LANG_KEY);
    return (saved === "en" || saved === "ru") ? saved : "ru";
  }

  function setLang(lang){
    const next = (lang === "en") ? "en" : "ru";
    localStorage.setItem(LANG_KEY, next);
    document.documentElement.lang = next;
    document.documentElement.dataset.lang = next;

    $$("[data-lang]").forEach(el => {
      el.hidden = el.getAttribute("data-lang") !== next;
    });

    const btn = $("button[data-lang-toggle]");
    if (btn) btn.textContent = next.toUpperCase();
  }

  function initLang(){
    setLang(getLang());

    const btn = $("button[data-lang-toggle]");
    if (btn) {
      btn.addEventListener("click", () => {
        const cur = getLang();
        setLang(cur === "ru" ? "en" : "ru");

        document.dispatchEvent(
          new CustomEvent("catatlas:langchange", { detail: { lang: getLang() } })
        );
      });
    }
  }

  function initTheme(){
    const btn = $("button[data-theme]");
    if (!btn) return;

    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") {
      document.documentElement.dataset.theme = saved;
    }

    btn.addEventListener("click", (event) => {
      event.stopPropagation();

      const cur = document.documentElement.dataset.theme || "dark";
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem(THEME_KEY, next);
    });
  }

  function initNav(){
    const toggle = $("[data-nav-toggle]");
    const nav = $("#nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    $$("#nav a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  function boot(){
    initYear();
    initTheme();
    initNav();
    initLang();
  }

  return { boot, getLang, setLang };
})();
