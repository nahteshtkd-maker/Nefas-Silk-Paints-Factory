import { useState, useEffect } from "react";
import { ArrowRight, MessageSquare, Award, Users, ShieldCheck, Route, FileText, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useWebsite } from "../context/WebsiteContext";

const HERO_SLIDES = [
 {
 image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200&h=700",
 title: "Paint Manufacturing",
 desc: "Advanced paint production, automated resin reactors & quality testing."
 },
 {
 image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=700",
 title: "R&D Chemistry Laboratory",
 desc: "Innovative chemical formulations and rigorous color spectrometer checks."
 },
 {
 image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200&h=700",
 title: "Skilled Industrial Workers",
 desc: "Over 1,000 highly trained employees powering our factories."
 },
 {
 image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200&h=700",
 title: "Automated Paint Production Line",
 desc: "Consistent paint packaging and state-of-the-art Italian canning presses."
 },
 {
 image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200&h=700",
 title: "Premium Coffee Processing",
 desc: "Wet and dry mill processing of export-grade Arabica specialty coffee."
 },
 {
 image: "https://images.unsplash.com/photo-1574321020309-1f48651c6c0e?auto=format&fit=crop&q=80&w=1200&h=700",
 title: "Agro & Sesame Export Sourcing",
 desc: "Humera sesame and pulses cleaned and graded for world trade hubs."
 },
 {
 image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200&h=700",
 title: "Support for Ethiopian Farmers",
 desc: "Direct trade relationships ensuring fair compensation for smallholders."
 },
 {
 image: "/images/fleet_logistics_branded_truck.png",
 title: "Branded Cargo & Logistics Trucks",
 desc: "A reliable fleet of 200+ trucks bridging Addis and Port of Djibouti."
 },
 {
 image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200&h=700",
 title: "High-Capacity Warehousing",
 desc: "Safe dry-storage hubs and real-time electronic inventory tracking."
 }
];

