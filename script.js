const content = {
  en: {
    worksTitle: "Selected Works",
    galleryTitle: "Gallery",
    commissionsTitle: "COMMISSIONS",
    whatTitle: "What I Make",
    howTitle: "How It Works",
    aboutTitle: "About KAORU",
    aboutBody:
      "Lowrider / KUSTOM Kulture × AI & Analog Art\n\nI create visuals inspired by Lowrider and KUSTOM Kulture, blending AI expression with an analog sensibility. Based in Japan, I’m always open to commission work, collaborations, and exhibition inquiries.\n\nWhile I live the lifestyle—cruising in my two classic Chevys—at heart, I’m just a dedicated, down-to-earth Japanese guy. When I'm not creating or driving, you'll probably find me out in nature keeping up with my health-nut routine.\n\nLet’s connect and create something dope together!",
    contactTitle: "Contact",
    contactCta: "DM ON INSTAGRAM",
    contactBody:
      "Tell me what you want to make. A rough idea is enough. DM me on Instagram for commissions, collaborations, or exhibition inquiries.",
    whatList: [
      "Custom AI Artwork",
      "Logo & Sticker Graphics",
      "Social Media Visuals",
      "Flyer & Event Artwork",
      "Paint Works"
    ],
    howList: ["Listen / Direction", "AI Exploration", "Refine / Design", "Deliver"]
  },
  jp: {
    worksTitle: "Selected Works",
    galleryTitle: "Gallery",
    commissionsTitle: "COMMISSIONS",
    whatTitle: "制作できるもの",
    howTitle: "制作の流れ",
    aboutTitle: "About KAORU",
    aboutBody:
      "Lowrider / KUSTOM Kulture × AI & Analog Art\n\nローライダーやカスタムカルチャーからインスパイアされた世界観を、AIの技術とアナログな感性で表現しているクリエイターです。日本を拠点に、ビジュアル制作のご依頼やコラボ、展示の相談を随時受け付けています。\n\nライフワークとして2台のクラシックシボレーを所有する一方で、中身はかなり真面目な日本人。休日は自然に癒やされに行く、ちょっとした健康オタクでもあります。面白いコト、一緒にやりましょう！",
    contactTitle: "Contact",
    contactCta: "Instagram DMで相談する",
    contactBody:
      "作りたいものがざっくりしていても大丈夫です。制作依頼、コラボ、展示のお話など、Instagram DMから気軽に相談してください。",
    whatList: [
      "AIビジュアル制作",
      "ロゴ・ステッカーグラフィック",
      "SNSビジュアル",
      "フライヤー・イベントアート",
      "カスタムペイント"
    ],
    howList: ["相談 / 方向性づくり", "AIでのビジュアル探索", "調整 / デザイン化", "納品"]
  }
};

const featuredWorks = [
  {
    title: "Pacific Sparks",
    category: "AI Visuals",
    description: "A cinematic Lowrider scene built around motion, chrome, sunset, and road sparks.",
    image: "assets/works/featured-01-lowrider-sunset.jpg"
  },
  {
    title: "Komahebi",
    category: "Logo & Graphics",
    description: "Japanese mythology, tattoo flash and KUSTOM car culture in one art piece.",
    image: "assets/works/featured-02-komahebi.png"
  },
  {
    title: "Whittier Dream",
    category: "AI Visuals",
    description: "A double-exposure street portrait with LA mood, gold light, tattoos, and a blue Impala.",
    image: "assets/works/featured-03-whittier.png"
  },
  {
    title: "Oldies But Goodies",
    category: "AI Visuals",
    description: "Fantasy poster atmosphere with smoke lettering, moonlight, and Lowrider.",
    image: "assets/works/featured-04-oldies.png"
  },
  {
    title: "Relentless C/C",
    category: "Logo & Graphics",
    description: "A panoramic artwork telling the story behind the owner’s Impala, life, and identity.",
    image: "assets/works/featured-05-relentless-cc.png"
  },
  {
    title: "Anderson Autoworks",
    category: "AI Visuals",
    description: "A stylized custom shop scene featuring the client’s neon-lit garage, a 1957 Chevrolet, and character-driven storytelling.",
    image: "assets/works/featured-06-anderson-autoworks.png"
  }
];

