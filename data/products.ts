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
    name: "Nespresso Aeroccino Milchaufschäumer",
    copy: "Für heißen oder kalten, cremigen Milchschaum – passend für Cappuccino, Latte und Iced Drinks.",
    image: "/assets/images/favorites/nespresso-aeroccino-milchaufschaeumer.svg",
    imageAlt: "Nespresso Aeroccino Milchaufschäumer in Schwarz und Edelstahl",
    // Provided Amazon Associates link; tag has been verified.
    href: "https://www.amazon.de/dp/B004RQE6QC/ref=cm_sw_r_as_gl_apa_gl_i_ZK37BPF9YHVYNFSRQN9W?linkCode=ml1&tag=myvytamin0d-21&linkId=7adc99da5227b8963d4e3c4fd9d3dad1&gaOptInStatus=true&ascsubtag=srctok-1054cf29dd60fa50&btn_type=ss&btn_ref=srctok-1054cf29dd60fa50",
  },
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
    image: "/assets/images/favorites/bloomware-glass-cups.svg",
    imageAlt: "Glasbecher mit Bambusdeckel und Strohhalm",
    href: "https://www.amazon.de/dp/B0GR1PXN11?tag=myvytamin0d-21&linkCode=ml1&linkId=8bf4279d3dad851b09cb9855a0e3f412",
  },
  {
    name: "Zecnaud Matcha Tea Set – 8-teilig",
    copy: "Keramik-Set mit Bambusbesen und Zubehör für deine Matcha-Zubereitung.",
    image: "/assets/images/favorites/zecnaud-matcha-set.svg",
    imageAlt: "Zecnaud Matcha-Set mit rosa Keramikschale und Bambusbesen",
    href: "https://www.amazon.de/dp/B0FNWKMMMP?tag=myvytamin0d-21&linkCode=ml1&linkId=2591950ead7514846d0536d8f5fedbbb",
  },
  {
    name: "MinXpert Matcha Set – 5-teilig",
    copy: "Matcha-Schale mit Ausgießer, Bambusbesen, Besenhalter, Löffel und Sieb.",
    image: "/assets/images/favorites/minxpert-matcha-set.svg",
    imageAlt: "MinXpert Matcha-Set mit blau-rosa Keramikschale",
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
    name: "Matcha Tea Set – Hellgrüner Farbverlauf",
    copy: "Matcha-Set mit Schale, Bambusbesen, Sieb, Löffel und Besenhalter.",
    image: "/assets/images/favorites/hellgruenes-matcha-set.svg",
    imageAlt: "Matcha-Set mit hellgrüner Keramikschale und Bambusbesen",
    href: "https://www.amazon.de/dp/B0FCQSCYP3?tag=myvytamin0d-21&linkCode=ml1&linkId=da2bbab24751e89ef4e1c5b60bc50bf3",
  },
  {
    name: "Eisaro Eiswürfelform XXL mit Deckel",
    copy: "Für große Eiswürfel und extra kalte Iced Matcha- und Coffee-Momente.",
    image: "/assets/images/favorites/eisaro-eiswuerfelform.svg",
    imageAlt: "Eisaro Eiswürfelform mit großen Eiswürfeln und Deckel",
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
