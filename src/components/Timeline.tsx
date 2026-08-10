import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Calendar, Landmark, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import { TIMELINE } from "../data";

export default function Timeline() {
 const [activeMilestone, setActiveMilestone] = useState(0);
 const containerRef = useRef<HTMLDivElement>(null);

 const scroll = (direction: "left" | "right") => {
 if (containerRef.current) {
 const scrollAmount = direction === "left" ? -300 : 300;
 containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
 }
 };

 return (
 <section id="timeline" className="py-24 bg-brand-bg transition-colors duration-300 overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
 <div className="text-left max-w-2xl">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Generations of Industrial Pride
 </span>
 <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-green mt-3 leading-tight">
 Our Journey Since 1967
 </h2>
 <p className="text-base text-gray-500 font-sans mt-3">
 Trace nearly sixty years of strategic pivots, expanding from paint manufacturing into a robust multi-sector industrial conglomerate.
 </p>
 </div>
 
 {/* Scroll Navigation Buttons for Desktop */}
 <div className="hidden md:flex space-x-3">
 <button
 onClick={() => scroll("left")}
 className="p-3 rounded-xl bg-brand-bg border border-gray-200/50 text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-sm"
 aria-label="Scroll timeline left"
 >
 <ArrowLeft className="w-5 h-5" />
 </button>
 <button
 onClick={() => scroll("right")}
 className="p-3 rounded-xl bg-brand-bg border border-gray-200/50 text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-sm"
 aria-label="Scroll timeline right"
 >
 <ArrowRight className="w-5 h-5" />
 </button>
 </div>
 </div>

 {/* Desktop Horizontal Timeline Track */}
 <div className="hidden md:block relative">
 
 {/* Central Track Connection Line */}
 <div className="absolute top-[41px] left-0 right-0 h-1 bg-gradient-to-r from-brand-green/10 via-brand-darkgreen/40 to-brand-green/10 rounded-full z-0" />

 <div
 ref={containerRef}
 className="flex space-x-12 overflow-x-auto pb-8 scrollbar-hide snap-x select-none"
 style={{ scrollbarWidth: "none" }}
 >
 {TIMELINE.map((item, idx) => {
 const isActive = activeMilestone === idx;
 return (
 <div
 key={idx}
 onClick={() => setActiveMilestone(idx)}
 className="min-w-[280px] w-[280px] flex-shrink-0 cursor-pointer group snap-start pt-2"
 >
 <div className="flex flex-col items-center text-center space-y-4">
 
 {/* Year Badge */}
 <div className="relative z-10 flex items-center justify-center">
 <motion.div
 animate={{
 scale: isActive ? 1.25 : 1,
 backgroundColor: isActive ? "#176B4D" : "#5F6368",
 }}
 className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-extrabold text-sm shadow-md transition-colors duration-300 group-hover:bg-brand-darkgreen`}
 >
 {item.year}
 </motion.div>
 
 {/* Active Ripple ring */}
 {isActive && (
 <span className="absolute -inset-2 rounded-full border-2 border-brand-darkgreen animate-ping opacity-35" />
 )}
 </div>

 {/* Timeline Node Content Card */}
 <motion.div
 animate={{
 y: isActive ? 0 : 5,
 opacity: isActive ? 1 : 0.7,
 }}
 className={`p-6 rounded-2xl border transition-all duration-300 w-full ${
 isActive
 ? "bg-brand-green text-white border-brand-green shadow-xl shadow-brand-green/15"
 : "bg-brand-bg text-gray-800 border-gray-100 hover:border-brand-darkgreen/40"
 }`}
 >
 <h3 className="font-display font-bold text-base tracking-tight mb-2">
 {item.title}
 </h3>
 <p className={`text-xs font-sans leading-relaxed ${isActive ? "text-green-100" : "text-gray-500"}`}>
 {item.description}
 </p>
 </motion.div>

 </div>
 </div>
 );
 })}
 </div>
 <p className="text-center font-mono text-xs text-gray-400 mt-4">
 * Drag or use indicators to explore milestones. Click individual milestones to highlight.
 </p>
 </div>

 {/* Mobile Vertical Timeline Layout */}
 <div className="md:hidden space-y-8 relative pl-6">
 {/* Connector Line */}
 <div className="absolute top-0 bottom-0 left-3.5 w-0.5 bg-brand-green/20" />

 {TIMELINE.map((item, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, x: -10 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="relative space-y-2"
 >
 {/* Milestone Indicator Node */}
 <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full border-4 border-white bg-brand-darkgreen shadow-sm z-10" />

 <div className="flex items-center space-x-2">
 <span className="font-display font-black text-lg text-brand-darkgreen">
 {item.year}
 </span>
 <span className="h-0.5 w-4 bg-gray-200" />
 <h3 className="font-display font-bold text-sm text-brand-green uppercase tracking-wider">
 {item.title}
 </h3>
 </div>

 <div className="p-4 rounded-xl bg-brand-bg border border-gray-100">
 <p className="text-xs text-gray-600 leading-relaxed font-sans">
 {item.description}
 </p>
 </div>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 );
}
