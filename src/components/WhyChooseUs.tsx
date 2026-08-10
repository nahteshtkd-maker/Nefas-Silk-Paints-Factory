import { Award, Layers, Globe, Cpu, Route, CheckSquare } from "lucide-react";
import { motion } from "motion/react";
import { WHY_CHOOSE_US } from "../data";

export default function WhyChooseUs() {
 const icons = [Award, Layers, Globe, Cpu, Route, CheckSquare];

 return (
 <section className="py-24 bg-brand-bg transition-colors duration-300 relative overflow-hidden">
 
 {/* Decorative Blur Spheres */}
 <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl animate-slow-pulse" />
 <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-brand-darkgreen/5 blur-3xl animate-slow-pulse" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 The Industry Benchmark
 </span>
 <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-green mt-3 leading-tight">
 Why Choose Us
 </h2>
 <p className="text-base sm:text-lg text-gray-500 font-sans mt-4">
 A reputation forged over generations, backed by automated infrastructure and a relentless commitment to national industrial growth.
 </p>
 </div>

 {/* Feature Bento Grid */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
 {WHY_CHOOSE_US.map((item, index) => {
 const Icon = icons[index];
 return (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.4, delay: index * 0.08 }}
 className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
 >
 {/* Subtle Color Strip Accent on hover */}
 <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-darkgreen scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

 <div className="flex flex-col h-full justify-between space-y-6">
 <div className="space-y-4">
 {/* Icon Container */}
 <div className="inline-flex p-3 rounded-xl bg-brand-green/5 text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
 <Icon className="w-6 h-6" />
 </div>

 <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 group-hover:text-brand-green transition-colors">
 {item.title}
 </h3>

 <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
 {item.description}
 </p>
 </div>

 {/* Corner Index Number */}
 <div className="text-right">
 <span className="font-mono text-xs text-gray-300 font-bold group-hover:text-brand-darkgreen transition-colors">
 0{index + 1}
 </span>
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>

 {/* Dynamic Trust Banner */}
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 className="mt-16 p-6 md:p-8 rounded-2xl bg-brand-darkgreen/5 text-brand-charcoal border border-brand-darkgreen/15 flex flex-col md:flex-row items-center justify-between gap-6"
 >
 <div className="text-center md:text-left space-y-1">
 <h4 className="font-display font-bold text-lg md:text-xl">
 Partnering with Global Trade Enterprises
 </h4>
 <p className="text-sm text-gray-600 font-sans">
 Get customized corporate consulting, batch specifications, and priority scheduling.
 </p>
 </div>
 <a
 href="#contact"
 className="px-6 py-3 rounded-xl bg-brand-darkgreen text-white hover:bg-brand-darkgreen/95 font-bold text-sm shadow-md transition-all duration-300 whitespace-nowrap shrink-0"
 >
 Initiate Corporate Request
 </a>
 </motion.div>

 </div>
 </section>
 );
}
