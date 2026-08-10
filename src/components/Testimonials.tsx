import { motion } from "motion/react";

// Real partner logos. To swap, replace, or add a partner:
// 1. Drop the image into public/images/partners/
// 2. Add/edit an entry in the PARTNERS array below (logo path + name is
// enough; "sub" and "wordmark" are optional)
const PARTNERS = [
 { id: "ethio-telecom", name: "Ethio Telecom", logo: "/images/partners/ethio-telecom.png" },
 { id: "ethiopian-airlines", name: "Ethiopian Airlines", logo: "/images/partners/ethiopian-airlines.png" },
 { id: "cbe", name: "Commercial Bank of Ethiopia", sub: "New HQ Skyscraper", logo: "/images/partners/cbe.png" },
 { id: "obn", name: "Oromia Broadcasting Network", logo: "/images/partners/obn.png" },
 { id: "condo", name: "Condominium Housing Projects", wordmark: true },
 { id: "real-estate", name: "20+ Real Estate Developers", wordmark: true }
];

export default function Testimonials() {
 return (
 <section id="endorsements" className="py-20 bg-brand-bg transition-colors duration-300">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Client & Partner Endorsements
 </span>
 <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-green leading-tight">
 Trusted by Industry Leaders
 </h2>
 </div>

 {/* Logo Strip */}
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
 {PARTNERS.map((partner, index) => (
 <motion.div
 key={partner.id}
 id={`partner-${partner.id}`}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.4, delay: index * 0.06 }}
 className="group flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-brand-bg/50 border border-gray-100 hover:border-brand-darkgreen/30 hover:shadow-md transition-all duration-300 text-center min-h-[130px]"
 >
 {partner.wordmark ? (
 <span className="font-display text-sm sm:text-base font-extrabold text-brand-green leading-tight">
 {partner.name}
 </span>
 ) : (
 <>
 <img
 src={partner.logo}
 alt={partner.name}
 className="h-14 sm:h-16 w-auto max-w-[85%] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
 />
 <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wide text-gray-400">
 {partner.name}
 </span>
 </>
 )}
 {partner.sub && (
 <span className="text-[9px] font-mono uppercase tracking-wide text-gray-400 -mt-1.5">
 {partner.sub}
 </span>
 )}
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 );
}
