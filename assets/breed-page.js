import { App } from "./app.js";
import { BREEDS, SOURCES } from "./breeds-data.js";

const $ = (s, r = document) => r.querySelector(s);

function setMeta({ title, description, image }){
  document.title = title;

  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  const ogType = document.querySelector('meta[property="og:type"]');

  if (ogTitle) ogTitle.setAttribute("content", title);
  if (ogDesc) ogDesc.setAttribute("content", description);
  if (ogImage && image) ogImage.setAttribute("content", image);
  if (ogType) ogType.setAttribute("content", "article");
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
  const id = document.documentElement.getAttribute("data-breed");
  const b = BREEDS.find(x => x.id === id);
  if (!b) return;

  const breadcrumbName = $("#breedBreadcrumbName");
  const titleEl = $("#breedTitle");
  const rankEl = $("#breedRank");
  const introEl = $("#breedIntro");
  const img = $("#breedHeroImg");

  if (breadcrumbName) breadcrumbName.textContent = b.name[lang];
  if (titleEl) titleEl.textContent = b.name[lang];
  if (rankEl) rankEl.textContent = `#${b.rank}`;
  if (introEl) introEl.textContent = b.intro[lang];

  if (img) {
    img.src = b.hero;
    img.alt = (lang === "ru") ? `${b.name.ru} — фото породы` : `${b.name.en} — breed image`;
  }

  const facts = $("#breedFacts");
  if (facts) {
    facts.innerHTML = b.facts.map(f => `
      <li>
        ${escapeHtml(f[lang])}
        <span class="refs">
          ${f.sources.map(s => ` <a href="${s.url}" target="_blank" rel="noreferrer">[${escapeHtml(s.title)}]</a>`).join("")}
        </span>
      </li>
    `).join("");
  }

  const unique = new Map();
  b.facts.flatMap(x => x.sources).forEach(s => unique.set(s.url, s));
  unique.set(SOURCES.cfaRanking.url, SOURCES.cfaRanking);

  const sources = $("#breedSources");
  if (sources) {
    sources.innerHTML = Array.from(unique.values()).map(s => `
      <li><a href="${s.url}" target="_blank" rel="noreferrer">${escapeHtml(s.title)}</a></li>
    `).join("");
  }

  const idx = BREEDS.findIndex(x => x.id === b.id);
  const prev = BREEDS[idx - 1] || null;
  const next = BREEDS[idx + 1] || null;

  const pager = $("#breedPager");
  if (pager) {
    pager.innerHTML = `
      ${prev ? `<a href="${prev.id}.html" aria-label="${escapeHtml(lang === "ru" ? `Предыдущая порода: ${prev.name[lang]}` : `Previous breed: ${prev.name[lang]}`)}"><span>${lang === "ru" ? "Предыдущая" : "Previous"}</span> ${escapeHtml(prev.name[lang])}</a>` : `<span></span>`}
      ${next ? `<a href="${next.id}.html" aria-label="${escapeHtml(lang === "ru" ? `Следующая порода: ${next.name[lang]}` : `Next breed: ${next.name[lang]}`)}"><span>${lang === "ru" ? "Следующая" : "Next"}</span> ${escapeHtml(next.name[lang])}</a>` : `<span></span>`}
    `;
  }

  const title = (lang === "ru")
    ? `${b.name.ru} — факты и стандарт (CFA)`
    : `${b.name.en} — facts & standard (CFA)`;
  const description = (lang === "ru")
    ? `${b.name.ru}: факты по материалам CFA, источники и ссылки.`
    : `${b.name.en}: facts based on CFA materials with sources and links.`;

  setMeta({ title, description, image: b.hero });

  setJsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "inLanguage": lang,
    "image": [b.hero],
    "about": { "@type": "Thing", "name": b.name[lang] },
    "isPartOf": { "@type": "WebSite", "name": "Cat Atlas", "url": "../index.html" },
    "citation": Array.from(unique.values()).map(s => s.url)
  });

  const factsTitle = $("#factsTitle");
  const sourcesTitle = $("#sourcesTitle");

  if (factsTitle) {
    factsTitle.textContent = (lang === "ru") ? "Факты (по материалам CFA)" : "Facts (from CFA materials)";
  }

  if (sourcesTitle) {
    sourcesTitle.textContent = (lang === "ru") ? "Источники" : "Sources";
  }
}

App.boot();
render();
document.addEventListener("catatlas:langchange", () => render());
