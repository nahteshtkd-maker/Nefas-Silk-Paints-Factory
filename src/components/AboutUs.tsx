import { motion } from "motion/react";
import { Shield, Target, Users, Landmark, Flame, Award, Heart, Briefcase, ChevronRight, Mail, Linkedin } from "lucide-react";
import { useWebsite } from "../context/WebsiteContext";

export default function AboutUs() {
 const { t, ceoMessage, vision, teamMembers, timeline } = useWebsite();

 // Color mappings for the values cards — brand-only palette (green + red),
 // alternated and varied in opacity so each card still reads distinctly
 const valueIcons = [
 { icon: Award, color: "from-brand-green/10 to-brand-green/20 text-brand-green" },
 { icon: Shield, color: "from-brand-darkgreen/10 to-brand-darkgreen/20 text-brand-darkgreen" },
 { icon: Landmark, color: "from-brand-green/15 to-brand-green/25 text-brand-green" },
 { icon: Heart, color: "from-brand-darkgreen/15 to-brand-darkgreen/25 text-brand-darkgreen" },
 { icon: Flame, color: "from-brand-green/10 to-brand-green/20 text-brand-green" },
 { icon: Users, color: "from-brand-darkgreen/10 to-brand-darkgreen/20 text-brand-darkgreen" },
 { icon: Target, color: "from-brand-green/15 to-brand-green/25 text-brand-green" },
 ];

 const VALUES = [
 { title: t("valueQuality"), desc: t("valueQualityDesc"), ...valueIcons[0] },
 { title: t("valueProf"), desc: t("valueProfDesc"), ...valueIcons[1] },
 { title: t("valueIntegrity"), desc: t("valueIntegrityDesc"), ...valueIcons[2] },
 { title: t("valueTrust"), desc: t("valueTrustDesc"), ...valueIcons[3] },
 { title: t("valueCommunity"), desc: t("valueCommunityDesc"), ...valueIcons[4] },
 { title: t("valueCustomer"), desc: t("valueCustomerDesc"), ...valueIcons[5] },
 { title: t("valueFlex"), desc: t("valueFlexDesc"), ...valueIcons[6] },
 ];

 return (
 <div className="pt-24 pb-16 bg-brand-bg transition-colors duration-300">
 
 {/* 1. Cinematic Banner */}
 <div className="relative h-[380px] w-full overflow-hidden flex items-center justify-center">
 <div className="absolute inset-0">
 <img
 src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600&h=600"
 alt="Nefas Silk Industrial Heritage"
 className="w-full h-full object-cover brightness-[0.3]"
 referrerPolicy="no-referrer"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/40" />
 </div>

 <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
 <motion.span
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-xs uppercase tracking-[3px] font-mono text-brand-darkgreen font-black bg-brand-darkgreen/15 px-4 py-1.5 rounded-full border border-brand-darkgreen/30 inline-block"
 >
 {t("foundedText")}
 </motion.span>
 <motion.h1
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight"
 >
 {t("storytellingTitle")}
 </motion.h1>
 <motion.p
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-sans font-medium"
 >
 For nearly six decades, pioneering high-quality manufacturing, trade excellence, and logistics connectivity to power Ethiopia's rise.
 </motion.p>
 </div>
 </div>

 {/* 2. Interactive Storytelling & Vision Block */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
 <div className="grid lg:grid-cols-12 gap-12 items-start">
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="lg:col-span-7 space-y-6"
 >
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold block">
 Pioneering Growth & Synergy
 </span>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-green tracking-tight leading-tight">
 Our Journey of Transformation
 </h2>
 <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
 <p>
 <strong>Nefas Silk Paints Factory PLC</strong> was established in 1967, embarking on a bold mission to manufacture world-class architectural and industrial coatings right in the heart of Addis Ababa, reducing Ethiopia's dependence on foreign imports.
 </p>
 <p>
 Through decades of unwavering dedication, advanced chemical engineering, and trust-building with local developers and paint distributors, we became a household name. Under its current forward-looking leadership, the company expanded beyond paint manufacturing to tap into Ethiopia’s primary wealth sectors.
 </p>
 <p>
 Today, Nefas Silk is a highly diversified industrial powerhouse, managing direct-trade organic Coffee Exports, agro-commodity trade (sesame and pulses), and operating an expansive cross-border logistics network spanning between landlocked Ethiopia and the strategic Port of Djibouti.
 </p>
 </div>
 
 <div className="pt-2 flex flex-wrap gap-3">
 <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-150">
 <span className="block text-2xl font-extrabold text-brand-darkgreen font-display">1967</span>
 <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Year Founded</span>
 </div>
 <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-150">
 <span className="block text-2xl font-extrabold text-brand-darkgreen font-display">1,000+</span>
 <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Employees</span>
 </div>
 <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-150">
 <span className="block text-2xl font-extrabold text-brand-darkgreen font-display">ISO 9001</span>
 <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Quality Cert</span>
 </div>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="lg:col-span-5 space-y-6 bg-white p-8 rounded-3xl border border-gray-150 shadow-md"
 >
 <div className="w-12 h-12 rounded-xl bg-brand-darkgreen/15 text-brand-darkgreen flex items-center justify-center">
 <Target className="w-6 h-6" />
 </div>
 <h3 className="font-display font-black text-xl text-brand-green tracking-tight">
 Our Corporate Vision
 </h3>
 <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium italic">
 "{vision.visionText}"
 </p>

 <div className="pt-4 border-t border-gray-100 space-y-4">
 <div className="space-y-1">
 <h4 className="text-xs font-mono uppercase tracking-wider text-brand-darkgreen font-bold">
 {vision.mission1}
 </h4>
 <p className="text-[11px] sm:text-xs text-gray-450">
 {vision.mission1Desc}
 </p>
 </div>
 <div className="space-y-1">
 <h4 className="text-xs font-mono uppercase tracking-wider text-brand-darkgreen font-bold">
 {vision.mission2}
 </h4>
 <p className="text-[11px] sm:text-xs text-gray-450">
 {vision.mission2Desc}
 </p>
 </div>
 <div className="space-y-1">
 <h4 className="text-xs font-mono uppercase tracking-wider text-brand-darkgreen font-bold">
 {vision.mission3}
 </h4>
 <p className="text-[11px] sm:text-xs text-gray-450">
 {vision.mission3Desc}
 </p>
 </div>
 </div>
 </motion.div>
 </div>
 </div>

 {/* 3. CEO Feature Segment (Drawn Dynamically from CMS) */}
 <div className="mt-32 bg-brand-green/5 py-20 border-y border-gray-150">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-12 gap-12 items-center">
 
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 className="lg:col-span-5 flex justify-center"
 >
 <div className="relative w-full max-w-sm">
 <div className="absolute inset-0 bg-brand-darkgreen rounded-3xl rotate-2 shadow-xl opacity-10" />
 <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
 <img
 src={ceoMessage.image}
 alt={ceoMessage.name}
 className="w-full h-full object-cover object-top brightness-[0.95]"
 referrerPolicy="no-referrer"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
 <div className="absolute bottom-4 left-4 text-white">
 <p className="font-display font-extrabold text-lg">{ceoMessage.name}</p>
 <p className="text-[10px] uppercase font-mono tracking-widest text-brand-darkgreen font-bold">
 {ceoMessage.role}
 </p>
 </div>
 </div>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="lg:col-span-7 space-y-6"
 >
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold block">
 {t("ceoMessageTitle")}
 </span>
 <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-green tracking-tight leading-tight">
 {t("ceoSubTitle")}
 </h3>
 
 <div className="text-sm sm:text-base text-gray-700 font-sans italic leading-relaxed relative pl-6 border-l-4 border-brand-darkgreen">
 "{ceoMessage.message}"
 </div>

 <div className="space-y-1 pt-2">
 <p className="font-display font-black text-brand-green text-lg">
 {ceoMessage.name}
 </p>
 <p className="text-xs uppercase font-mono tracking-widest text-brand-darkgreen font-black">
 {ceoMessage.role} • Nefas Silk PLC
 </p>
 </div>
 </motion.div>

 </div>
 </div>
 </div>

 {/* 4. Leadership Board Segment (Drawn Dynamically from CMS) */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Corporate Governance
 </span>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-green mt-3 tracking-tight">
 Our Executive Leadership & Board
 </h2>
 <p className="text-sm sm:text-base text-gray-500 mt-4">
 Guiding Nefas Silk's industrial strategy, regulatory compliance, and cross-border commercial trade partnerships with centuries of combined corporate experience.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
 {teamMembers.map((leader, idx) => (
 <motion.div
 key={leader.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.05 }}
 className="group flex flex-col bg-white rounded-2xl p-5 border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300"
 >
 <div className="flex items-center gap-4 mb-4">
 <img
 src={leader.image}
 alt={leader.name}
 className="w-16 h-16 rounded-full object-cover object-top border border-gray-100 group-hover:border-brand-darkgreen transition-colors"
 referrerPolicy="no-referrer"
 />
 <div>
 <h4 className="font-display font-extrabold text-sm sm:text-base text-brand-charcoal group-hover:text-brand-darkgreen transition-colors line-clamp-1">
 {leader.name}
 </h4>
 <p className="text-[10px] text-gray-400 font-mono tracking-wide mt-0.5 uppercase line-clamp-1">
 {leader.position}
 </p>
 </div>
 </div>

 <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-sans line-clamp-4 flex-grow mb-4">
 {leader.biography}
 </p>

 <div className="flex gap-2 pt-3 border-t border-gray-100 text-gray-400">
 <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-darkgreen transition-colors">
 <Linkedin className="w-3.5 h-3.5" />
 </a>
 <a href={`mailto:${leader.email}`} className="hover:text-brand-darkgreen transition-colors">
 <Mail className="w-3.5 h-3.5" />
 </a>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 {/* 5. Historical Journey Timeline (Drawn Dynamically from CMS) */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 {t("companyHistory")}
 </span>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-green mt-3 tracking-tight">
 Nearly Six Decades of Dedication
 </h2>
 <p className="text-sm sm:text-base text-gray-500 mt-4">
 Follow the major corporate milestones that define our heritage of substituting imports and supporting local trade.
 </p>
 </div>

 <div className="relative border-l border-gray-200 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-10">
 {timeline.map((item, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, x: -15 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="relative space-y-1"
 >
 <div className="absolute -left-[31px] sm:-left-[39px] w-4 h-4 rounded-full bg-brand-darkgreen ring-4 ring-white flex items-center justify-center" />
 <span className="inline-block text-xs font-mono font-black text-brand-darkgreen bg-brand-darkgreen/10 px-2 py-0.5 rounded">
 {item.year}
 </span>
 <h3 className="font-display font-black text-base sm:text-lg text-brand-green tracking-tight">
 {item.title}
 </h3>
 <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
 {item.description}
 </p>
 </motion.div>
 ))}
 </div>
 </div>

 {/* 6. Core Pillars of Value */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 {t("coreValuesTitle")}
 </span>
 <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-green mt-3 tracking-tight">
 Our Guiding Pillars of Excellence
 </h2>
 <p className="text-sm sm:text-base text-gray-500 mt-4">
 {t("coreValuesSub")}
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
 {VALUES.map((val, idx) => {
 const Icon = val.icon;
 return (
 <motion.div
 key={idx}
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.05 }}
 className="p-6 rounded-2xl bg-white border border-gray-150 shadow-sm hover:border-brand-darkgreen/20 transition-all group flex flex-col justify-between"
 >
 <div className="space-y-4">
 <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${val.color} group-hover:scale-105 transition-transform shadow-inner`}>
 <Icon className="w-6 h-6" />
 </div>
 <h4 className="font-display font-bold text-base text-brand-charcoal">
 {val.title}
 </h4>
 <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
 {val.desc}
 </p>
 </div>
 </motion.div>
 );
 })}
 </div>
 </div>

 </div>
 );
}
