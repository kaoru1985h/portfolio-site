const content = {
  en: {
    worksTitle: "Featured Works",
    galleryTitle: "Gallery",
    commissionsTitle: "COMMISSIONS",
    whatTitle: "What I Make",
    howTitle: "How It Works",
    aboutTitle: "About KAORU",
    aboutBody:
      "KAORU creates AI-driven visuals rooted in Lowrider and KUSTOM culture, blending digital tools with analog sensibility. Based in Japan, open to commissions, collaborations, and visual projects worldwide.",
    contactTitle: "Contact",
    contactCta: "DM ON INSTAGRAM",
    contactBody:
      "Tell me what you want to make. A rough idea is enough. DM me on Instagram for commissions, collaborations, or exhibition inquiries.",
    whatList: [
      "Custom AI Artwork",
      "Logo & Sticker Graphics",
      "Social Media Visuals",
      "Flyer & Event Artwork",
      "Analog-inspired Work"
    ],
    howList: ["Listen / Direction", "AI Exploration", "Refine / Design", "Deliver"]
  },
  jp: {
    worksTitle: "注目作品",
    galleryTitle: "ギャラリー",
    commissionsTitle: "制作依頼",
    whatTitle: "制作できるもの",
    howTitle: "制作の流れ",
    aboutTitle: "KAORUについて",
    aboutBody:
      "KAORUは、Lowrider / KUSTOM cultureを軸に、AI表現とアナログな感性を組み合わせたビジュアルを制作しています。日本を拠点に、制作依頼・コラボ・展示などの相談を受け付けています。",
    contactTitle: "お問い合わせ",
    contactCta: "Instagram DMで相談する",
    contactBody:
      "作りたいものがざっくりしていても大丈夫です。制作依頼、コラボ、展示のお話など、Instagram DMから気軽に相談してください。",
    whatList: [
      "AIビジュアル制作",
      "ロゴ・ステッカーグラフィック",
      "SNSビジュアル",
      "フライヤー・イベントアート",
      "アナログ感のある制作"
    ],
    howList: ["相談 / 方向性づくり", "AIでのビジュアル探索", "調整 / デザイン化", "納品"]
  }
};

const featuredWorks = [
  {
    title: "Chrome Boulevard",
    category: "AI Visuals",
    description: "Low-angle monochrome cruiser mood for social key art.",
    tone: "linear-gradient(140deg, #050505 0%, #1f1f1f 38%, #f3f3f3 39%, #9d9d9d 44%, #080808 72%)"
  },
  {
    title: "Kustom Crest",
    category: "Logo & Graphics",
    description: "Badge-style logo direction with chrome and shadow rhythm.",
    tone: "radial-gradient(circle at 50% 42%, #eeeeee 0 8%, #707070 9% 17%, #111111 18% 55%, #020202 56%)"
  },
  {
    title: "Analog Night",
    category: "Analog Works",
    description: "Poster texture study blending hand-made grit with AI polish.",
    tone: "repeating-linear-gradient(110deg, #0b0b0b 0 18px, #2b2b2b 18px 30px, #cfcfcf 30px 32px)"
  },
  {
    title: "Street Flyer",
    category: "AI Visuals",
    description: "Event visual concept made for quick mobile promotion.",
    tone: "linear-gradient(35deg, #080808 0 28%, #dedede 29% 31%, #171717 32% 70%, #777777 71%)"
  },
  {
    title: "Sticker Pack",
    category: "Logo & Graphics",
    description: "Compact black-and-silver graphic set for print-ready stickers.",
    tone: "radial-gradient(circle at 28% 30%, #e5e5e5 0 10%, transparent 11%), radial-gradient(circle at 70% 62%, #898989 0 12%, transparent 13%), #101010"
  },
  {
    title: "Silver Smoke",
    category: "Analog Works",
    description: "Soft grain, heavy contrast, and hand-finished poster energy.",
    tone: "linear-gradient(180deg, #f6f6f6 0 5%, #292929 6% 30%, #070707 31% 100%)"
  }
];

const galleryWorks = [
  ["Mirror Line", "AI Visuals"],
  ["Club Mark", "Logo & Graphics"],
  ["Tape Study", "Analog Works"],
  ["Night Crop", "AI Visuals"],
  ["Chrome Type", "Logo & Graphics"],
  ["Show Flyer", "AI Visuals"],
  ["Ink Plate", "Analog Works"],
  ["Sticker 03", "Logo & Graphics"],
  ["Street Grain", "Analog Works"],
  ["Cover Draft", "AI Visuals"],
  ["Badge 1963", "Logo & Graphics"],
  ["Black Primer", "Analog Works"]
];

const gradients = [
  "linear-gradient(130deg, #050505 0 55%, #e8e8e8 56% 58%, #151515 59%)",
  "radial-gradient(circle at 35% 35%, #d7d7d7 0 10%, #333333 11% 24%, #080808 25%)",
  "repeating-linear-gradient(45deg, #080808 0 12px, #242424 12px 18px, #a7a7a7 18px 20px)",
  "linear-gradient(160deg, #171717, #060606 55%, #bababa 56% 60%, #101010 61%)"
];

function renderFeaturedWorks() {
  const root = document.querySelector("#featuredWorks");
  root.innerHTML = featuredWorks
    .map(
      (work) => `
        <article class="work-card">
          <div class="work-visual" style="--art-gradient: ${work.tone}"></div>
          <div class="work-body">
            <span class="work-category">${work.category}</span>
            <h3>${work.title}</h3>
            <p>${work.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  const root = document.querySelector("#galleryGrid");
  root.innerHTML = galleryWorks
    .map(
      ([title, category], index) => `
        <article class="gallery-item">
          <div class="gallery-visual" style="--art-gradient: ${gradients[index % gradients.length]}"></div>
          <div class="gallery-body">
            <strong>${title}</strong>
            <span>${category}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function setLanguage(lang) {
  const copy = content[lang];
  document.documentElement.lang = lang === "jp" ? "ja" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });

  document.querySelector("#whatList").innerHTML = copy.whatList.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#howList").innerHTML = copy.howList.map((item) => `<li>${item}</li>`).join("");

  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

renderFeaturedWorks();
renderGallery();
setLanguage("en");
