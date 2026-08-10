import { useState } from "react";
import { PaintRoller, Coffee, Truck, Leaf, ChevronRight, CheckCircle2, Shield, X, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESSES } from "../data";
import { Business } from "../types";

export default function Businesses() {
 const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

 const getIcon = (name: string) => {
 switch (name) {
 case "PaintRoller":
 return PaintRoller;
 case "Coffee":
 return Coffee;
 case "Truck":
 return Truck;
 case "Leaf":
 return Leaf;
 default:
 return HelpCircle;
 }
 };

 return (
 <section id="businesses" className="py-24 bg-brand-bg transition-colors duration-300">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Diversified Industrial Powerhouse
 </span>
 <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-green mt-3 leading-tight">
 Our Business Divisions
 </h2>
 <p className="text-base sm:text-lg text-gray-500 font-sans mt-4">
 Leveraging synergized multi-sector capabilities, we drive industrial excellence from raw agricultural farming to modern chemical engineering and global logistics.
 </p>
 </div>

 {/* Dynamic Card Grid */}
 <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
 {BUSINESSES.map((business, index) => {
 const Icon = getIcon(business.iconName);
 return (
 <motion.div
 key={business.id}
 id={`businesses-${business.id}`}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 className="group sleek-card flex flex-col justify-between overflow-hidden relative"
 >
 {/* Full Width Image Container */}
 <div className="relative h-64 md:h-72 w-full overflow-hidden">
 <img
 src={business.image}
 alt={business.title}
 referrerPolicy="no-referrer"
 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
 />
 {/* Subtle Color Accent overlay for visual mood */}
 <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent" />
 
 {/* Floating Icon styled as sleek badge */}
 <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/90 border border-white/20 text-brand-green flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
 <Icon className="w-5 h-5 text-brand-darkgreen" />
 </div>

 {/* Title Floating over Image */}
 <div className="absolute bottom-4 left-6">
 <span className="text-[10px] uppercase font-mono tracking-widest text-brand-darkgreen font-bold">
 Division 0{index + 1}
 </span>
 <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight mt-1">
 {business.title}
 </h3>
 </div>
 </div>

 {/* Card Body */}
 <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6 bg-white">
 <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed line-clamp-3">
 {business.description}
 </p>

 <div className="border-t border-gray-200/60 pt-5 flex items-center justify-between">
 <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
 ISO 9001:2015 Cert
 </span>
 
 <button
 onClick={() => setSelectedBusiness(business)}
 className="inline-flex items-center space-x-1.5 text-[11px] font-extrabold text-brand-darkgreen uppercase tracking-wider hover:underline focus:outline-none"
 >
 <span>Learn More</span>
 <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
 </button>
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>

 </div>

 {/* Interactive Modal Slider */}
 <AnimatePresence>
 {selectedBusiness && (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
 
 {/* Modal Backdrop */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onClick={() => setSelectedBusiness(null)}
 className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-md"
 />

 {/* Modal Window */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95, y: 30 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: 30 }}
 transition={{ type: "spring", damping: 25, stiffness: 350 }}
 className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 z-10"
 >
 {/* Header Image */}
 <div className="relative h-56 sm:h-64 w-full">
 <img
 src={selectedBusiness.image}
 alt={selectedBusiness.title}
 referrerPolicy="no-referrer"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
 
 {/* Close Button */}
 <button
 onClick={() => setSelectedBusiness(null)}
 className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 border border-white/20 transition-colors shadow-md"
 aria-label="Close details"
 >
 <X className="w-5 h-5" />
 </button>

 <div className="absolute bottom-6 left-6 text-white">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Strategic Division Profile
 </span>
 <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mt-1">
 {selectedBusiness.title}
 </h3>
 </div>
 </div>

 {/* Detailed Body */}
 <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
 <div className="space-y-3">
 <h4 className="text-xs uppercase tracking-wider font-mono text-brand-darkgreen font-bold">
 Overview
 </h4>
 <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
 {selectedBusiness.description}
 </p>
 </div>

 <div className="space-y-4 pt-4 border-t border-gray-100">
 <h4 className="text-xs uppercase tracking-wider font-mono text-brand-darkgreen font-bold flex items-center gap-2">
 <Shield className="w-4 h-4 text-brand-green" />
 Key Division Capabilities & Operations
 </h4>
 
 <div className="grid sm:grid-cols-2 gap-3">
 {selectedBusiness.details.map((detail, dIdx) => (
 <div key={dIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-brand-bg border border-gray-100">
 <CheckCircle2 className="w-4 h-4 text-brand-darkgreen shrink-0 mt-0.5" />
 <span className="text-xs sm:text-sm text-gray-800 font-medium">
 {detail}
 </span>
 </div>
 ))}
 </div>
 </div>

 <div className="pt-4 flex justify-end">
 <a
 href="#contact"
 onClick={() => setSelectedBusiness(null)}
 className="px-6 py-3 rounded-xl bg-brand-green text-white hover:bg-brand-green/95 font-bold text-sm shadow-md hover:shadow-lg transition-all"
 >
 Discuss Partnership
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
