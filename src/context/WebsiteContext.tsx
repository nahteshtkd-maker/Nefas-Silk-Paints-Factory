import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, TranslationSet } from "../translations";
import { Business, TimelineItem, NewsItem, CareerOpening, Testimonial } from "../types";

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  desc: string;
}

export interface Shop {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  lat: number;
  lng: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  applications: string[];
  colors: { name: string; hex: string }[];
  coverage: string;
  dryingTime: string;
  finish: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  biography: string;
  image: string;
  linkedin: string;
  email: string;
}

export interface GroupCompany {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
  whatsapp: string;
  facebook: string;
  linkedin: string;
  telegram: string;
}

export interface SeoSettings {
  title: string;
  description: string;
  keywords: string;
}

interface WebsiteContextType {
  language: "EN" | "AM";
  setLanguage: (lang: "EN" | "AM") => void;
  t: (key: keyof TranslationSet) => string;
  
  // Dynamic Content (Editable through Admin Dashboard)
  heroSlides: HeroSlide[];
  setHeroSlides: (slides: HeroSlide[]) => void;
  
  businesses: Business[];
  setBusinesses: (businesses: Business[]) => void;
  
  timeline: TimelineItem[];
  setTimeline: (timeline: TimelineItem[]) => void;
  
  testimonials: Testimonial[];
  setTestimonials: (testimonials: Testimonial[]) => void;
  
  news: NewsItem[];
  setNews: (news: NewsItem[]) => void;
  
  careers: CareerOpening[];
  setCareers: (careers: CareerOpening[]) => void;
  
  products: Product[];
  setProducts: (products: Product[]) => void;
  
  shops: Shop[];
  setShops: (shops: Shop[]) => void;
  
  teamMembers: TeamMember[];
  setTeamMembers: (members: TeamMember[]) => void;
  
  groupCompanies: GroupCompany[];
  setGroupCompanies: (companies: GroupCompany[]) => void;
  
  ceoMessage: {
    name: string;
    role: string;
    message: string;
    image: string;
  };
  setCeoMessage: (ceo: { name: string; role: string; message: string; image: string }) => void;
  
  vision: {
    visionText: string;
    mission1: string;
    mission1Desc: string;
    mission2: string;
    mission2Desc: string;
    mission3: string;
    mission3Desc: string;
  };
  setVision: (vision: any) => void;
  
  contactInfo: ContactInfo;
  setContactInfo: (info: ContactInfo) => void;
  
  seoSettings: SeoSettings;
  setSeoSettings: (seo: SeoSettings) => void;

  resetToDefault: () => void;
}

const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined);

// Initial default states matching Company Profile PDF and standard requirements
const DEFAULT_HERO_SLIDES: HeroSlide[] = [
  {
    id: "h1",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200&h=700",
    title: "Paint Manufacturing",
    desc: "Advanced paint production, automated resin reactors & quality testing."
  },
  {
    id: "h2",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=700",
    title: "R&D Chemistry Laboratory",
    desc: "Innovative chemical formulations and rigorous color spectrometer checks."
  },
  {
    id: "h3",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200&h=700",
    title: "Skilled Industrial Workers",
    desc: "Over 1,000 highly trained employees powering our factories."
  },
  {
    id: "h4",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200&h=700",
    title: "Automated Paint Production Line",
    desc: "Consistent paint packaging and state-of-the-art Italian canning presses."
  },
  {
    id: "h5",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200&h=700",
    title: "Premium Coffee Processing",
    desc: "Wet and dry mill processing of export-grade Arabica specialty coffee."
  },
  {
    id: "h6",
    image: "https://images.unsplash.com/photo-1574321020309-1f48651c6c0e?auto=format&fit=crop&q=80&w=1200&h=700",
    title: "Agro & Sesame Export Sourcing",
    desc: "Humera sesame and pulses cleaned and graded for world trade hubs."
  },
  {
    id: "h7",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200&h=700",
    title: "Support for Ethiopian Farmers",
    desc: "Direct trade relationships ensuring fair compensation for smallholders."
  },
  {
    id: "h8",
    image: "/images/fleet_logistics_branded_truck.png",
    title: "Branded Cargo & Logistics Trucks",
    desc: "A reliable fleet of 200+ trucks bridging Addis and Port of Djibouti."
  }
];

