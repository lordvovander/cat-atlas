export const SOURCES = {
  cfaRanking: {
    title: "CFA Cat Talk — Most Popular Breeds for 2025 (registrations in 2024)",
    url: "https://cfa.org/cat-talk/most-popular-breeds-for-2024/"
  },

  // Maine Coon
  maineCoonBreed: { title: "CFA — Maine Coon", url: "https://cfa.org/breed/maine-coon-cat/" },
  maineCoonStd: { title: "CFA — Maine Coon Standard (PDF)", url: "https://cfa.org/wp-content/uploads/2024/03/maine-coon-standard.pdf" },
  fluffyCoats: { title: "CFA Cat Talk — Fluffy coats care", url: "https://cfa.org/cat-talk/fluffy-coats-and-how-to-properly-care-for-them/" },

  // Ragdoll
  ragdollBreed: { title: "CFA — Ragdoll", url: "https://cfa.org/breed/ragdoll/" },
  ragdollStd: { title: "CFA — Ragdoll Standard (PDF)", url: "https://cfa.org/wp-content/uploads/2024/03/ragdoll-standard.pdf" },

  // Persian
  persianBreed: { title: "CFA — Persian", url: "https://cfa.org/breed/persian/" },
  persianStd: { title: "CFA — Persian Standard (PDF)", url: "https://cfa.org/wp-content/uploads/2024/03/persian-standard.pdf" },

  // Exotic
  exoticBreed: { title: "CFA — Exotic", url: "https://cfa.org/breed/exotic/" },

  // Devon Rex
  devonBreed: { title: "CFA — Devon Rex", url: "https://cfa.org/breed/devon-rex/" },
  devonBreedsDH: { title: "CFA — Devon Rex (Breeds D–H page)", url: "https://cfa.org/breeds/breedsd-h/devon-rex/" },
  devonArticle: { title: "CFA — Devon Rex article", url: "https://cfa.org/devon-rex-article/" },

  // Abyssinian
  abyssBreed: { title: "CFA — Abyssinian", url: "https://cfa.org/breed/abyssinian/" },
  abyssStd: { title: "CFA — Abyssinian Standard (PDF)", url: "https://cfa.org/wp-content/uploads/2024/02/abyssinian-standard.pdf" },

  // British Shorthair
  bshBreed: { title: "CFA — British Shorthair", url: "https://cfa.org/breed/british-shorthair/" },
  bshStd: { title: "CFA — British Shorthair Standard (PDF)", url: "https://cfa.org/wp-content/uploads/2024/03/british-shorthair-standard.pdf" },

  // Siberian
  sibArticle: { title: "CFA — Siberian article", url: "https://cfa.org/siberian-article/" },
  sibBreed: { title: "CFA — Siberian", url: "https://cfa.org/breed/siberian/" },
  sibStd: { title: "CFA — Siberian Standard (PDF)", url: "https://cfa.org/wp-content/uploads/2024/03/siberian-standard.pdf" },

  // Sphynx
  sphynxBreed: { title: "CFA — Sphynx", url: "https://cfa.org/breed/sphynx/" },
  sphynxStd: { title: "CFA — Sphynx Standard (PDF)", url: "https://cfa.org/wp-content/uploads/2024/03/sphynx-standard.pdf" },
  sphynxTalk: { title: "CFA Cat Talk — What you don’t know about Sphynx", url: "https://cfa.org/cat-talk/what-you-dont-know-about-sphynx/" },

  // Russian Blue
  rbPage: { title: "CFA — Russian Blue", url: "https://cfa.org/russian-blue/" },
  rbStd: { title: "CFA — Russian Blue Standard (PDF)", url: "https://cfa.org/wp-content/uploads/2024/03/russian-blue-standard.pdf" },
};