const galleryWorks = [
  {
    title: "Relentless Japan",
    category: "Logo & Graphics",
    image: "assets/works/gallery-01-relentless-japan.png"
  },
  {
    title: "Keep On Cruisin",
    category: "Social Visuals",
    image: "assets/works/gallery-02-keep-cruisin.png"
  },
  {
    title: "Street Study 01",
    category: "AI Visuals",
    image: "assets/works/gallery-03.png"
  },
  {
    title: "Street Study 02",
    category: "AI Visuals",
    image: "assets/works/gallery-04.png"
  },
  {
    title: "KUSTOM Frame",
    category: "AI Visuals",
    image: "assets/works/gallery-05.png"
  },
  {
    title: "Poster Study",
    category: "AI Visuals",
    image: "assets/works/gallery-06.png"
  },
  {
    title: "Night Culture",
    category: "AI Visuals",
    image: "assets/works/gallery-07.png"
  },
  {
    title: "Cruise Draft",
    category: "AI Visuals",
    image: "assets/works/gallery-08.png"
  },
  {
    title: "Pinup Blue",
    category: "AI Visuals",
    image: "assets/works/gallery-09-pinup-blue.png"
  },
  {
    title: "Sacramento Mark",
    category: "Logo & Graphics",
    image: "assets/works/gallery-10-sacramento.png"
  },
  {
    title: "Emenity",
    category: "Logo & Graphics",
    image: "assets/works/gallery-11-emenity.png"
  },
  {
    title: "Low And Slow",
    category: "AI Visuals",
    image: "assets/works/gallery-12-low-and-slow.png"
  },
  {
    title: "Relentless Santa",
    category: "Logo & Graphics",
    image: "assets/works/gallery-13-relentless-santa.png"
  },
  {
    title: "Sky Is The Limit",
    category: "Logo & Graphics",
    image: "assets/works/gallery-14-sky-limit.png"
  },
  {
    title: "Mi Familia Sticker",
    category: "Logo & Graphics",
    image: "assets/works/gallery-15-mi-familia-sticker.jpg"
  },
  {
    title: "Kawasaki Paint Set",
    category: "Paint Works",
    image: "assets/works/analog-06-kawasaki.jpg"
  },
  {
    title: "Metalflake Skate Deck",
    category: "Paint Works",
    image: "assets/works/analog-07-skate-deck.png"
  },
  {
    title: "Green Panel Lettering",
    category: "Paint Works",
    image: "assets/works/analog-08-green-panel.jpg"
  },
  {
    title: "Lowrider Bike Setup",
    category: "Paint Works",
    image: "assets/works/analog-09-bike-impala.jpg"
  },
  {
    title: "Blue Fire Paint",
    category: "Paint Works",
    image: "assets/works/analog-10-blue-fire.jpg"
  },
  {
    title: "Impala Paint Work",
    category: "Paint Works",
    image: "assets/works/analog-11-impala-paint.jpg"
  },
  {
    title: "Painted Decks",
    category: "Paint Works",
    image: "assets/works/analog-12-painted-decks.png"
  },
  {
    title: "Blue Custom Paint",
    category: "Paint Works",
    image: "assets/works/analog-13-blue-custom-paint.png"
  }
];

const heroVideos = [
  "assets/hero-videos/hero-01.mp4",
  "assets/hero-videos/hero-03.mp4",
  "assets/hero-videos/hero-04.mp4",
  "assets/hero-videos/hero-05.mp4",
  "assets/hero-videos/hero-07.mp4"
];

const workGroups = {
  featured: featuredWorks,
  gallery: galleryWorks
};

const mobileFeaturedLimit = 4;
const mobileQuery = window.matchMedia("(max-width: 620px)");
let activeWorkGroups = { ...workGroups };

const workSections = [
  {
    selector: "#featuredWorks",
    group: "featured",
    renderBody: (work) => `
      <div class="work-body">
        <span class="work-category">${work.category}</span>
        <h3>${work.title}</h3>
        <p>${work.description}</p>
      </div>
    `,
    itemClass: "work-card",
    visualClass: "work-visual"
  },
  {
    selector: "#galleryGrid",
    group: "gallery",
    renderBody: (work) => `
      <div class="gallery-body">
        <strong>${work.title}</strong>
        <span>${work.category}</span>
      </div>
    `,
    itemClass: "gallery-item",
    visualClass: "gallery-visual"
  }
];

