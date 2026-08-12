export const BRANDS = [
  {
    slug: "abb",
    name: "ABB",
    init: "AB",
    cat: "Switchgear Distribution",
    desc: "Global manufacturer of switchgear, breakers and industrial automation equipment.",
    logo: "/images/brands/abb.jpeg",
  },
  {
    slug: "schneider-electric",
    name: "Schneider Electric",
    init: "SC",
    cat: "Switchgear Distribution",
    desc: "Global specialist in energy management, distribution boards and automation equipment.",
    logo: "/images/brands/schneider.jpeg",
  },
  {
    slug: "havells",
    name: "Havells",
    init: "HA",
    cat: "Wiring Accessories",
    desc: "Leading manufacturer of switches, wiring devices and electrical accessories.",
    logo: null,
  },
  {
    slug: "crabtree-electrical",
    name: "Crabtree",
    init: "CR",
    cat: "Wiring Accessories",
    desc: "Long-established brand of switches, sockets and consumer units.",
    logo: null,
  },
  {
    slug: "thorn-lighting",
    name: "Thorn",
    init: "TH",
    cat: "Light Fittings & Luminaires",
    desc: "Lighting manufacturer with decades of commercial and outdoor lighting experience.",
    logo: null,
  },
  {
    slug: "osram",
    name: "Osram",
    init: "OS",
    cat: "Lamps, Bulbs & Tubes",
    desc: "Global lamp manufacturer covering LED, fluorescent and specialist lighting.",
    logo: null,
  },
  {
    slug: "ledvance",
    name: "LEDVANCE",
    init: "LV",
    cat: "Lamps, Bulbs & Tubes",
    desc: "LED lamp and luminaire manufacturer for home and commercial lighting.",
    logo: "/images/brands/ledvance.jpeg",
  },
  {
    slug: "philips-lighting",
    name: "Philips",
    init: "PH",
    cat: "Light Fittings & Luminaires",
    desc: "Global lighting manufacturer spanning LED lamps, luminaires and lighting systems.",
    logo: "/images/brands/phillips.jpeg",
  },
  {
    slug: "marshall-tufflex",
    name: "Marshall Tufflex",
    init: "MT",
    cat: "PVC Trunking & Conduits",
    desc: "Manufacturer of PVC trunking, conduit and cable management systems.",
    logo: "/images/brands/marshall-tufflex.jpeg",
  },
  {
    slug: "sollatek",
    name: "Sollatek",
    init: "SO",
    cat: "Power Protection",
    desc: "Specialist in voltage stabilisers and surge protection for unstable power supplies.",
    logo: "/images/brands/sollatek.jpeg",
  },
  {
    slug: "crompton-greaves",
    name: "Crompton Greaves",
    init: "CG",
    cat: "Motor Controls & Starters",
    desc: "Manufacturer of motors, starters and industrial electrical equipment.",
    logo: null,
  },
  {
    slug: "larsen-toubro",
    name: "Larsen & Toubro",
    init: "LT",
    cat: "Circuit Protection",
    desc: "Manufacturer of circuit breakers, switchgear and industrial electricals.",
    logo: "/images/brands/larsen-toubro.jpeg",
  },
];

export const findBrand = (slug) => BRANDS.find((b) => b.slug === slug);

export function brandRangeItems(cat) {
  const map = {
    "Switchgear Distribution": [
      "Circuit breakers",
      "Switchgear",
      "Distribution boards",
      "Power protection",
    ],
    "Wiring Accessories": [
      "Switches",
      "Socket outlets",
      "Dimmers",
      "Cover plates",
    ],
    "Light Fittings & Luminaires": [
      "LED luminaires",
      "Downlights",
      "Floodlights",
      "Outdoor lighting",
    ],
    "Lamps, Bulbs & Tubes": [
      "LED lamps",
      "Fluorescent tubes",
      "Specialist lighting",
      "Retrofit bulbs",
    ],
    "PVC Trunking & Conduits": [
      "PVC trunking",
      "Conduit",
      "Cable management",
      "Floor outlet boxes",
    ],
    "Power Protection": [
      "Voltage stabilisers",
      "Surge protection",
      "UPS systems",
      "Power conditioning",
    ],
    "Motor Controls & Starters": [
      "Motor starters",
      "Contactors",
      "Overload relays",
      "Control panels",
    ],
    "Circuit Protection": [
      "Circuit breakers",
      "Switchgear",
      "Industrial electricals",
      "Protection relays",
    ],
  };
  return (
    map[cat] || [
      "Electrical accessories",
      "Related components",
      "Genuine spare parts",
    ]
  );
}