const DEFAULT_BUSINESSES: Business[] = [
  {
    id: "paint-manufacturing",
    title: "Paint Manufacturing",
    description: "Nefas Silk Paints is one of Ethiopia's pioneers in paint manufacturing, producing high-quality decorative, industrial, and protective coatings trusted across the nation. Continuous investment in modern technology and chemical production ensures world-class standards and long-term innovation.",
    iconName: "PaintRoller",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=600&h=450",
    details: [
      "Decorative & Architectural Coatings",
      "Industrial & Protective Anti-Corrosive Paints",
      "Automotive Refinishes & Primers",
      "Continuous Investment in Chemical R&D",
      "Environmentally-Friendly Low-VOC Options"
    ]
  },
  {
    id: "coffee-export",
    title: "Coffee Export",
    description: "Exporting premium Ethiopian coffee sourced directly from farmers, suppliers, and the Ethiopian Commodity Exchange (ECX), delivering authentic Ethiopian coffee to international markets through trusted partnerships.",
    iconName: "Coffee",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600&h=450",
    details: [
      "Sourced Directly from Yirgacheffe, Sidamo, and Kaffa",
      "Premium Grade-1 Arabica Specialty Coffees",
      "Certified Sourcing & Quality Graded Processing",
      "Global Shipping and Airfreight Logistics Partnerships",
      "Ensuring Fair Compensation for Ethiopian Coffee Farmers"
    ]
  },
  {
    id: "fleet-logistics",
    title: "Fleet & Logistics",
    description: "Operating a fleet of more than 200 trucks, the logistics division provides reliable transportation, import and export logistics, supply chain solutions, and nationwide distribution services, especially along the vital Addis-Djibouti economic corridor.",
    iconName: "Truck",
    image: "/images/fleet_logistics_branded_truck.png",
    details: [
      "A Modern Fleet of 200+ Heavy-Duty Freight Trucks",
      "End-to-End Export Logistics & Customs Clearance",
      "Cross-Border Transit and Nationwide Supply Chains",
      "Real-time GPS Monitoring & Cargo Security Protocols",
      "Punctual and Highly Reliable Distribution Networks"
    ]
  },
  {
    id: "agro-products-export",
    title: "Agro Products Export",
    description: "Exporting Ethiopian sesame seeds, pulses, and other agricultural products to customers across Europe, Asia, and the Middle East while maintaining the highest international quality standards.",
    iconName: "Leaf",
    image: "https://images.unsplash.com/photo-1574321020309-1f48651c6c0e?auto=format&fit=crop&q=80&w=600&h=450",
    details: [
      "Premium White Humera Sesame Seeds Sourcing",
      "A Wide Range of High-Grade Pulses, Lentils, and Oilseeds",
      "Modern Storage, Cleaning, & Packaging Facilities",
      "Exports to Key European, Middle Eastern, and Asian Markets",
      "Rigorous Organic Certification & Phytosanitary Control"
    ]
  }
];

const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    year: "1967",
    title: "Company Founded",
    description: "Nefas Silk Paints was established, a pioneer in local paint production to substitute imports."
  },
  {
    year: "1985",
    title: "Expansion of Paint Manufacturing",
    description: "Implemented state-of-the-art chemical production facilities and expanded color ranges."
  },
  {
    year: "2002",
    title: "Coffee Export Division",
    description: "Ventured into exporting Ethiopia's finest Arabica coffee to international roasters."
  },
  {
    year: "2010",
    title: "Fleet & Logistics Development",
    description: "Acquired a robust cargo fleet of over 200 trucks to streamline distribution and transit."
  },
  {
    year: "2018",
    title: "Agro Products Export",
    description: "Began exporting high-demand sesame, pulses, and oilseeds to global trade hubs."
  },
  {
    year: "2024",
    title: "Modern Chemical Investment",
    description: "Major modernization of paint formulas to low-emission, premium protective grades."
  },
  {
    year: "2026",
    title: "Future Growth",
    description: "Advancing digital supply chains, expanding export networks, and local farming support."
  }
];

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Nefas Silk Paints' protective coatings have been instrumental in our infrastructure projects. The long-term weather resistance on our highway structures is exceptional, proving world-class standard.",
    author: "Eng. Samuel Kebede",
    role: "Director of Infrastructure Development",
    company: "Ethiopian Construction Corporation",
    logoText: "ECC"
  },
  {
    id: "t2",
    quote: "Sourcing specialty coffee from Nefas Silk has elevated our craft offerings. Their direct trade relationships with smallholder farmers ensure the highest cup score and consistent ethical standards.",
    author: "Hiroshi Tanaka",
    role: "Chief Green Buyer",
    company: "Origin Coffee Imports Tokyo",
    logoText: "ORIGIN TOKYO"
  },
  {
    id: "t3",
    quote: "As an international buyer, we demand sesame seeds of the highest purity. Nefas Silk's processing facilities deliver flawless grading, allowing us to supply premium clients with complete confidence.",
    author: "Amelie Dupond",
    role: "Supply Chain Manager",
    company: "EuroAgri Trade Group",
    logoText: "EURO AGRI"
  },
  {
    id: "t4",
    quote: "Their logistics fleet of 200+ trucks saved our export schedule during port bottlenecks. Complete tracking, clear communications, and zero damage deliveries make them our preferred partner.",
    author: "Alastair Vance",
    role: "Global Logistics Director",
    company: "Apex Global Shippers PLC",
    logoText: "APEX SHIP"
  }
];