export const BREEDS = [
  {
    id: "maine-coon",
    rank: 1,
    name: { ru: "Мейн‑кун", en: "Maine Coon" },
    hero: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "CFA описывает мейн‑куна как крепкую, выносливую кошку, адаптированную к суровому климату; важен баланс без экстремальных черт.",
      en: "CFA describes the Maine Coon as rugged and hardy, adapted to a harsh climate; balance without extremes is emphasized."
    },
    facts: [
      {
        ru: "CFA указывает, что в 1976 году мейн‑куны получили чемпионский статус.",
        en: "CFA notes Maine Coons achieved Championship status in 1976.",
        sources: [SOURCES.maineCoonBreed]
      },
      {
        ru: "В стандарте CFA отмечено: «Качество важнее размера».",
        en: "The CFA standard states: “Quality over size.”",
        sources: [SOURCES.maineCoonStd]
      },
      {
        ru: "CFA пишет, что заводчики управляют проблемами здоровья, включая дисплазию тазобедренного сустава и гипертрофическую кардиомиопатию.",
        en: "CFA states breeders manage health issues including hip dysplasia and hypertrophic cardiomyopathy.",
        sources: [SOURCES.maineCoonBreed]
      },
      {
        ru: "CFA рекомендует для мейн‑куна вычёсывание пару раз в неделю (в контексте ухода за «пушистыми» шерстями).",
        en: "CFA suggests brushing Maine Coons a couple of times per week (in a fluffy‑coat care context).",
        sources: [SOURCES.fluffyCoats]
      }
    ]
  },

  {
    id: "ragdoll",
    rank: 2,
    name: { ru: "Рэгдолл", en: "Ragdoll" },
    hero: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "CFA описывает рэгдоллов как loving, gentle, calm и sociable; отмечается игривость и обучаемость.",
      en: "CFA describes Ragdolls as loving, gentle, calm, and sociable; playful and trainable."
    },
    facts: [
      {
        ru: "В стандарте CFA рэгдолл описан как «blue‑eyed pointed cat» среднего/крупного размера без экстремальных черт.",
        en: "The CFA standard describes the Ragdoll as a blue‑eyed pointed cat of medium to large size without extremes.",
        sources: [SOURCES.ragdollStd]
      },
      {
        ru: "CFA указывает, что рэгдоллы медленно созревают, а полный окрас/шерсть формируются примерно к 3 годам.",
        en: "CFA notes Ragdolls mature slowly; full color/coat develops at about 3 years.",
        sources: [SOURCES.ragdollStd]
      },
      {
        ru: "CFA упоминает предрасположенность к hypertrophic cardiomyopathy и то, что заводчики тестируют это.",
        en: "CFA mentions predisposition to hypertrophic cardiomyopathy and that breeders test for it.",
        sources: [SOURCES.ragdollBreed]
      }
    ]
  },

  {
    id: "persian",
    rank: 3,
    name: { ru: "Персидская", en: "Persian" },
    hero: "https://images.unsplash.com/photo-1606213651356-0272d8f86d3b?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "CFA пишет, что персы «playful but calm» и хорошо подходят для дома; также подчёркивается высокая потребность в уходе за шерстью.",
      en: "CFA says Persians are playful but calm and well‑suited to home life; they also require significant coat care."
    },
    facts: [
      {
        ru: "CFA отмечает, что ранее акцент на изысканных чертах приводил к проблемам дыхания из‑за маленьких ноздрей; заводчики реагировали, исключая таких кошек из разведения.",
        en: "CFA notes past emphasis on refinement caused breathing issues due to small nostrils; breeders responded by removing such cats from breeding programs.",
        sources: [SOURCES.persianBreed]
      },
      {
        ru: "В стандарте CFA говорится, что ноздри должны быть достаточно открыты для свободного дыхания.",
        en: "The CFA standard states nostrils must be sufficiently open to permit free breathing.",
        sources: [SOURCES.persianStd]
      },
      {
        ru: "CFA пишет, что PKD контролируется генетическим тестированием и исключением поражённых животных из разведения.",
        en: "CFA states PKD is controlled via genetic testing and removing affected cats from breeding.",
        sources: [SOURCES.persianBreed]
      },
      {
        ru: "CFA указывает, что персы требуют ежедневного ухода с металлической расчёской с широкими зубьями (в статье про уход за «пушистыми» шерстями).",
        en: "CFA notes Persians require daily grooming with a wide‑tooth metal comb (in its fluffy‑coat care article).",
        sources: [SOURCES.fluffyCoats]
      }
    ]
  },

  {
    id: "exotic",
    rank: 4,
    name: { ru: "Экзотическая", en: "Exotic" },
    hero: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "CFA описывает экзотов как quiet, loyal и adaptable companions; отмечается мнение, что они могут быть немного более активными и игривыми, чем персы.",
      en: "CFA describes Exotics as quiet, loyal, adaptable companions; some consider them a bit more active and playful than Persians."
    },
    facts: [
      {
        ru: "CFA пишет, что ежегодно регистрирует немного больше экзотов, чем персов.",
        en: "CFA says it registers slightly more Exotics than Persians annually.",
        sources: [SOURCES.exoticBreed]
      },
      {
        ru: "На странице CFA шерсть описана как dense, plush, soft и «standing out» из‑за богатого подшёрстка.",
        en: "CFA describes the coat as dense, plush, soft, and standing out due to a rich undercoat.",
        sources: [SOURCES.exoticBreed]
      }
    ]
  },

  {
    id: "devon-rex",
    rank: 5,
    name: { ru: "Девон‑рекс", en: "Devon Rex" },
    hero: "https://images.unsplash.com/photo-1548366086-7f1b76106622?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "CFA подчёркивает «эльфийскую» внешность девонов с большими глазами и ушами и описывает их как очень ориентированных на человека.",
      en: "CFA highlights the Devon’s elfin look with large eyes and ears and describes them as very people‑oriented."
    },
    facts: [
      {
        ru: "CFA (Breeds D–H) указывает, что вес взрослых обычно 6–9 фунтов.",
        en: "CFA (Breeds D–H) states adult weight is usually 6–9 pounds.",
        sources: [SOURCES.devonBreedsDH]
      },
      {
        ru: "В статье CFA указано: в 1979 CFA признала Devon Rex отдельной породой, а в 1983 предоставила чемпионский статус.",
        en: "A CFA article says CFA recognized Devon Rex as a separate breed in 1979 and granted Championship status in 1983.",
        sources: [SOURCES.devonArticle]
      },
      {
        ru: "CFA отмечает важность генетического тестирования из‑за высокой частоты группы крови B в генофонде.",
        en: "CFA notes genetic testing matters due to a high frequency of blood type B in the gene pool.",
        sources: [SOURCES.devonBreed]
      }
    ]
  },

  {
    id: "abyssinian",
    rank: 6,
    name: { ru: "Абиссинская", en: "Abyssinian" },
    hero: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "CFA описывает абиссинцев как активных, любознательных и сообразительных, которым нужно внимание и которые не любят одиночество.",
      en: "CFA describes Abyssinians as active, curious, intelligent, attention‑seeking cats that dislike being alone."
    },
    facts: [
      {
        ru: "В стандарте CFA подчёркиваются тикинг и его равномерность (2–3 полосы), а также «тёплый и сияющий» окрас.",
        en: "The CFA standard emphasizes even ticking (2–3 bands) and a warm, glowing color.",
        sources: [SOURCES.abyssStd]
      },
      {
        ru: "CFA пишет, что заводчики используют генетические тесты, чтобы исключать носителей гена, вызывающего анемию.",
        en: "CFA states breeders use genetic tests to avoid carriers of a gene that causes anemia.",
        sources: [SOURCES.abyssBreed]
      }
    ]
  },

  {
    id: "british-shorthair",
    rank: 7,
    name: { ru: "Британская короткошерстная", en: "British Shorthair" },
    hero: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "CFA описывает британцев как спокойных и «quiet cats» и отмечает их привязанность к семье.",
      en: "CFA describes British Shorthairs as calm, quiet cats and notes their family attachment."
    },
    facts: [
      {
        ru: "CFA указывает, что полной зрелости порода достигает за 3–5 лет.",
        en: "CFA notes full maturity takes 3–5 years.",
        sources: [SOURCES.bshBreed]
      },
      {
        ru: "CFA пишет, что специфических проблем со здоровьем нет, но заводчикам стоит учитывать группу крови B (в контексте трансфузий).",
        en: "CFA says there are no breed‑specific health issues, but breeders should consider blood type B (in a transfusion context).",
        sources: [SOURCES.bshBreed]
      }
    ]
  },

  {
    id: "siberian",
    rank: 8,
    name: { ru: "Сибирская", en: "Siberian" },
    hero: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "В статье CFA сказано, что первые упоминания о сибирской породе относятся примерно к 1000 году н. э., и что это исконно русская порода из сурового климата Сибири.",
      en: "A CFA article says the first mentions of the Siberian breed date to about 1000 A.D., describing it as an indigenous Russian breed from Siberia’s harsh climate."
    },
    facts: [
      {
        ru: "CFA указывает, что сибиряки медленно созревают и достигают полного развития к 5 годам.",
        en: "CFA notes Siberians mature slowly and reach full development by age 5.",
        sources: [SOURCES.sibArticle]
      },
      {
        ru: "В статье CFA описана плотная водоотталкивающая «тройная» шерсть, более густая зимой и более редкая летом.",
        en: "The CFA article describes a dense, water‑repellent triple coat that is heavier in winter and lighter in summer.",
        sources: [SOURCES.sibArticle]
      },
      {
        ru: "В статье CFA сказано, что сибирские кошки считаются гипоаллергенными из‑за низкого уровня FelD1 в слюне, но реакция индивидуальна.",
        en: "The CFA article says Siberians are considered hypoallergenic due to lower FelD1 in saliva, but reactions vary by person.",
        sources: [SOURCES.sibArticle]
      }
    ]
  },

  {
    id: "sphynx",
    rank: 9,
    name: { ru: "Сфинкс", en: "Sphynx" },
    hero: "https://images.unsplash.com/photo-1536590158209-e9d615d525e0?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "CFA пишет, что сфинксы не полностью лысые; кожа тёплая и мягкая на ощупь, «как персик/нектарин».",
      en: "CFA notes Sphynx are not completely hairless; the skin feels warm and soft, like a peach/nectarine."
    },
    facts: [
      {
        ru: "В стандарте CFA сказано, что переносица должна быть нормально покрыта шерстью, а тело может варьироваться от бесшерстного до «персикового пушка».",
        en: "The CFA standard says the bridge of the nose should be normally covered with hair, while the body can range from hairless to peach fuzz.",
        sources: [SOURCES.sphynxStd]
      },
      {
        ru: "CFA Cat Talk пишет, что требуется регулярное купание, поскольку нет шерсти, которая бы впитывала кожные масла.",
        en: "CFA Cat Talk notes regular bathing is needed because there’s no coat to absorb skin oils.",
        sources: [SOURCES.sphynxTalk]
      },
      {
        ru: "CFA перечисляет специфические проблемы, включая HCM и hereditary myopathy.",
        en: "CFA lists specific issues including HCM and hereditary myopathy.",
        sources: [SOURCES.sphynxBreed]
      }
    ]
  },

  {
    id: "russian-blue",
    rank: 10,
    name: { ru: "Русская голубая", en: "Russian Blue" },
    hero: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=2400&q=85",
    intro: {
      ru: "CFA указывает серебристо‑серую короткую шерсть и изумрудно‑зелёные глаза, а также отмечает, что породе не нужен сложный уход.",
      en: "CFA describes the silver‑gray short coat and vivid green eyes and notes they don’t require complicated grooming."
    },
    facts: [
      {
        ru: "CFA приводит диапазон веса: самцы «редко» весят больше 4,5 кг, самки — примерно 2,2–3,6 кг.",
        en: "CFA gives a weight range: males rarely exceed 4.5 kg; females are about 2.2–3.6 kg.",
        sources: [SOURCES.rbPage]
      },
      {
        ru: "CFA пишет: расчёсывание 2–3 раза в месяц помогает контролировать линьку.",
        en: "CFA says brushing 2–3 times per month helps control shedding.",
        sources: [SOURCES.rbPage]
      },
      {
        ru: "CFA называет породу «здоровой, естественной» без специфических генетических проблем, но отмечает риск ожирения при недостатке активности.",
        en: "CFA calls it a healthy, natural breed without specific genetic problems, while noting obesity risk without enough activity.",
        sources: [SOURCES.rbPage]
      }
    ]
  }
];