function renderWorkSections() {
  activeWorkGroups = getActiveWorkGroups();

  workSections.forEach((section) => {
    const root = document.querySelector(section.selector);

    if (!root) {
      return;
    }

    root.innerHTML = activeWorkGroups[section.group]
      .map((work, index) => renderWorkCard(work, index, section))
      .join("");
  });
}

function getActiveWorkGroups() {
  if (!mobileQuery.matches) {
    return workGroups;
  }

  return {
    featured: featuredWorks.slice(0, mobileFeaturedLimit),
    gallery: featuredWorks.slice(mobileFeaturedLimit).concat(galleryWorks)
  };
}

function renderWorkCard(work, index, section) {
  return `
    <article class="${section.itemClass}">
      <button class="${section.visualClass} lightbox-trigger" type="button" data-lightbox-group="${section.group}" data-lightbox-index="${index}" aria-label="View ${work.title}">
        <img src="${work.image}" alt="${work.title}">
      </button>
      ${section.renderBody(work)}
    </article>
  `;
}

function setupLightbox() {
  const lightbox = document.querySelector("#artLightbox");
  const image = lightbox.querySelector(".lightbox-image");
  const title = lightbox.querySelector(".lightbox-caption strong");
  const category = lightbox.querySelector(".lightbox-caption span");
  const closeButton = lightbox.querySelector(".lightbox-close");

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".lightbox-trigger");
    const closeTarget = event.target.closest("[data-lightbox-close]");

    if (trigger) {
      const group = activeWorkGroups[trigger.dataset.lightboxGroup] || [];
      const work = group[Number(trigger.dataset.lightboxIndex)];
      openLightbox(work);
      return;
    }

    if (closeTarget) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  function openLightbox(work) {
    if (!work) {
      return;
    }

    image.src = work.image;
    image.alt = work.title;
    title.textContent = work.title;
    category.textContent = work.category;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  }
}

function setupHeroVideoLoop() {
  const players = Array.from(document.querySelectorAll(".hero-loop"));

  if (players.length < 2 || heroVideos.length === 0) {
    return;
  }

  let activeIndex = 0;
  let videoIndex = 0;

  players.forEach((player) => {
    player.muted = true;
    player.playsInline = true;
    player.addEventListener("ended", playNextHeroVideo);
    player.addEventListener("error", playNextHeroVideo);
  });

  setHeroVideo(players[0], heroVideos[0]);
  setHeroVideo(players[1], heroVideos[1 % heroVideos.length]);
  players[0].classList.add("is-active");
  players[0].play().catch(() => {});

  function playNextHeroVideo() {
    const current = players[activeIndex];
    const nextIndex = activeIndex === 0 ? 1 : 0;
    const next = players[nextIndex];

    videoIndex = (videoIndex + 1) % heroVideos.length;
    const nextVideo = heroVideos[videoIndex];

    setHeroVideo(next, nextVideo);
    next.currentTime = 0;
    next.load();
    next.play().catch(() => {});
    next.classList.add("is-active");
    current.classList.remove("is-active");

    activeIndex = nextIndex;
  }

  function setHeroVideo(player, videoPath) {
    player.src = videoPath;
    updateHeroVideoMotion(player, videoPath);
  }

  function updateHeroVideoMotion(player, videoPath) {
    player.classList.toggle("is-diagonal-pan", videoPath.includes("hero-07"));
  }
}

function setLanguage(lang) {
  const selectedLang = content[lang] ? lang : "en";
  const copy = content[selectedLang];
  document.documentElement.lang = selectedLang === "jp" ? "ja" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });

  setListContent("#whatList", copy.whatList);
  setListContent("#howList", copy.howList);

  document.querySelectorAll(".lang-button").forEach((button) => {
    const isActive = button.dataset.lang === selectedLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setListContent(selector, items) {
  const root = document.querySelector(selector);

  if (!root) {
    return;
  }

  root.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function setupLanguageSwitcher() {
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function setupResponsiveWorkSections() {
  const rerender = () => renderWorkSections();

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", rerender);
    return;
  }

  mobileQuery.addListener(rerender);
}

function init() {
  renderWorkSections();
  setupResponsiveWorkSections();
  setupLightbox();
  setupHeroVideoLoop();
  setupLanguageSwitcher();
  setLanguage("en");
}

init();