const DEFAULT_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Nefas Silk Paints Launches Next-Generation Eco-Friendly Acrylic Coatings",
    category: "Innovation",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400&h=300",
    summary: "Formulated using low-VOC chemical technology, the new architectural range provides superior scrub resistance while being completely safe for indoor air quality."
  },
  {
    id: "news-2",
    title: "Expanding Ethiopia’s Coffee Legacy: New Direct Trade Sourcing Agreements in Kaffa Zone",
    category: "Agro-Export",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=400&h=300",
    summary: "By collaborating directly with over 450 coffee farming families, Nefas Silk guarantees premium prices and promotes eco-sustainable washing and drying practices."
  },
  {
    id: "news-3",
    title: "Logistics Upgrades: Fleet Expansion with Advanced GPS Telematics and Driver Safety Training",
    category: "Logistics",
    date: "May 15, 2026",
    image: "/images/fleet_logistics_branded_truck.png",
    summary: "The installation of real-time fuel efficiency trackers and satellite GPS on our 200+ trucks ensures complete transparency and minimizes transit time to Djibouti port."
  }
];

const DEFAULT_CAREERS: CareerOpening[] = [
  {
    id: "job-1",
    title: "Senior Industrial R&D Chemist",
    department: "Paint Manufacturing Division",
    location: "Addis Ababa, Nefas Silk HQ",
    type: "Full-Time",
    experience: "5+ Years"
  },
  {
    id: "job-2",
    title: "International Coffee Export Manager",
    department: "Coffee Division",
    location: "Addis Ababa",
    type: "Full-Time",
    experience: "4+ Years"
  },
  {
    id: "job-3",
    title: "Logistics Operations & Fleet Dispatch Coordinator",
    department: "Logistics & Transport Division",
    location: "Kaliti Depot",
    type: "Full-Time",
    experience: "3+ Years"
  },
  {
    id: "job-4",
    title: "Quality Assurance Specialist (Agro Products)",
    department: "Agro Products Division",
    location: "Nazareth/Adama Sourcing Center",
    type: "Contract",
    experience: "2+ Years"
  }
];

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "mica-paint",
    name: "Nefas Silk Mica",
    category: "Decorative Paints",
    description: "A decorative wall paint finish, prepared for interior use. Apply on a clean, properly prepared wall for best results.",
    applications: ["Interior Walls"],
    colors: [
      { name: "Mica Pearl", hex: "#D9D2C5" }
    ],
    coverage: "22-24 m² per Liter per coat (15-18 m²/Liter covering capacity)",
    dryingTime: "30 min, may be recoated after 3-4 hours",
    finish: "Mica Pearl Finish",
    image: "/images/products/mica.png"
  },
  {
    id: "super-emulsion",
    name: "Nefas Silk Super",
    category: "Decorative Paints",
    description: "A washable plastic emulsion paint suitable for both interior and exterior walls. Should not be mixed with other paints.",
    applications: ["Interior Walls", "Exterior Walls"],
    colors: [
      { name: "Silk White", hex: "#FAFAF7" }
    ],
    coverage: "12-14 m² per Liter per coat (8-10 m²/Liter covering capacity)",
    dryingTime: "30 min, may be recoated after 3-4 hours",
    finish: "Washable Emulsion",
    image: "/images/products/super.png"
  },
  {
    id: "wubet-emulsion",
    name: "Nefas Silk Wubet",
    category: "Decorative Paints",
    description: "A plastic emulsion paint suitable for interior walls, formulated for a smooth, clean finish.",
    applications: ["Interior Walls"],
    colors: [
      { name: "Silk White", hex: "#FAFAF7" }
    ],
    coverage: "10-12 m² per Liter per coat (6-8 m²/Liter covering capacity)",
    dryingTime: "30 min, may be recoated after 3-4 hours",
    finish: "Interior Emulsion",
    image: "/images/products/wubet.png"
  },
  {
    id: "simba-emulsion",
    name: "Nefas Silk Simba",
    category: "Decorative Paints",
    description: "A washable plastic emulsion paint suitable for both interior and exterior walls. Should not be mixed with other paints.",
    applications: ["Interior Walls", "Exterior Walls"],
    colors: [
      { name: "Silk White", hex: "#FAFAF7" }
    ],
    coverage: "10-12 m² per Liter per coat (6-8 m²/Liter covering capacity)",
    dryingTime: "30 min, may be recoated after 3-4 hours",
    finish: "Washable Emulsion",
    image: "/images/products/simba.png"
  },
  {
    id: "contextra-paint",
    name: "Contextra Paint",
    category: "Decorative Paints",
    description: "An acrylic-based paint for interior and exterior walls with high resistance to climate changes, excellent adhesive property, and washability with water and any common detergent.",
    applications: ["Interior Walls", "Exterior Walls"],
    colors: [
      { name: "Neutral Base", hex: "#B7C4CB" }
    ],
    coverage: "12-15 m² per 20 kg",
    dryingTime: "Touch-free in 3-4 hours; allow 12-24 hours before applying exterior/weather-guard paint",
    finish: "Acrylic Textured",
    image: "/images/products/contextra-paint.png"
  },
  {
    id: "medium-texture-paint",
    name: "Medium Texture Wall Paint",
    category: "Decorative Paints",
    description: "An acrylic-based texture paint for interior and exterior walls with high resistance to climate changes, excellent adhesive property, and washability with water and any common detergent.",
    applications: ["Interior Walls", "Exterior Walls"],
    colors: [
      { name: "Neutral Base", hex: "#C99A5B" }
    ],
    coverage: "Contact us for coverage specification",
    dryingTime: "Touch-free in 3-4 hours; allow 12-24 hours before recoat",
    finish: "Medium Texture",
    image: "/images/products/brochure-contextra-medium-texture.png"
  },
  {
    id: "quartz-paint",
    name: "Quartz Paint (Textured Emulsion)",
    category: "Decorative Paints",
    description: "Made with a special resin for wall painting, offering high resistance to climate changes and wear. Can be washed with water and any common detergent. For interior and exterior use.",
    applications: ["Interior Walls", "Exterior Walls"],
    colors: [
      { name: "Silk White", hex: "#FAFAF7" }
    ],
    coverage: "Contact us for coverage specification",
    dryingTime: "Standard emulsion drying time",
    finish: "Textured Emulsion",
    image: "/images/products/quartz-paint.png"
  },
  {
    id: "tile-adhesive",
    name: "Tile Adhesive",
    category: "Construction Materials",
    description: "Used for laying ceramic tiles on door walls and floors. High quality adhesive strength on cement-based finished walls and concrete, with very good workability.",
    applications: ["Ceramic Tiles", "Door Walls", "Floors"],
    colors: [],
    coverage: "Contact us for coverage specification",
    dryingTime: "Standard cure time",
    finish: "Cement-Based Adhesive",
    image: "/images/products/tile-adhesive-wall-putty.png"
  },
  {
    id: "powder-grey-wall-putty",
    name: "Powder Grey Wall Putty",
    category: "Construction Materials",
    description: "A polymer-based grey cement putty with high quality adhesive strength on cement-based finished walls, with very good flexibility. Ideal for any interior and exterior surface.",
    applications: ["Interior Walls", "Exterior Walls"],
    colors: [
      { name: "Grey", hex: "#9B9691" }
    ],
    coverage: "Contact us for coverage specification",
    dryingTime: "Standard cure time",
    finish: "Cement-Based Putty",
    image: "/images/products/tile-adhesive-wall-putty.png"
  },
  {
    id: "powder-white-wall-putty",
    name: "Powder White Wall Putty",
    category: "Construction Materials",
    description: "A polymer-based white cement putty with high quality adhesive strength on cement-based finished walls, suitable for interior and exterior surfaces.",
    applications: ["Interior Walls", "Exterior Walls"],
    colors: [
      { name: "White", hex: "#F4F3EF" }
    ],
    coverage: "Contact us for coverage specification",
    dryingTime: "Standard cure time",
    finish: "Cement-Based Putty",
    image: "/images/products/tile-adhesive-wall-putty.png"
  },
  {
    id: "epoxy-paint-3component",
    name: "Three Component Epoxy Paint",
    category: "Protective Coatings",
    description: "Used for floor painting in factories, gymnasiums, car parking and garages. Not for exterior use. Mix paint, hardener and silica sand in a 4:2:4 ratio.",
    applications: ["Factory Floors", "Gymnasiums", "Car Parking", "Garages"],
    colors: [
      { name: "Industrial Blue", hex: "#1D3557" }
    ],
    coverage: "5-6 m² per Gallon",
    dryingTime: "24 Hours",
    finish: "High-Gloss Epoxy",
    image: "/images/products/epoxy-paint-3component.png"
  },
  {
    id: "epoxy-primer-2component",
    name: "Two Component Epoxy Primer",
    category: "Protective Coatings",
    description: "Seals the substrate completely and avoids air bubbles in the body coat. Mix with hardener in a 3:1 ratio and apply by brush, spike roller or trowel.",
    applications: ["Factory Floors", "Industrial Substrates"],
    colors: [
      { name: "Primer Green", hex: "#3F7D4F" }
    ],
    coverage: "20-25 m² per Gallon",
    dryingTime: "24 Hours",
    finish: "Epoxy Primer",
    image: "/images/products/epoxy-primer-2component.png"
  },
  {
    id: "traffic-paint-2component",
    name: "Two Component Traffic Paint",
    category: "Industrial Paints",
    description: "A road marking paint based on Hydroxyl Acrylic Resin. Fast drying, with good adhesion and excellent resistance to weather. Mix the traffic paint with hardener and leave for 15 minutes before applying.",
    applications: ["Road Lines", "Car Parks"],
    colors: [
      { name: "Traffic Yellow", hex: "#F6C800" },
      { name: "Traffic White", hex: "#FFFFFF" }
    ],
    coverage: "Contact us for coverage specification",
    dryingTime: "Fast Drying",
    finish: "Reflective Matt",
    image: "/images/products/traffic-paint-2component.png"
  },
  {
    id: "traffic-paint-1component",
    name: "One Component Traffic Paint",
    category: "Industrial Paints",
    description: "A road marking paint especially designed for marking traffic lines on roads and car parks. Fast drying with low bleeding characteristics and excellent wear resistance and weather-proof finish.",
    applications: ["Road Lines", "Car Parks"],
    colors: [
      { name: "Traffic Yellow", hex: "#F6C800" },
      { name: "Traffic White", hex: "#FFFFFF" }
    ],
    coverage: "Contact us for coverage specification",
    dryingTime: "Fast Drying",
    finish: "Weather-Proof Matt",
    image: "/images/products/traffic-paint-1component.png"
  },
  {
    id: "nitro-automotive-paint",
    name: "Nitro Automotive Paint",
    category: "Automotive Paints",
    description: "A high gloss paint based on Nitrocellulose Resin. A fast-drying topcoat with good coverage, applied by spray equipment.",
    applications: ["Automobile Bodies"],
    colors: [
      { name: "Custom Automotive Colors", hex: "#C0392B" }
    ],
    coverage: "Contact us for coverage specification",
    dryingTime: "Touch-free 15-20 min; thorough dry 2-3 hours",
    finish: "High Gloss",
    image: "/images/products/nitro-automotive-paint.png"
  },
  {
    id: "polyester-auto-putty",
    name: "Polyester Auto Putty",
    category: "Automotive Paints",
    description: "Used for repairing dents and surface irregularities on automobile bodies, metal and wood surfaces. Mix with 2.5-3% BPO hardener before use.",
    applications: ["Automobile Bodies", "Metal Surfaces", "Wood Surfaces"],
    colors: [
      { name: "Putty Grey", hex: "#9B9691" }
    ],
    coverage: "Contact us for coverage specification",
    dryingTime: "Ready to sand in 35-40 minutes",
    finish: "Auto Body Filler",
    image: "/images/products/polyester-auto-putty.png"
  },
  {
    id: "vinavil-glue",
    name: "Vinavil Glue (Polyvinyl Acetate Glue)",
    category: "Adhesives",
    description: "Vinavil Glue (Polyvinyl Acetate Glue) is a Nefas Silk product especially prepared for binding wood, paper, cartons and similar articles. It gives high bond strength and speed of setting; joints formed with Vinavil Glue are stable to the humidity conditions of the atmosphere. Surface Preparation: the surface to be bonded should be clean and free from any dust and grease. Application: it can be applied with brushes, trowels, glue rollers and glue guns. During binding, use load or clamps until complete setting is obtained.",
    applications: ["Wood", "Paper", "Cartons"],
    colors: [],
    coverage: "Content: 1 Kg",
    dryingTime: "High bond strength with fast speed of setting",
    finish: "N/A",
    image: "/images/products/vinavil-glue.png"
  }
];

