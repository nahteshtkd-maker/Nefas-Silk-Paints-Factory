import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ArrowRight, ShieldCheck, X, Cog, Layers } from "lucide-react";

interface GroupCompany {
 id: string;
 name: string;
 subtitle: string;
 description: string;
 history: string;
 details: string[];
 image: string;
 established: string;
 iconName: "shoe" | "sole" | "factory";
}

const COMPANIES: GroupCompany[] = [
 {
 id: "anbessa-shoe",
 name: "Anbessa Shoe & Tannery",
 subtitle: "Africa's Oldest Leather Shoe Manufacturer",
 description: "Operating since colonial times, Anbessa Shoe is Africa's oldest and most prestigious footwear and leather tannery company, crafting premium leather shoes and export-grade finished leather.",
 history: "Founded in the mid-20th century, Anbessa has survived historical shifts to become a leading symbol of Ethiopian industrial craftsmanship. It combines traditional leather tooling with modern Italian production standards, exporting high-fashion shoes to Europe and North America.",
 details: [
 "Export-Grade Calf and Goat Leather Tannery",
 "Over 10,000 Pairs of Shoes Daily Capacity",
 "Specialized Safety Footwear & Military Combat Boots",
 "Ecological Water-Treatment Tannery Recyclers",
 "Highly Skilled Artisanal Footwear Craftsmen"
 ],
 image: "data:image/jpeg;base64,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",
 established: "1935",
 iconName: "shoe"
 },
 {
 id: "dami-et",
 name: "Dami ET Shoe Soles",
 subtitle: "Italian-Inspired Technical Shoe Soles",
 description: "A highly specialized joint venture facility manufacturing high-performance polyurethane, rubber, and thermoplastic shoe soles using Italian design concepts and automated machinery.",
 history: "To support Africa's growing leather value chain, Dami ET was launched in Addis Ababa. By using state-of-the-art Italian molding presses, the factory supplies the continent's top footwear brands with exceptionally durable, shock-absorbing, and trendy shoe soles.",
 details: [
 "Polyurethane (PU) and Thermoplastic Rubber (TR) Soles",
 "Custom Mold & Prototype CAD Designing",
 "High-Volume Supply to Footwear Factories across East Africa",
 "Super-Lightweight Athletic Shoe Outsoles",
 "Strict Durability & Anti-Slip Quality Lab Checks"
 ],
 image: "data:image/jpeg;base64,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",
 established: "2015",
 iconName: "sole"
 },
 {
 id: "beetar-industries",
 name: "Beetar Industries",
 subtitle: "Multi-Sector Heavy Industrial Complex",
 description: "An expansive industrial manufacturing cluster producing essential household items, packaging materials, and heavy metal components to support Ethiopia's domestic consumer market.",
 history: "Beetar Industries acts as the diversified consumer manufacturing arm of our industrial conglomerate. The massive complex hosts multiple state-of-the-art manufacturing plants producing high-grade packaging, metals, and household consumer goods with automated high-speed machinery.",
 details: [
 "High-Density Polyethylene & Corrugated Box Packaging",
 "Metal Wire Drawing & Structural Fastener Manufacture",
 "Household Chemical & Detergent Formulations",
 "Fully Integrated In-House Raw Material Supply Chains",
 "Advanced Robotic Injection and Molding Systems"
 ],
 image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600&h=450",
 established: "2011",
 iconName: "factory"
 }
];