export default function Hero() {
 const { t } = useWebsite();
 const [currentSlide, setCurrentSlide] = useState(0);

 // Automatic slide rotation
 useEffect(() => {
 const timer = setInterval(() => {
 setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
 }, 5500);
 return () => clearInterval(timer);
 }, []);

 // Simple animated counters simulation
 const [years, setYears] = useState(0);
 const [employees, setEmployees] = useState(0);
 const [trucks, setTrucks] = useState(0);

 useEffect(() => {
 const yTimer = setTimeout(() => {
 if (years < 60) setYears((prev) => prev + 2);
 }, 35);
 const eTimer = setTimeout(() => {
 if (employees < 1000) setEmployees((prev) => prev + 40);
 }, 35);
 const tTimer = setTimeout(() => {
 if (trucks < 200) setTrucks((prev) => prev + 8);
 }, 35);

 return () => {
 clearTimeout(yTimer);
 clearTimeout(eTimer);
 clearTimeout(tTimer);
 };
 }, [years, employees, trucks]);

 return (
 <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white pt-20">
 
 {/* 1. Hero Banner Background */}
 <div className="absolute inset-0 z-0 overflow-hidden">
 <div
 className="absolute inset-0 w-full h-full bg-cover bg-center opacity-90 scale-105"
 style={{
 backgroundImage: `url(/images/hero-banner.png)`,
 }}
 />

 {/* Bright white gradient shield overlay */}
 <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/45 to-white/20" />
 </div>

 {/* 2. Hero Content Container */}
 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center py-12 md:py-24">
 <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
 
 {/* Main titles & triggers */}
 <div className="lg:col-span-12 text-left space-y-6 md:space-y-8">
 
 {/* Live Slider category badge */}
 <motion.div
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 className="inline-flex items-center space-x-2 bg-brand-darkgreen/15 border border-brand-darkgreen/30 px-3.5 py-1.5 rounded-full"
 >
 <span className="w-2.5 h-2.5 rounded-full bg-brand-darkgreen animate-pulse" />
 <span className="text-xs uppercase tracking-[2px] font-mono text-brand-darkgreen font-extrabold">
 {HERO_SLIDES[currentSlide].title}
 </span>
 </motion.div>

 {/* Headline */}
 <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-brand-charcoal leading-[1.08]">
 {t("heroTitle1")} <br />
 <span className="text-brand-darkgreen font-sans">
 {t("heroTitle2")}
 </span> <br />
 {t("heroTitle3")}
 </h1>

 {/* Subtitle */}
 <motion.p
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.3, duration: 0.8 }}
 className="text-sm sm:text-base md:text-lg text-gray-600 font-sans max-w-2xl leading-relaxed"
 >
 {t("heroSubtitle")}
 </motion.p>

 {/* Navigation Buttons CTAs */}
 <motion.div
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="flex flex-wrap gap-4 items-center"
 >
 <a
 href="#businesses"
 className="group flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-brand-darkgreen text-white hover:bg-[#0F513A] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow shadow-brand-darkgreen/10 hover:scale-[1.02]"
 >
 <span>{t("exploreBtn")}</span>
 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </a>

 <a
 href="#products"
 className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-black/5 hover:bg-black/10 border border-black/10 text-brand-charcoal font-bold text-xs uppercase tracking-wider transition-all duration-300"
 >
 <ShoppingBag className="w-4 h-4 text-brand-darkgreen" />
 <span>{t("productsBtn")}</span>
 </a>

 <a
 href="#contact"
 className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-transparent hover:bg-black/5 text-gray-600 hover:text-brand-charcoal font-bold text-xs uppercase tracking-wider transition-all duration-300"
 >
 <MessageSquare className="w-4 h-4" />
 <span>{t("contactBtn")}</span>
 </a>
 </motion.div>

 {/* Dots Slide Indicators */}
 <div className="flex space-x-2.5 pt-4">
 {HERO_SLIDES.map((slide, idx) => (
 <button
 key={idx}
 onClick={() => setCurrentSlide(idx)}
 title={slide.title}
 className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
 currentSlide === idx ? "w-8 bg-brand-darkgreen" : "w-2.5 bg-black/20 hover:bg-black/40"
 }`}
 aria-label={`Slide ${idx + 1}`}
 />
 ))}
 </div>

 </div>

 </div>
 </div>

 {/* 3. Hero Overlapping Statistics Panel (Animated) */}
 <div className="relative z-20 w-full bg-white border-t border-brand-darkgreen/20 shadow-2xl py-6 sm:py-8">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
 
 {/* Counter 1: Years */}
 <div className="flex flex-col items-start border-l border-black/10 pl-4 md:pl-6">
 <span className="font-display font-black text-2xl sm:text-3xl text-brand-darkgreen block">
 {years}+
 </span>
 <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-brand-charcoal opacity-90 mt-1 block">
 {t("yearsOfExcellence")}
 </span>
 <span className="text-[9.5px] text-gray-500 font-mono mt-0.5 uppercase">
 {t("foundedText")}
 </span>
 </div>

 {/* Counter 2: Employees */}
 <div className="flex flex-col items-start border-l border-black/10 pl-4 md:pl-6">
 <span className="font-display font-black text-2xl sm:text-3xl text-brand-darkgreen block">
 {employees}+
 </span>
 <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-brand-charcoal opacity-90 mt-1 block">
 {t("employees")}
 </span>
 <span className="text-[9.5px] text-gray-500 font-mono mt-0.5 uppercase">
 {t("skilledTalent")}
 </span>
 </div>

 {/* Counter 3: Trucks */}
 <div className="flex flex-col items-start border-l border-black/10 pl-4 md:pl-6">
 <span className="font-display font-black text-2xl sm:text-3xl text-brand-darkgreen block">
 {trucks}+
 </span>
 <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-brand-charcoal opacity-90 mt-1 block">
 {t("logisticsTrucks")}
 </span>
 <span className="text-[9.5px] text-gray-500 font-mono mt-0.5 uppercase">
 {t("corridorText")}
 </span>
 </div>

 {/* Counter 4: Export Partners */}
 <div className="flex flex-col items-start border-l border-black/10 pl-4 md:pl-6">
 <span className="font-display font-black text-2xl sm:text-3xl text-brand-darkgreen block">
 {t("globalPartners")}
 </span>
 <span className="text-[10.5px] uppercase tracking-wider font-extrabold text-brand-charcoal opacity-90 mt-1 block">
 {t("exportPartnersLabel")}
 </span>
 <span className="text-[9.5px] text-gray-500 font-mono mt-0.5 uppercase">
 {t("directTradeText")}
 </span>
 </div>

 </div>
 </div>
 </div>

 </section>
 );
}