const DEFAULT_SHOPS: Shop[] = [
  {
    id: "hq-showroom",
    name: "Nefas Silk HQ Showroom",
    city: "Addis Ababa",
    address: "Nefas Silk Lafto, Gofa Road, near HQ Complex",
    phone: "+251 11 442 7701",
    hours: "Mon - Sat: 8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400&h=300",
    lat: 9.0012,
    lng: 38.7521
  },
  {
    id: "merkato-branch",
    name: "Merkato Paints Trading Center",
    city: "Addis Ababa",
    address: "Merkato, Somale Tera District, Addis Ababa",
    phone: "+251 11 275 8890",
    hours: "Mon - Sat: 8:00 AM - 5:30 PM",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=300",
    lat: 9.0275,
    lng: 38.7364
  },
  {
    id: "megenagna-outlet",
    name: "Megenagna Decorative Hub",
    city: "Addis Ababa",
    address: "Megenagna Plaza, Ground Floor, Addis Ababa",
    phone: "+251 11 663 1102",
    hours: "Mon - Sat: 8:30 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=300",
    lat: 9.0203,
    lng: 38.8015
  },
  {
    id: "adama-retail",
    name: "Adama Industrial Coatings Shop",
    city: "Adama",
    address: "Main Highway Road, near Adama Stadium",
    phone: "+251 22 111 4545",
    hours: "Mon - Sat: 8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=300",
    lat: 8.5414,
    lng: 39.2689
  },
  {
    id: "hawassa-showroom",
    name: "Hawassa Lakeside Showroom",
    city: "Hawassa",
    address: "Hawassa Main Avenue, near Millennium Monument",
    phone: "+251 46 220 9912",
    hours: "Mon - Sat: 8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=400&h=300",
    lat: 7.0620,
    lng: 38.4764
  },
  {
    id: "bahir-dar-branch",
    name: "Bahir Dar Paint Emporium",
    city: "Bahir Dar",
    address: "Bahr Dar Highway, near Lake Tana Gate",
    phone: "+251 58 226 4433",
    hours: "Mon - Sat: 8:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=300",
    lat: 11.5936,
    lng: 37.3908
  },
  {
    id: "dire-dawa-outlet",
    name: "Dire Dawa Logistics & Retail",
    city: "Dire Dawa",
    address: "Taiwan Market Road, Dire Dawa Center",
    phone: "+251 25 111 8899",
    hours: "Mon - Sat: 8:00 AM - 5:30 PM",
    image: "https://images.unsplash.com/photo-1513829096999-4978602297a7?auto=format&fit=crop&q=80&w=400&h=300",
    lat: 9.6009,
    lng: 41.8501
  }
];

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm1",
    name: "Tedla Yizengaw",
    position: "Managing Director",
    biography: "With decades of experience in large-scale industrial manufacturing, logistics, and coffee exporting, Tedla Yizengaw has driven Nefas Silk's transformation into a highly diversified modern corporate group. Under his forward-looking stewardship, the company's employee footprint has grown to over 1,000, and logistics fleet expanded to more than 200 trucks.",
    image: "/images/team/tedla-yizengaw.png",
    linkedin: "https://linkedin.com",
    email: "tedla@nefassilkpaints.com"
  },
  {
    id: "tm6",
    name: "Gashaw Debebe",
    position: "Board Member",
    biography: "A prominent industrial advisory voice, Gashaw guides the board on long-term corporate governance, chemical manufacturing policies, and macro-economic investment directions.",
    image: "/images/team/gashaw-debebe.png",
    linkedin: "https://linkedin.com",
    email: "gashaw@nefassilkpaints.com"
  },
  {
    id: "tm7",
    name: "Abiy Assefa",
    position: "Board Member",
    biography: "Abiy Assefa advises on international trade, coffee exporting frameworks, and strategic logistics operations linking landlocked Ethiopia to global maritime transport hubs.",
    image: "/images/team/abiy-assefa.png",
    linkedin: "https://linkedin.com",
    email: "abiy.a@nefassilkpaints.com"
  },
  {
    id: "tm2",
    name: "Bimrew Kumlachew",
    position: "General Manager",
    biography: "Bimrew leads the daily operational departments and strategic expansion projects. He has engineered complex international distribution channels and guarantees complete alignment with global ISO certifications.",
    image: "/images/team/bimrew-kumlachew.png",
    linkedin: "https://linkedin.com",
    email: "bimrew@nefassilkpaints.com"
  },
  {
    id: "tm3",
    name: "Alemayehu Yirsaw",
    position: "Deputy General Manager",
    biography: "Alemayehu oversees our raw material procurement pipelines and corporate affiliations. He works directly with key global suppliers to ensure state-of-the-art chemical grades and advanced organic testing.",
    image: "/images/team/alemayehu-yirsaw.png",
    linkedin: "https://linkedin.com",
    email: "alemayehu@nefassilkpaints.com"
  },
  {
    id: "tm4",
    name: "Mekeberiya Siraw",
    position: "Deputy Operations GM",
    biography: "Managing on-site operations across our multiple paint factories and logistics dispatch depots, Mekeberiya keeps our heavy fleet of 200+ trucks running punctually along the Addis-Djibouti 경제 corridor.",
    image: "/images/team/mekeberiya-siraw.png",
    linkedin: "https://linkedin.com",
    email: "mekeberiya@nefassilkpaints.com"
  },
  {
    id: "tm5",
    name: "Abiy Mesfin",
    position: "Chief Financial Officer",
    biography: "Abiy directs all financial strategies, international trade financing, and multi-sector investment budgets. He secures absolute auditing compliance and corporate fiscal transparency.",
    image: "/images/team/abiy-mesfin.png",
    linkedin: "https://linkedin.com",
    email: "abiy.m@nefassilkpaints.com"
  }
];

