import { useState, FormEvent } from "react";
import { Send, CheckCircle2, Facebook, Twitter, Linkedin, Shield, Award, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

export default function Footer() {
 const [email, setEmail] = useState("");
 const [subscribed, setSubscribed] = useState(false);

 const handleSubscribe = (e: FormEvent) => {
 e.preventDefault();
 if (!email) return;
 setSubscribed(true);
 setTimeout(() => {
 setEmail("");
 setSubscribed(false);
 }, 4000);
 };

 return (
 <footer className="bg-[#16211A] text-gray-300 border-t border-white/5 pt-20 pb-8 transition-colors duration-300">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/5">
 
 {/* Logo & About Column (lg:col-span-4) */}
 <div className="lg:col-span-4 space-y-6">
 <div className="flex items-center space-x-3">
 <Logo size={36} showText={true} textColorClass="text-white" />
 </div>

 <p className="text-sm text-gray-400 font-sans leading-relaxed">
 Established in 1967, Nefas Silk Paints Factory PLC is one of East Africa’s oldest and most reliable industrial conglomerates, delivering world-class coatings, premium Arabica coffee exports, and heavy logistics solutions.
 </p>

 <div className="flex space-x-3">
 <a href="#" className="p-2 rounded bg-white/5 hover:bg-white/10 text-white hover:text-brand-green transition-all" aria-label="Facebook">
 <Facebook className="w-4 h-4" />
 </a>
 <a href="#" className="p-2 rounded bg-white/5 hover:bg-white/10 text-white hover:text-brand-green transition-all" aria-label="Twitter">
 <Twitter className="w-4 h-4" />
 </a>
 <a href="#" className="p-2 rounded bg-white/5 hover:bg-white/10 text-white hover:text-brand-green transition-all" aria-label="Linkedin">
 <Linkedin className="w-4 h-4" />
 </a>
 </div>
 </div>

 {/* Quick Links Column (lg:col-span-2) */}
 <div className="lg:col-span-2 space-y-4">
 <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
 Corporation
 </h4>
 <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
 <li><a href="#home" className="hover:text-brand-green transition-colors">Home Page</a></li>
 <li><a href="#timeline" className="hover:text-brand-green transition-colors">Our History</a></li>
 <li><a href="#manufacturing" className="hover:text-brand-green transition-colors">Facilities</a></li>
 <li><a href="#sustainability" className="hover:text-brand-green transition-colors">Sustainability</a></li>
 </ul>
 </div>

 {/* Businesses & Products (lg:col-span-3) */}
 <div className="lg:col-span-3 space-y-4">
 <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
 Divisions & Portfolios
 </h4>
 <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
 <li><a href="#businesses" className="hover:text-brand-green transition-colors">Paint Manufacturing</a></li>
 <li><a href="#businesses" className="hover:text-brand-green transition-colors">Coffee Export Division</a></li>
 <li><a href="#businesses" className="hover:text-brand-green transition-colors">Fleet Logistics & Transport</a></li>
 <li><a href="#businesses" className="hover:text-brand-green transition-colors">Agro-commodities Trade</a></li>
 </ul>
 </div>

 {/* Newsletter Column (lg:col-span-3) */}
 <div className="lg:col-span-3 space-y-4">
 <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
 Corporate Intelligence
 </h4>
 <p className="text-xs text-gray-400 font-sans leading-relaxed">
 Subscribe to our bi-annual industry briefings, export market reports, and chemical updates.
 </p>

 <AnimatePresence mode="wait">
 {subscribed ? (
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0 }}
 className="p-3.5 rounded bg-brand-green/10 border border-brand-green/30 flex items-start gap-2 text-xs"
 >
 <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
 <div>
 <p className="font-bold text-brand-green">Subscribed OK</p>
 <p className="text-[10px] text-gray-400">Briefings sent to your address.</p>
 </div>
 </motion.div>
 ) : (
 <motion.form
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onSubmit={handleSubscribe}
 className="flex space-x-1.5"
 >
 <input
 type="email"
 required
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="partner@trade.com"
 className="flex-grow px-3.5 py-2 rounded-[4px] bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-green"
 />
 <button
 type="submit"
 className="p-2.5 rounded-[4px] bg-brand-green text-white hover:bg-brand-darkgreen transition-all shadow"
 aria-label="Subscribe"
 >
 <Send className="w-3.5 h-3.5" />
 </button>
 </motion.form>
 )}
 </AnimatePresence>
 </div>

 </div>

 {/* Legal & Footer Bottom */}
 <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono gap-4">
 <div className="flex flex-wrap gap-2.5 items-center">
 <span>&copy; {new Date().getFullYear()} Nefas Silk Paints Factory PLC. All Rights Reserved.</span>
 </div>
 
 <div className="flex space-x-6">
 <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
 <a href="#" className="hover:text-brand-green transition-colors">Terms of Use</a>
 <a href="#" className="hover:text-brand-green transition-colors">ISO 9001:2015 Cert</a>
 </div>
 </div>

 </div>
 </footer>
 );
}
