import { Business, TimelineItem, NewsItem, CareerOpening, Testimonial } from "./types";

export const BUSINESSES: Business[] = [
  {
    id: "paint-manufacturing",
    title: "Paint Manufacturing",
    description: "Nefas Silk Paints is one of Ethiopia's pioneers in paint manufacturing, producing high-quality decorative, industrial, and protective coatings trusted across the nation. Continuous investment in modern technology and chemical production ensures world-class standards and long-term innovation.",
    iconName: "PaintRoller",
    image: "/images/paint_manufacturing_1784449708221.jpg",
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
    image: "/images/coffee_export_1784449721008.jpg",
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
    description: "Operating a fleet of more than 200 trucks, the logistics division provides reliable transportation, import and export logistics, supply chain solutions, and nationwide distribution services.",
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
    image: "/images/agro_export_1784449746940.jpg",
    details: [
      "Premium White Humera Sesame Seeds Sourcing",
      "A Wide Range of High-Grade Pulses, Lentils, and Oilseeds",
      "Modern Storage, Cleaning, & Packaging Facilities",
      "Exports to Key European, Middle Eastern, and Asian Markets",
      "Rigorous Organic Certification & Phytosanitary Control"
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "1967",
    title: "Company Founded",
    description: "Nefas Silk Paints was established, pioneer in local paint production to substitute imports."
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

export const WHY_CHOOSE_US = [
  {
    title: "Nearly 60 Years of Excellence",
    description: "Since 1967, we have set the standard for quality, reliability, and leadership in the Ethiopian industrial landscape."
  },
  {
    title: "Diversified Industrial Group",
    description: "Our multi-sector portfolio creates high-impact synergies between manufacturing, logistics, and global trade."
  },
  {
    title: "Trusted Global Export Partner",
    description: "Connecting Ethiopia’s rich resources to premium markets in Europe, Asia, and North America with flawless standards."
  },
  {
    title: "Modern Manufacturing Facilities",
    description: "Equipped with automated, precision German and Italian production equipment for absolute paint consistency."
  },
  {
    title: "Nationwide Logistics Network",
    description: "A secure, proprietary fleet of 200+ heavy trucks guarantees seamless transit and timely container arrivals."
  },
  {
    title: "Commitment to Quality",
    description: "Certified chemical testing and organic agricultural grading verify excellence before any shipment leaves our facility."
  }
];

export const TESTIMONIALS: Testimonial[] = [
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

export const NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Nefas Silk Paints Launches Next-Generation Eco-Friendly Acrylic Coatings",
    category: "Innovation",
    date: "July 12, 2026",
    image: "https://picsum.photos/seed/paintnews/800/600",
    summary: "Formulated using low-VOC chemical technology, the new architectural range provides superior scrub resistance while being completely safe for indoor air quality."
  },
  {
    id: "news-2",
    title: "Expanding Ethiopia’s Coffee Legacy: New Direct Trade Sourcing Agreements in Kaffa Zone",
    category: "Agro-Export",
    date: "June 28, 2026",
    image: "https://picsum.photos/seed/coffeenews/800/600",
    summary: "By collaborating directly with over 450 coffee farming families, Nefas Silk guarantees premium prices and promotes eco-sustainable washing and drying practices."
  },
  {
    id: "news-3",
    title: "Logistics Upgrades: Fleet Expansion with Advanced GPS Telematics and Driver Safety Training",
    category: "Logistics",
    date: "May 15, 2026",
    image: "https://picsum.photos/seed/trucknews/800/600",
    summary: "The installation of real-time fuel efficiency trackers and satellite GPS on our 200+ trucks ensures complete transparency and minimizes transit time to Djibouti port."
  }
];

export const CAREER_BENEFITS = [
  {
    title: "Competitive Compensation & Allowances",
    description: "Industry-leading base salaries, health benefits, and transportation allowances for all team members."
  },
  {
    title: "Professional Training & Development",
    description: "Continuous development programs, technical certifications, and executive leadership pipelines."
  },
  {
    title: "Collaborative and Diverse Culture",
    description: "A supportive environment of mutual respect, celebrating cultural diversity and shared values."
  },
  {
    title: "Career Advancement Paths",
    description: "Over 80% of our managerial roles are filled through internal promotions and talent coaching."
  }
];

export const CAREER_OPENINGS: CareerOpening[] = [
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
