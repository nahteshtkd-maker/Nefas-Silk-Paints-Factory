import { Award, Users, Truck, Sparkles, Map } from "lucide-react";
import { motion } from "motion/react";

export default function Stats() {
 const STATS_DATA = [
 {
 value: "60+",
 label: "Years Experience",
 desc: "Founded in 1967",
 icon: Award,
 percent: 100
 },
 {
 value: "1,000+",
 label: "Employees",
 desc: "Skilled Engineers & Growers",
 icon: Users,
 percent: 92
 },
 {
 value: "200+",
 label: "Fleet Trucks",
 desc: "Nationwide Logistics",
 icon: Truck,
 percent: 88
 },
 {
 value: "Thousands",
 label: "Satisfied Customers",
 desc: "Residential & Corporate",
 icon: Sparkles,
 percent: 98
 },
 {
 value: "Global",
 label: "Export Markets",
 desc: "Europe, Asia & Middle East",
 icon: Map,
 percent: 85
 }
 ];

 return (
 <section className="py-20 bg-brand-bg text-brand-charcoal relative overflow-hidden">
 
 {/* Absolute Tech Grid Background */}
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px]" />
 
 {/* Decorative colored glow spheres */}
 <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-darkgreen/10 blur-3xl animate-slow-pulse" />
 <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-darkgreen/10 blur-3xl animate-slow-pulse" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
 <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Key Operational Numbers
 </span>
 <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
 Nefas Silk in Figures
 </h2>
 <div className="h-0.5 w-16 bg-brand-darkgreen mx-auto" />
 </div>

 {/* Counters Grid */}
 <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
 {STATS_DATA.map((stat, idx) => {
 const Icon = stat.icon;
 return (
 <motion.div
 key={idx}
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: idx * 0.08 }}
 className="p-6 rounded-2xl bg-white border border-black/5 flex flex-col justify-between items-center space-y-4 hover:shadow-lg transition-shadow shadow-sm"
 >
 {/* Rolling Stat Header */}
 <div className="space-y-2 flex flex-col items-center">
 <div className="p-3 rounded-xl bg-brand-darkgreen/10 text-brand-darkgreen mb-1">
 <Icon className="w-5 h-5" />
 </div>
 
 <span className="font-display font-black text-3xl sm:text-4xl tracking-tight text-brand-charcoal block">
 {stat.value}
 </span>
 
 <span className="text-xs sm:text-sm font-bold text-gray-700 block leading-tight">
 {stat.label}
 </span>
 </div>

 {/* Subtitle / Description */}
 <div className="space-y-3 w-full">
 <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block">
 {stat.desc}
 </span>

 {/* Micro Visual Load Line */}
 <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
 <motion.div
 initial={{ width: 0 }}
 whileInView={{ width: `${stat.percent}%` }}
 viewport={{ once: true }}
 transition={{ duration: 1.2, ease: "easeOut" }}
 className="h-full bg-brand-darkgreen rounded-full"
 />
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>

 </div>
 </section>
 );
}