export default function GroupCompanies() {
 const [selectedCompany, setSelectedCompany] = useState<GroupCompany | null>(null);

 return (
 <section id="group-companies" className="py-24 bg-brand-bg transition-colors duration-300">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Conglomerate Synergy
 </span>
 <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-green mt-3">
 Our Group Companies
 </h2>
 <p className="text-base sm:text-lg text-gray-500 font-sans mt-4">
 Under centralized strategic management, Nefas Silk operates key sister companies leading African leathercraft, design manufacturing, and heavy consumer industries.
 </p>
 </div>

 {/* Cards Grid */}
 <div className="grid md:grid-cols-3 gap-8">
 {COMPANIES.map((company, index) => (
 <motion.div
 key={company.id}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-all"
 >
 <div>
 {/* Photo container */}
 <div className="relative h-56 w-full overflow-hidden">
 <img
 src={company.image}
 alt={company.name}
 referrerPolicy="no-referrer"
 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
 
 {/* Floating Date Badge */}
 <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest font-extrabold text-white bg-brand-darkgreen/95 px-2.5 py-1.5 rounded-[4px]">
 EST. {company.established}
 </span>

 {/* Title over image */}
 <div className="absolute bottom-4 left-4 text-white">
 <h3 className="font-display font-extrabold text-lg leading-tight group-hover:text-brand-darkgreen transition-colors">
 {company.name}
 </h3>
 </div>
 </div>

 {/* Body details */}
 <div className="p-6 space-y-4">
 <span className="text-[10px] uppercase tracking-wider font-mono text-brand-darkgreen font-black block">
 {company.subtitle}
 </span>
 <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans line-clamp-3">
 {company.description}
 </p>
 </div>
 </div>

 {/* Bottom Action bar */}
 <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex justify-end">
 <button
 onClick={() => setSelectedCompany(company)}
 className="inline-flex items-center space-x-1.5 text-xs font-black text-brand-darkgreen uppercase tracking-wider hover:underline"
 >
 <span>Learn More</span>
 <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
 </button>
 </div>
 </motion.div>
 ))}
 </div>

 </div>

 {/* Learn More Interactive Modal */}
 <AnimatePresence>
 {selectedCompany && (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
 {/* Backdrop */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onClick={() => setSelectedCompany(null)}
 className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-md"
 />

 {/* Modal Body */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95, y: 20 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: 20 }}
 className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 z-10"
 >
 <div className="relative h-60 sm:h-64 w-full">
 <img
 src={selectedCompany.image}
 alt={selectedCompany.name}
 referrerPolicy="no-referrer"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
 
 {/* Close modal */}
 <button
 onClick={() => setSelectedCompany(null)}
 className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black border border-white/20 transition-colors shadow-md"
 aria-label="Close"
 >
 <X className="w-5 h-5" />
 </button>

 <div className="absolute bottom-6 left-6 text-white space-y-1">
 <span className="text-[10px] uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Group Sister Company Portfolio
 </span>
 <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
 {selectedCompany.name}
 </h3>
 </div>
 </div>

 {/* Modal Scroller Content */}
 <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
 <div className="grid sm:grid-cols-2 gap-6">
 {/* Left Col: Overview & History */}
 <div className="space-y-4">
 <div className="space-y-1">
 <h4 className="text-[10px] uppercase tracking-wider font-mono text-brand-darkgreen font-bold">
 Corporate Mission
 </h4>
 <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans font-medium">
 {selectedCompany.subtitle}
 </p>
 </div>

 <div className="space-y-1 pt-1.5 border-t border-gray-100">
 <h4 className="text-[10px] uppercase tracking-wider font-mono text-brand-darkgreen font-bold">
 Industrial History
 </h4>
 <p className="text-xs text-gray-500 leading-relaxed font-sans">
 {selectedCompany.history}
 </p>
 </div>
 </div>

 {/* Right Col: Capabilities list */}
 <div className="space-y-4">
 <h4 className="text-[10px] uppercase tracking-wider font-mono text-brand-darkgreen font-bold flex items-center gap-1.5">
 <ShieldCheck className="w-4 h-4 text-brand-green" />
 Key Capabilities & Specifications
 </h4>
 <div className="space-y-2">
 {selectedCompany.details.map((detail, dIdx) => (
 <div
 key={dIdx}
 className="flex items-start gap-2 p-2.5 rounded-lg bg-brand-bg border border-gray-100 text-xs text-gray-700 font-medium"
 >
 <Cog className="w-4 h-4 text-brand-darkgreen shrink-0 mt-0.5 animate-spin-slow" />
 <span>{detail}</span>
 </div>
 ))}
 </div>
 </div>
 </div>

 <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-xs">
 <span className="text-gray-400 font-mono">
 Established: {selectedCompany.established} • Joint-Venture Standard
 </span>
 <a
 href="#contact"
 onClick={() => setSelectedCompany(null)}
 className="px-5 py-2.5 rounded bg-brand-green text-white font-bold tracking-wide uppercase hover:bg-brand-darkgreen text-xs shadow"
 >
 Discuss Trade
 </a>
 </div>
 </div>

 </motion.div>
 </div>
 )}
 </AnimatePresence>
 </section>
 );
}