const DEFAULT_GROUP_COMPANIES: GroupCompany[] = [
  {
    id: "gc1",
    name: "Beetar Industries",
    description: "Industrial manufacturing complex specializing in high-grade plastics, chemical packaging materials, and auxiliary industrial products.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=500&h=350"
  },
  {
    id: "gc2",
    name: "Dami ET Shoe Soles",
    description: "State-of-the-art manufacturing plant producing Italian-inspired design polyurethane and rubber shoe soles for major footwear manufacturers.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=500&h=350"
  },
  {
    id: "gc3",
    name: "Anbessa Shoe & Tannery",
    description: "One of Africa's oldest and most respected shoe manufacturers and tanneries, established in Addis Ababa. Producing premium leather goods for global markets.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=500&h=350"
  }
];

const DEFAULT_CEO_MESSAGE = {
  name: "Tedla Yizengaw",
  role: "Managing Director",
  image: "/images/team/tedla-yizengaw.png",
  message: "Under our strategic management and current ownership, Nefas Silk Paints Factory has undergone a massive industrial transformation. What started as Ethiopia's pioneer local paint manufacturing facility has expanded into a multi-sector industrial powerhouse. Today, we are proud to stand as a key economic pillar of the country, generating massive employment, exporting premium organic coffee and agricultural products worldwide, and securing economic trade corridors with our heavy transport fleet. Our commitment remains firm: delivering international-grade innovation with nearly six decades of deep-rooted Ethiopian heritage."
};

