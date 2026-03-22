import { App } from "./app.js";
import { BREEDS, SOURCES } from "./breeds-data.js";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

function setMeta({ title, description }){
  document.title = title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.setAttribute("content", title);
  if (ogDesc) ogDesc.setAttribute("content", description);
}

function setJsonLd(obj){
  let s = $("#jsonld");
  if (!s) {
    s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "jsonld";
    document.head.appendChild(s);
  }
  s.textContent = JSON.stringify(obj, null, 2);
}

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function render(){
  const lang = App.getLang();
  const grid = $("[data-grid]");
  if (!grid) return;

  grid.innerHTML = BREEDS.map(b => `
    <article class="card" data-name="${escapeHtml((b.name.ru + " " + b.name.en).toLowerCase())}">
      <a
        class="card__image"
        href="breeds/${b.id}.html"
        aria-label="${escapeHtml(lang === "ru" ? `Открыть страницу породы ${b.name.ru}` : `Open ${b.name.en} breed page`)}"
      >
        <img
          src="${escapeHtml(b.hero)}"
          alt="${escapeHtml(lang === "ru" ? `Фото породы ${b.name.ru}` : `${b.name.en} breed photo`)}"
          loading="lazy"
          decoding="async"
        />
      </a>

      <div class="card__body">
        <div class="card__top">
          <div class="pill">#${b.rank}</div>
          <h3 class="card__title">${escapeHtml(b.name[lang])}</h3>
        </div>

        <p class="card__text">
          ${lang === "ru"
            ? `Место в рейтинге CFA (регистрации за 2024 год).`
            : `Ranked by CFA (registrations in 2024).`}
        </p>

        <a class="card__link" href="breeds/${b.id}.html">${lang === "ru" ? "Открыть страницу →" : "Open page →"}</a>
      </div>
    </article>
  `).join("");

  initSearch();
  applySeo();
}

function initSearch(){
  const input = $("[data-search]");
  const grid = $("[data-grid]");
  const empty = $("[data-empty]");
  const reset = $("[data-reset]");
  if (!input || !grid) return;

  const cards = $$("article.card", grid);
  const lang = App.getLang();

  function apply(){
    const q = (input.value || "").trim().toLowerCase();
    let shown = 0;

    cards.forEach(card => {
      const hay = card.getAttribute("data-name") || "";
      const ok = !q || hay.includes(q);
      card.hidden = !ok;
      if (ok) shown++;
    });

    if (empty) {
      empty.hidden = shown !== 0;
      const t = empty.querySelector("[data-empty-title]");
      const p = empty.querySelector("[data-empty-text]");
      const btn = empty.querySelector("[data-reset]");

      if (t) t.textContent = (lang === "ru") ? "Ничего не найдено" : "No results";
      if (p) p.textContent = (lang === "ru") ? "Попробуйте другой запрос." : "Try a different query.";
      if (btn) btn.textContent = (lang === "ru") ? "Сбросить" : "Reset";
    }
  }

  input.oninput = apply;

  if (reset) {
    reset.onclick = () => {
      input.value = "";
      apply();
      input.focus();
    };
  }
}

function applySeo(){
  const lang = App.getLang();
  const title = (lang === "ru")
    ? "Популярные породы кошек — Топ‑10 по данным CFA"
    : "Popular Cat Breeds — CFA Top 10";
  const description = (lang === "ru")
    ? "Премиум‑справочник: 10 самых популярных пород кошек по данным CFA (регистрации за 2024 календарный год)."
    : "Premium guide: Top 10 cat breeds based on CFA rankings (registrations in calendar year 2024).";

  setMeta({ title, description });

  setJsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": title,
    "inLanguage": lang,
    "url": "./index.html",
    "about": {
      "@type": "Thing",
      "name": "CFA ranking",
      "sameAs": SOURCES.cfaRanking.url
    }
  });
}

App.boot();
render();

document.addEventListener("catatlas:langchange", () => render());
