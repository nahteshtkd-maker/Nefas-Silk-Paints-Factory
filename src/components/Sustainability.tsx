import { Leaf, Cpu, Sprout, ShieldCheck, Lightbulb, Heart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Sustainability() {
 const INITIATIVES = [
 {
 title: "Environmental Responsibility",
 desc: "Minimizing ecological footprints through strict biological wastewater treatment, VOC-free product development, and solar energy installations across manufacturing plants.",
 icon: Leaf,
 color: "text-green-600 bg-green-500/5"
 },
 {
 title: "Efficient Manufacturing",
 desc: "Deploying high-efficiency German automated reactors that minimize heat energy loss by 30% and implementing a zero-solid-waste policy across all paint lines.",
 icon: Cpu,
 color: "text-cyan-600 bg-cyan-500/5"
 },
 {
 title: "Supporting Ethiopian Farmers",
 desc: "By-passing intermediary brokers to source coffee and oilseeds directly from smallholder cooperatives, ensuring 100% fair pricing, crop insurance, and soil inputs.",
 icon: Sprout,
 color: "text-emerald-700 bg-emerald-500/5"
 },
 {
 title: "Uncompromising Quality Control",
 desc: "ISO-accredited chemical testing and digital sample archiving guarantee that products never fail to meet environmental limits or international grading levels.",
 icon: ShieldCheck,
 color: "text-brand-darkgreen bg-brand-darkgreen/5"
 },
 {
 title: "Industrial Innovation",
 desc: "Our localized R&D facility creates bespoke protective coatings for high-altitude structures, optimizing product longevity and reducing re-coating cycles.",
 icon: Lightbulb,
 color: "text-amber-500 bg-amber-500/5"
 },
 {
 title: "Community Development",
 desc: "Investing a percentage of export revenues directly into building local primary schools, clean drinking water access, and regional agricultural training hubs.",
 icon: Heart,
 color: "text-teal-600 bg-teal-500/5"
 }
 ];

 return (
 <section id="sustainability" className="py-24 bg-brand-bg transition-colors duration-300 relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Sustainable Growth
 </span>
 <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-green mt-3 leading-tight">
 Our Commitment to Sustainability
 </h2>
 <p className="text-base sm:text-lg text-gray-500 font-sans mt-4">
 We believe industrial scale demands social responsibility. Our triple-bottom-line framework balances commercial growth with farmer welfare and ecological guardianship.
 </p>
 </div>

 {/* Grid Initiatives */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
 {INITIATIVES.map((item, idx) => {
 const Icon = item.icon;
 return (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: idx * 0.08 }}
 className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
 >
 <div className="space-y-4">
 <div className={`inline-flex p-3 rounded-xl ${item.color}`}>
 <Icon className="w-6 h-6" />
 </div>
 <h3 className="font-display font-bold text-lg sm:text-xl text-brand-green">
 {item.title}
 </h3>
 <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
 {item.desc}
 </p>
 </div>
 </motion.div>
 );
 })}
 </div>

 </div>
 </section>
 );
}
