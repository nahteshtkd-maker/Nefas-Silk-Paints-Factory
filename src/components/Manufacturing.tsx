import { useState } from "react";
import { Cpu, ShieldCheck, Microscope, Layers, Package, Beaker, CheckCircle, ChevronRight, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Manufacturing() {
 const [activeStep, setActiveStep] = useState(0);

 const PROCESS_STEPS = [
 {
 title: "1. Precision Sourcing & Chemical Analysis",
 desc: "Raw resins, pigments, and chemical additives are verified in our certified high-precision laboratory, ensuring perfect chemical integrity.",
 icon: Microscope,
 badge: "Chemical Analysis"
 },
 {
 title: "2. High-Shear Milling & Dispersion",
 desc: "Pigments are dispersed into synthetic resins under intense high-shear mixers to achieve a uniform, micron-fine molecular layout.",
 icon: Beaker,
 badge: "Molecular Synthesis"
 },
 {
 title: "3. Let-Down & Custom Color Calibration",
 desc: "The paint paste is combined with binding agents. Then, specialized spectrophotometers calibrate custom color hues with absolute batch consistency.",
 icon: Sliders,
 badge: "Chromatographic Check"
 },
 {
 title: "4. Sterile Canning & Robotic Packaging",
 desc: "Automated lines fill paint cans instantly, hermetically seal them, and place them on pallets ready for immediate distribution.",
 icon: Package,
 badge: "Packaging Automation"
 }
 ];

 return (
 <section id="manufacturing" className="py-24 bg-brand-bg transition-colors duration-300 relative overflow-hidden">
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
 {/* Section Header */}
 <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
 <div className="lg:col-span-6 text-left space-y-4">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Engineering the Future
 </span>
 <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-green leading-tight">
 Manufacturing Excellence
 </h2>
 <p className="text-base text-gray-600 font-sans leading-relaxed">
 Equipped with German-engineered automated paint reactors and ISO-certified chemical laboratories, we lead East Africa in modern decorative and industrial coatings manufacturing.
 </p>
 </div>
 <div className="lg:col-span-6 grid grid-cols-2 gap-4">
 {/* Quick Fact Badges */}
 <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm space-y-2">
 <span className="text-2xl font-bold font-display text-brand-darkgreen">70M+</span>
 <p className="text-xs font-semibold text-brand-green uppercase font-mono">Liters / Year Capacity</p>
 <p className="text-xs text-gray-400">High volume automated paint outputs</p>
 </div>
 <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm space-y-2">
 <span className="text-2xl font-bold font-display text-brand-green">100%</span>
 <p className="text-xs font-semibold text-brand-darkgreen uppercase font-mono">ISO 9001:2015 Cert</p>
 <p className="text-xs text-gray-400">Internationally validated standards</p>
 </div>
 </div>
 </div>

 {/* Interactive Production Process Illustration */}
 <div className="grid lg:grid-cols-12 gap-10 items-stretch">
 
 {/* Left: Step selectors with Progress bars */}
 <div className="lg:col-span-5 space-y-4">
 <h3 className="font-display font-bold text-lg text-brand-green border-b border-gray-200/50 pb-3 flex items-center gap-2">
 <Cpu className="w-5 h-5 text-brand-darkgreen" />
 Automated Production Line
 </h3>

 <div className="space-y-3">
 {PROCESS_STEPS.map((step, idx) => {
 const isActive = activeStep === idx;
 const StepIcon = step.icon;
 return (
 <div
 key={idx}
 onClick={() => setActiveStep(idx)}
 className={`relative p-5 rounded-xl border cursor-pointer transition-all duration-300 flex items-start gap-4 ${
 isActive
 ? "bg-white border-brand-darkgreen shadow-md scale-[1.01]"
 : "bg-transparent border-gray-200/50 hover:bg-white/40"
 }`}
 >
 {/* Active Left Indicator Strip */}
 {isActive && (
 <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-darkgreen rounded-l-xl" />
 )}

 <div className={`p-2.5 rounded-lg border transition-colors ${
 isActive
 ? "bg-brand-darkgreen/10 border-brand-darkgreen text-brand-darkgreen"
 : "bg-gray-100 border-transparent text-gray-400"
 }`}>
 <StepIcon className="w-5 h-5" />
 </div>

 <div className="space-y-1">
 <span className="text-[10px] font-mono tracking-wider text-brand-darkgreen uppercase font-bold">
 {step.badge}
 </span>
 <h4 className="font-display font-bold text-sm sm:text-base text-brand-green">
 {step.title}
 </h4>
 </div>
 </div>
 );
 })}
 </div>
 </div>

 {/* Right: Large active step display with interactive factory illustration */}
 <div className="lg:col-span-7 flex flex-col justify-between">
 <AnimatePresence mode="wait">
 <motion.div
 key={activeStep}
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -20 }}
 transition={{ duration: 0.3 }}
 className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg flex-grow flex flex-col justify-between"
 >
 <div className="space-y-6">
 {/* Visual Factory Animation / Representation */}
 <div className="relative h-60 w-full rounded-xl bg-brand-bg border border-gray-200/60 overflow-hidden flex items-center justify-center">
 
 {/* Animated grid background */}
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />

 {/* Step-specific custom animations */}
 {activeStep === 0 && (
 <div className="relative flex flex-col items-center text-center space-y-4">
 <Microscope className="w-16 h-16 text-brand-green animate-bounce" />
 <span className="text-xs font-mono text-gray-400 uppercase tracking-widest animate-pulse">Sensing purity, testing viscosity...</span>
 <div className="flex gap-1.5 justify-center">
 <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
 <span className="text-xs text-green-600 font-bold">Chemical Approval OK</span>
 </div>
 </div>
 )}

 {activeStep === 1 && (
 <div className="relative flex flex-col items-center text-center space-y-4">
 <div className="flex gap-4 items-center">
 <Beaker className="w-12 h-12 text-brand-darkgreen animate-pulse" />
 <Layers className="w-12 h-12 text-brand-green animate-spin" style={{ animationDuration: "12s" }} />
 </div>
 <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">High-speed mechanical blending...</span>
 <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
 <div className="h-full bg-brand-darkgreen rounded-full animate-pulse" style={{ width: "85%" }} />
 </div>
 </div>
 )}

 {activeStep === 2 && (
 <div className="relative flex flex-col items-center text-center space-y-4">
 <div className="flex gap-3">
 <span className="w-8 h-8 rounded-full bg-brand-sage border border-brand-green/30 animate-pulse" />
 <span className="w-8 h-8 rounded-full bg-brand-green animate-pulse delay-75" />
 <span className="w-8 h-8 rounded-full bg-brand-darkgreen animate-pulse delay-150" />
 </div>
 <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Adjusting gloss and matching wavelengths...</span>
 <div className="text-xs font-mono text-brand-green font-bold border border-brand-darkgreen/30 px-3 py-1 rounded bg-brand-darkgreen/5">
 Spectrophotometer Deviance: &lt; 0.02%
 </div>
 </div>
 )}

 {activeStep === 3 && (
 <div className="relative flex flex-col items-center text-center space-y-4">
 <Package className="w-16 h-16 text-brand-green animate-bounce" />
 <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Pristine airtight encapsulation...</span>
 <div className="flex gap-4 font-mono text-xs text-gray-400">
 <span>Speed: 120 cans/min</span>
 <span>•</span>
 <span>Line 04 Active</span>
 </div>
 </div>
 )}

 </div>

 <div className="space-y-3">
 <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-green">
 {PROCESS_STEPS[activeStep].title}
 </h3>
 <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
 {PROCESS_STEPS[activeStep].desc}
 </p>
 </div>
 </div>

 <div className="border-t border-gray-100 pt-6 mt-6 flex justify-between items-center text-xs">
 <span className="text-gray-400 font-mono">Phase 0{activeStep + 1} • Continuous Flow</span>
 <button
 onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)}
 className="flex items-center space-x-1 font-bold text-brand-darkgreen hover:underline uppercase tracking-wider"
 >
 <span>Next Phase</span>
 <ChevronRight className="w-4 h-4" />
 </button>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 </div>

 {/* Quality Assurance & Innovation Double Card Section */}
 <div className="grid md:grid-cols-2 gap-8 mt-16">
 
 {/* Quality Assurance Card */}
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md space-y-6 hover:shadow-lg transition-all"
 >
 <div className="inline-flex p-3 rounded-xl bg-brand-green/5 text-brand-green">
 <ShieldCheck className="w-6 h-6" />
 </div>
 
 <div className="space-y-2">
 <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-green">
 World-Class Quality Assurance
 </h3>
 <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
 Every single paint batch, coffee container, and sesame cargo undergoes rigorous internal quality checks. Our facilities adhere directly to the ISO 9001:2015 certified protocols for international standard conformity.
 </p>
 </div>

 <div className="space-y-2.5">
 <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal font-sans">
 <CheckCircle className="w-4 h-4 text-brand-darkgreen shrink-0" />
 <span>Intertek-vetted coffee grading systems</span>
 </div>
 <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal font-sans">
 <CheckCircle className="w-4 h-4 text-brand-darkgreen shrink-0" />
 <span>Chemical resistance and heavy scrub resistance tests</span>
 </div>
 <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal font-sans">
 <CheckCircle className="w-4 h-4 text-brand-darkgreen shrink-0" />
 <span>Standardized UV weather-exposure cabinets</span>
 </div>
 </div>
 </motion.div>

 {/* Eco Innovation Card */}
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md space-y-6 hover:shadow-lg transition-all"
 >
 <div className="inline-flex p-3 rounded-xl bg-brand-green/5 text-brand-green">
 <Beaker className="w-6 h-6" />
 </div>
 
 <div className="space-y-2">
 <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-green">
 Eco-Innovation & Formulation
 </h3>
 <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
 By investing in next-generation binder synthesis and substituting toxic pigments, Nefas Silk delivers high-durability acrylic coatings with low-VOC content, keeping classrooms and homes safe.
 </p>
 </div>

 <div className="space-y-2.5">
 <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal font-sans">
 <CheckCircle className="w-4 h-4 text-brand-darkgreen shrink-0" />
 <span>Substituting lead-based ingredients entirely</span>
 </div>
 <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal font-sans">
 <CheckCircle className="w-4 h-4 text-brand-darkgreen shrink-0" />
 <span>Low odor and chemical emission certifications</span>
 </div>
 <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal font-sans">
 <CheckCircle className="w-4 h-4 text-brand-darkgreen shrink-0" />
 <span>Biological filtration of wastewater effluents</span>
 </div>
 </div>
 </motion.div>

 </div>

 </div>
 </section>
 );
}