const DEFAULT_VISION = {
  visionText: "To establish our corporate group as East Africa’s most valuable industrial company, Africa’s leading chemical and paint manufacturer, a preeminent coffee and agro exporter, and East Africa’s leading logistics service partner.",
  mission1: "Superior Paint Products",
  mission1Desc: "Provide high-performance, eco-friendly decorative, industrial, and protective coatings exceeding standard expectations.",
  mission2: "Coffee Export Excellence",
  mission2Desc: "Promote Ethiopia's finest Arabica coffee through fair-trade sourcing directly from smallholder farmers, boosting local incomes.",
  mission3: "Reliable Logistics",
  mission3Desc: "Maintain an agile, heavy-duty logistics fleet that secures uninterrupted global trade pathways with high accountability."
};

const DEFAULT_CONTACT_INFO: ContactInfo = {
  phone: "+251 11 442 7701",
  email: "info@nefassilkpaints.com",
  address: "Nefas Silk Lafto, Gofa Road, Addis Ababa, Ethiopia",
  hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  whatsapp: "+251911442770",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com/company/nefas-silk-paints",
  telegram: "https://t.me/nefassilkpaints"
};

const DEFAULT_SEO_SETTINGS: SeoSettings = {
  title: "Nefas Silk Paints Factory PLC • Diversified Industrial Group",
  description: "Established in 1967, Nefas Silk is Ethiopia's premier paint manufacturer, coffee exporter, agro products supplier, and logistics corridor leader.",
  keywords: "Nefas Silk, Paints Ethiopia, Coffee Export Ethiopia, Adama Paint, Ethiopia Djibouti Logistics, Humera Sesame"
};

