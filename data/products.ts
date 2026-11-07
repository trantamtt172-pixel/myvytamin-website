export const matchaProducts = [
  {
    name: "Classic Iced Matcha Latte",
    copy: "Der klare Myvytamin-Klassiker: cremig, grün, smooth und auf Eis.",
    taste: "klassisch / cremig / matcha",
    accent: "matcha",
  },
  {
    name: "Strawberry/Mango Iced Matcha Latte",
    copy: "Fruchtig, süß und frisch - Strawberry, Mango und Matcha auf Eis.",
    taste: "strawberry / mango / fresh",
    accent: "berry",
  },
  {
    name: "Ubbe Iced Matcha Latte - Signature",
    copy: "Erdiger Matcha, cremige Ubbe und diese Farbe, die man nicht vergisst.",
    taste: "ube / cremig / signature",
    accent: "ube",
  },
] as const;

export const cookieProducts = [
  {
    name: "Matcha White Chocolate Raspberry",
    copy: "Matcha, weiße Schokolade und fruchtige Himbeere - soft gebacken und hausgemacht.",
    badge: "M",
  },
  {
    name: "Brown Butter Chocolate Chip",
    copy: "Nussige Brown Butter und schmelzende Chocolate Chips - außen goldig, innen soft.",
    badge: "B",
  },
  {
    name: "Lemon Dream Glazed Cookie",
    copy: "Zitronig, soft und mit feiner Glasur - ein frischer Cookie für den Spätsommer.",
    badge: "L",
  },
] as const;

/**
 * Amazon product URLs are intentionally kept in one place. Each URL must
 * contain our Associates tag (`myvytamin0d-21`) so no untracked Amazon link
 * can slip into the storefront.
 */
export const affiliateProducts = [
  {
    name: "Nespresso Kapselmaschine mit Milchaufschäumer",
    copy: "Für cremige Latte-Momente zuhause – unser Amazon-Favorit für den Coffee-Shop-Vibe in der eigenen Küche.",
    image: "https://images-eu.ssl-images-amazon.com/images/P/B01ITICQR4.01._SCLZZZZZZZ_SX500_.jpg",
    imageAlt: "Nespresso Kapselmaschine mit separatem Milchaufschäumer",
    // Provided Amazon Associates link; tag has been verified.
    href: "https://www.amazon.de/dp/B01ITICQR4/ref=cm_sw_r_as_gl_apa_gl_i_PX00T3B30307TQKJ5KQ6?linkCode=ml1&tag=myvytamin0d-21&linkId=3f0b46d2bcfcf5e17c1a891b47052d70&gaOptInStatus=true&ascsubtag=srctok-51a0580e4c84545a&btn_type=ss&btn_ref=srctok-51a0580e4c84545a",
  },
  {
    name: "NaturaleBio Bio Matcha Pulver",
    copy: "Ceremonial Grade Matcha für deinen cremigen Matcha-Moment zuhause.",
    image: "https://m.media-amazon.com/images/I/41wLkeyN54L._AC_SX679_.jpg",
    imageAlt: "NaturaleBio Bio Matcha Pulver",
    href: "https://www.amazon.de/dp/B07SZFD3P9?tag=myvytamin0d-21&linkCode=ml1&linkId=e173ecf0d724c268a6c3c2bbb5596df1",
  },
  {
    name: "PoppaTea Ceremonial Matcha – 50 g",
    copy: "Zeremonieller Matcha aus Japan in der praktischen 50-g-Dose.",
    image: "https://m.media-amazon.com/images/I/41odbkf1mqL._AC_SX679_.jpg",
    imageAlt: "PoppaTea Ceremonial Matcha Pulver in einer Dose",
    href: "https://www.amazon.de/dp/B0DYK94XY8?tag=myvytamin0d-21&linkCode=ml1&linkId=1f850df64688d52c55ec85d5e27d2f0c",
  },
  {
    name: "BLOOMWARE Glasbecher mit Strohhalmen",
    copy: "Ästhetische Gläser für Iced Matcha, Iced Coffee und deine Lieblingsdrinks.",
    image: "/assets/images/content/giveaway-matcha-set-2026.webp",
    imageAlt: "Gläser und Matcha-Zubehör für kalte Drinks",
    href: "https://www.amazon.de/dp/B0GR1PXN11?tag=myvytamin0d-21&linkCode=ml1&linkId=8bf4279d3dad851b09cb9855a0e3f412",
  },
  {
    name: "Zecnaud Matcha-Set mit Bambusbesen",
    copy: "Keramik und Bambus für einen entspannten Einstieg in dein Matcha-Ritual.",
    image: "/assets/images/posters/hero-matcha-v2.jpg",
    imageAlt: "Matcha-Zubehör für die Zubereitung",
    href: "https://www.amazon.de/dp/B0FNWKMMMP?tag=myvytamin0d-21&linkCode=ml1&linkId=2591950ead7514846d0536d8f5fedbbb",
  },
  {
    name: "Ausgewählter Kitchen-Favorit",
    copy: "Ein ausgewähltes Produkt für deine Matcha- und Kitchen-Corner.",
    image: "/assets/images/posters/strawberry-matcha-social-v1.jpg",
    imageAlt: "Iced Matcha in einem Glas",
    href: "https://www.amazon.de/dp/B0GTQDMWKT?tag=myvytamin0d-21&linkCode=ml1&linkId=9f0ecb58b6c696ce37916bc0abcec6ff",
  },
  {
    name: "BOROVELA Purple Sweet Potato Powder",
    copy: "Natürliches violettes Pulver für kreative Drinks, Smoothies und Desserts.",
    image: "https://www.gosupps.com/media/catalog/product/8/1/81NcDoaGTRL.jpg",
    imageAlt: "BOROVELA Purple Sweet Potato Powder",
    href: "https://www.amazon.de/dp/B09286WMNG?tag=myvytamin0d-21&linkCode=ml1&linkId=6f308ae83c2bb56d42e64f30a58b67ca",
  },
  {
    name: "Ausgewählter Drink-Favorit",
    copy: "Ein weiteres ausgewähltes Produkt für besondere Drinks zuhause.",
    image: "/assets/images/posters/ube-v2.jpg",
    imageAlt: "Violetter Iced Drink als Inspiration",
    href: "https://www.amazon.de/dp/B0FCQSCYP3?tag=myvytamin0d-21&linkCode=ml1&linkId=da2bbab24751e89ef4e1c5b60bc50bf3",
  },
  {
    name: "Ausgewählter Myvytamin-Favorit",
    copy: "Ein ausgewähltes Produkt für schöne Genussmomente zuhause.",
    image: "/assets/images/posters/matcha-cookie-reveal-social-v1.jpg",
    imageAlt: "Matcha und Cookie als Genussmoment",
    href: "https://www.amazon.de/dp/B0BTN7D2K8?tag=myvytamin0d-21&linkCode=ml1&linkId=4f7512079e48ae4169d5d1a58161a59c",
  },
] as const;

export const services = [
  "Individuelle Torten",
  "Kuchen nach Wunsch",
  "Matcha-Catering",
  "Private Feiern & Hochzeiten",
  "Firmenveranstaltungen",
  "Pop-up-Kooperationen",
] as const;