export function WebsiteProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<"EN" | "AM">("EN");
  const [heroSlides, setHeroSlidesState] = useState<HeroSlide[]>(DEFAULT_HERO_SLIDES);
  const [businesses, setBusinessesState] = useState<Business[]>(DEFAULT_BUSINESSES);
  const [timeline, setTimelineState] = useState<TimelineItem[]>(DEFAULT_TIMELINE);
  const [testimonials, setTestimonialsState] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);
  const [news, setNewsState] = useState<NewsItem[]>(DEFAULT_NEWS);
  const [careers, setCareersState] = useState<CareerOpening[]>(DEFAULT_CAREERS);
  const [products, setProductsState] = useState<Product[]>(DEFAULT_PRODUCTS);
  const [shops, setShopsState] = useState<Shop[]>(DEFAULT_SHOPS);
  const [teamMembers, setTeamMembersState] = useState<TeamMember[]>(DEFAULT_TEAM_MEMBERS);
  const [groupCompanies, setGroupCompaniesState] = useState<GroupCompany[]>(DEFAULT_GROUP_COMPANIES);
  const [ceoMessage, setCeoMessageState] = useState(DEFAULT_CEO_MESSAGE);
  const [vision, setVisionState] = useState(DEFAULT_VISION);
  const [contactInfo, setContactInfoState] = useState<ContactInfo>(DEFAULT_CONTACT_INFO);
  const [seoSettings, setSeoSettingsState] = useState<SeoSettings>(DEFAULT_SEO_SETTINGS);

  // Load language and content from LocalStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("ns_lang");
    if (storedLang === "EN" || storedLang === "AM") {
      setLanguageState(storedLang);
    }

    const loadLocal = (key: string, setter: (val: any) => void) => {
      const data = localStorage.getItem(`ns_cms_${key}`);
      if (data) {
        try {
          setter(JSON.parse(data));
        } catch (e) {
          console.error("Error parsing localStorage for", key, e);
        }
      }
    };

    loadLocal("hero", setHeroSlidesState);
    loadLocal("businesses", setBusinessesState);
    loadLocal("timeline", setTimelineState);
    loadLocal("testimonials", setTestimonialsState);
    loadLocal("news", setNewsState);
    loadLocal("careers", setCareersState);
    loadLocal("products", setProductsState);
    loadLocal("shops", setShopsState);
    loadLocal("team", setTeamMembersState);
    loadLocal("group", setGroupCompaniesState);
    loadLocal("ceo", setCeoMessageState);
    loadLocal("vision", setVisionState);
    loadLocal("contact", setContactInfoState);
    loadLocal("seo", setSeoSettingsState);
  }, []);

  const setLanguage = (lang: "EN" | "AM") => {
    setLanguageState(lang);
    localStorage.setItem("ns_lang", lang);
  };

  const saveToLocal = (key: string, val: any) => {
    localStorage.setItem(`ns_cms_${key}`, JSON.stringify(val));
  };

  const setHeroSlides = (val: HeroSlide[]) => {
    setHeroSlidesState(val);
    saveToLocal("hero", val);
  };

  const setBusinesses = (val: Business[]) => {
    setBusinessesState(val);
    saveToLocal("businesses", val);
  };

  const setTimeline = (val: TimelineItem[]) => {
    setTimelineState(val);
    saveToLocal("timeline", val);
  };

  const setTestimonials = (val: Testimonial[]) => {
    setTestimonialsState(val);
    saveToLocal("testimonials", val);
  };

  const setNews = (val: NewsItem[]) => {
    setNewsState(val);
    saveToLocal("news", val);
  };

  const setCareers = (val: CareerOpening[]) => {
    setCareersState(val);
    saveToLocal("careers", val);
  };

  const setProducts = (val: Product[]) => {
    setProductsState(val);
    saveToLocal("products", val);
  };

  const setShops = (val: Shop[]) => {
    setShopsState(val);
    saveToLocal("shops", val);
  };

  const setTeamMembers = (val: TeamMember[]) => {
    setTeamMembersState(val);
    saveToLocal("team", val);
  };

  const setGroupCompanies = (val: GroupCompany[]) => {
    setGroupCompaniesState(val);
    saveToLocal("group", val);
  };

  const setCeoMessage = (val: typeof DEFAULT_CEO_MESSAGE) => {
    setCeoMessageState(val);
    saveToLocal("ceo", val);
  };

  const setVision = (val: typeof DEFAULT_VISION) => {
    setVisionState(val);
    saveToLocal("vision", val);
  };

  const setContactInfo = (val: ContactInfo) => {
    setContactInfoState(val);
    saveToLocal("contact", val);
  };

  const setSeoSettings = (val: SeoSettings) => {
    setSeoSettingsState(val);
    saveToLocal("seo", val);
  };

  const resetToDefault = () => {
    if (confirm("Are you sure you want to restore all website content to defaults? This will erase all dashboard changes.")) {
      localStorage.clear();
      setLanguageState("EN");
      setHeroSlidesState(DEFAULT_HERO_SLIDES);
      setBusinessesState(DEFAULT_BUSINESSES);
      setTimelineState(DEFAULT_TIMELINE);
      setTestimonialsState(DEFAULT_TESTIMONIALS);
      setNewsState(DEFAULT_NEWS);
      setCareersState(DEFAULT_CAREERS);
      setProductsState(DEFAULT_PRODUCTS);
      setShopsState(DEFAULT_SHOPS);
      setTeamMembersState(DEFAULT_TEAM_MEMBERS);
      setGroupCompaniesState(DEFAULT_GROUP_COMPANIES);
      setCeoMessageState(DEFAULT_CEO_MESSAGE);
      setVisionState(DEFAULT_VISION);
      setContactInfoState(DEFAULT_CONTACT_INFO);
      setSeoSettingsState(DEFAULT_SEO_SETTINGS);
      window.location.reload();
    }
  };

  // Safe translation picker
  const t = (key: keyof TranslationSet): string => {
    const langSet = translations[language];
    return langSet[key] || translations["EN"][key] || String(key);
  };

  return (
    <WebsiteContext.Provider
      value={{
        language,
        setLanguage,
        t,
        heroSlides,
        setHeroSlides,
        businesses,
        setBusinesses,
        timeline,
        setTimeline,
        testimonials,
        setTestimonials,
        news,
        setNews,
        careers,
        setCareers,
        products,
        setProducts,
        shops,
        setShops,
        teamMembers,
        setTeamMembers,
        groupCompanies,
        setGroupCompanies,
        ceoMessage,
        setCeoMessage,
        vision,
        setVision,
        contactInfo,
        setContactInfo,
        seoSettings,
        setSeoSettings,
        resetToDefault
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
}

export function useWebsite() {
  const context = useContext(WebsiteContext);
  if (context === undefined) {
    throw new Error("useWebsite must be used within a WebsiteProvider");
  }
  return context;
}
