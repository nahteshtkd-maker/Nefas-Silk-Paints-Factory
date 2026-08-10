import { useState, useEffect } from "react";
import { 
 Menu, X, ChevronDown, Phone, Globe, Shield, 
 Palette, ShieldCheck, PaintRoller, Trees, Grid, Sparkles, Lock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";
import { useWebsite } from "../context/WebsiteContext";

export default function Navbar() {
 const { language, setLanguage, t } = useWebsite();
 const [scrollProgress, setScrollProgress] = useState(0);
 const [productsMegaOpen, setProductsMegaOpen] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [currentHash, setCurrentHash] = useState("#home");

 useEffect(() => {
 const handleScroll = () => {
 // Scroll progress indicator
 const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
 if (totalScroll > 0) {
 setScrollProgress((window.scrollY / totalScroll) * 100);
 }
 };

 const handleHashChange = () => {
 setCurrentHash(window.location.hash || "#home");
 };

 window.addEventListener("scroll", handleScroll);
 window.addEventListener("hashchange", handleHashChange);
 handleHashChange();

 return () => {
 window.removeEventListener("scroll", handleScroll);
 window.removeEventListener("hashchange", handleHashChange);
 };
 }, []);

 const toggleLanguage = () => {
 setLanguage(language === "EN" ? "AM" : "EN");
 };

 // Mega menu entries representing the paint product categories
 const productCategories = [
 {
 title: "Decorative Paints",
 desc: "Acrylic emulsions and WeatherGuard silicone coatings.",
 icon: Palette,
 color: "text-green-600"
 },
 {
 title: "Industrial Paints",
 desc: "Fast-drying, heavy-duty thermoplastic road marking paints.",
 icon: PaintRoller,
 color: "text-teal-600"
 },
 {
 title: "Protective Coatings",
 desc: "Zinc-rich anti-corrosive epoxies for steel structures.",
 icon: ShieldCheck,
 color: "text-cyan-600"
 },
 {
 title: "Wood Finishes",
 desc: "Premium varnish stain for ultimate grain highlighting.",
 icon: Trees,
 color: "text-amber-700"
 },
 {
 title: "Primers",
 desc: "Penetrating oil-based alkyd wall primers and sealers.",
 icon: Grid,
 color: "text-slate-600"
 },
 {
 title: "Specialty Coatings",
 desc: "Silver-ion antimicrobial hygienic coats for clinical use.",
 icon: Sparkles,
 color: "text-purple-600"
 }
 ];

 const handleCategoryClick = () => {
 setProductsMegaOpen(false);
 window.location.hash = "#products";
 };

 return (
 <nav
 id="main-navbar"
 className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-nav shadow-sm py-3"
 >
 {/* Scroll Progress Indicator Bar */}
 <div
 id="scroll-progress-bar"
 className="absolute top-0 left-0 h-[3px] bg-brand-darkgreen transition-all duration-100 ease-out z-50"
 style={{ width: `${scrollProgress}%` }}
 />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between">
 
 {/* Logo Section */}
 <a href="#home" className="flex items-center space-x-3">
 <Logo size={40} showText={true} />
 </a>

 {/* Desktop Navigation Menu Links */}
 <div className="hidden lg:flex items-center space-x-6">
 
 {/* Home Link */}
 <a
 href="#home"
 className={`font-display font-extrabold text-[12.5px] uppercase tracking-[0.5px] transition-colors duration-200 py-2 ${
 currentHash === "#home" 
 ? "text-brand-darkgreen" : "text-brand-charcoal hover:text-brand-darkgreen"
 }`}
 >
 {t("home")}
 </a>

 {/* About Us Link */}
 <a
 href="#about"
 className={`font-display font-extrabold text-[12.5px] uppercase tracking-[0.5px] transition-colors duration-200 py-2 ${
 currentHash === "#about" 
 ? "text-brand-darkgreen" : "text-brand-charcoal hover:text-brand-darkgreen"
 }`}
 >
 {t("about")}
 </a>

 {/* Our Businesses Link */}
 <a
 href="#businesses"
 className={`font-display font-extrabold text-[12.5px] uppercase tracking-[0.5px] transition-colors duration-200 py-2 ${
 currentHash === "#businesses" 
 ? "text-brand-darkgreen" : "text-brand-charcoal hover:text-brand-darkgreen"
 }`}
 >
 {t("businesses")}
 </a>

 {/* Interactive Products MEGA MENU */}
 <div
 className="relative"
 onMouseEnter={() => setProductsMegaOpen(true)}
 onMouseLeave={() => setProductsMegaOpen(false)}
 >
 <button 
 onClick={() => { window.location.hash = "#products"; }}
 className={`flex items-center gap-1 font-display font-extrabold text-[12.5px] uppercase tracking-[0.5px] transition-colors duration-200 py-2 cursor-pointer ${
 currentHash === "#products" 
 ? "text-brand-darkgreen" : "text-brand-charcoal hover:text-brand-darkgreen"
 }`}
 >
 <span>{t("products")}</span>
 <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${productsMegaOpen ? "rotate-180" : ""}`} />
 </button>

 <AnimatePresence>
 {productsMegaOpen && (
 <motion.div
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: 15 }}
 transition={{ duration: 0.2 }}
 className="absolute left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 grid grid-cols-2 gap-4 z-50"
 >
 <div className="col-span-2 pb-2 mb-2 border-b border-gray-100 flex justify-between items-center">
 <span className="text-[10px] uppercase tracking-[2px] font-mono text-brand-darkgreen font-bold">
 {t("productCatalogue")}
 </span>
 <span className="text-[10px] text-gray-400 flex items-center gap-1 font-mono">
 <Globe className="w-3.5 h-3.5" /> ISO 9001:2015 Cert
 </span>
 </div>

 {productCategories.map((cat) => {
 const Icon = cat.icon;
 return (
 <div
 key={cat.title}
 onClick={handleCategoryClick}
 className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
 >
 <div className={`p-2.5 rounded-lg bg-gray-100 transition-colors duration-200 group-hover:bg-white shadow-inner ${cat.color}`}>
 <Icon className="w-5 h-5" />
 </div>
 <div>
 <h4 className="font-display font-extrabold text-xs sm:text-sm text-gray-900 group-hover:text-brand-darkgreen transition-colors">
 {cat.title}
 </h4>
 <p className="text-[11px] text-gray-500 mt-0.5 leading-snug line-clamp-2">
 {cat.desc}
 </p>
 </div>
 </div>
 );
 })}

 <div className="col-span-2 mt-2 p-3 bg-brand-bg rounded-xl flex items-center justify-between text-xs font-medium text-gray-500">
 <span className="flex items-center gap-1.5 font-mono">
 <Shield className="w-4 h-4 text-brand-darkgreen" /> Nearly 60 Years of Market Trust
 </span>
 <button onClick={handleCategoryClick} className="text-brand-darkgreen font-bold hover:underline cursor-pointer">
 All Products &rarr;
 </button>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* Shops Link */}
 <a
 href="#shops"
 className={`font-display font-extrabold text-[12.5px] uppercase tracking-[0.5px] transition-colors duration-200 py-2 ${
 currentHash === "#shops" 
 ? "text-brand-darkgreen" : "text-brand-charcoal hover:text-brand-darkgreen"
 }`}
 >
 {t("shops")}
 </a>

 {/* Logistics Link */}
 <a
 href="#logistics"
 className={`font-display font-extrabold text-[12.5px] uppercase tracking-[0.5px] transition-colors duration-200 py-2 ${
 currentHash === "#logistics" 
 ? "text-brand-darkgreen" : "text-brand-charcoal hover:text-brand-darkgreen"
 }`}
 >
 {t("logistics")}
 </a>

 {/* Contact Us Link */}
 <a
 href="#contact"
 className={`font-display font-extrabold text-[12.5px] uppercase tracking-[0.5px] transition-colors duration-200 py-2 ${
 currentHash === "#contact" 
 ? "text-brand-darkgreen" : "text-brand-charcoal hover:text-brand-darkgreen"
 }`}
 >
 {t("contact")}
 </a>

 </div>

 {/* Right Action Center (Dark mode, language picker, phone action) */}
 <div className="hidden lg:flex items-center space-x-3">
 
 {/* Language Selection Switcher */}
 <button
 onClick={toggleLanguage}
 className="px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-brand-green text-xs font-mono font-black tracking-widest transition-all duration-200 cursor-pointer flex items-center gap-1 border border-transparent hover:border-brand-darkgreen/20"
 title="Toggle Language EN / AM"
 >
 <Globe className="w-3.5 h-3.5" />
 <span>{language}</span>
 </button>

 {/* Premium Contact Button */}
 <a
 href="#contact"
 className="sleek-btn-primary rounded-lg py-2 px-4 font-bold text-xs flex items-center gap-1.5 shadow-sm"
 >
 <Phone className="w-3.5 h-3.5" />
 <span>{t("getInTouch")}</span>
 </a>
 </div>

 {/* Mobile Drawer trigger */}
 <div className="flex lg:hidden items-center space-x-2">
 <button
 onClick={toggleLanguage}
 className="px-2 py-1 bg-gray-100 text-brand-green text-xs font-mono font-bold rounded cursor-pointer"
 >
 {language}
 </button>

 <button
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="p-2 rounded-lg bg-gray-100 text-brand-charcoal cursor-pointer"
 aria-label="Toggle Menu"
 >
 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </div>

 </div>
 </div>

 {/* Mobile Menu Drawer */}
 <AnimatePresence>
 {mobileMenuOpen && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: "auto" }}
 exit={{ opacity: 0, height: 0 }}
 className="lg:hidden w-full bg-white border-t border-gray-150 px-4 py-6 shadow-2xl max-h-[85vh] overflow-y-auto"
 >
 <div className="flex flex-col space-y-4">
 <span className="text-[10px] uppercase font-mono tracking-widest text-brand-darkgreen font-bold px-3">
 Main Corporate Sections
 </span>

 {/* Home */}
 <a
 href="#home"
 onClick={() => setMobileMenuOpen(false)}
 className={`font-semibold text-sm px-3 py-2 rounded-lg transition-all ${
 currentHash === "#home" ? "bg-brand-darkgreen/10 text-brand-darkgreen" : "text-brand-charcoal hover:bg-gray-50"
 }`}
 >
 {t("home")}
 </a>

 {/* About Us */}
 <a
 href="#about"
 onClick={() => setMobileMenuOpen(false)}
 className={`font-semibold text-sm px-3 py-2 rounded-lg transition-all ${
 currentHash === "#about" ? "bg-brand-darkgreen/10 text-brand-darkgreen" : "text-brand-charcoal hover:bg-gray-50"
 }`}
 >
 {t("about")}
 </a>

 {/* Our Businesses */}
 <a
 href="#businesses"
 onClick={() => setMobileMenuOpen(false)}
 className={`font-semibold text-sm px-3 py-2 rounded-lg transition-all ${
 currentHash === "#businesses" ? "bg-brand-darkgreen/10 text-brand-darkgreen" : "text-brand-charcoal hover:bg-gray-50"
 }`}
 >
 {t("businesses")}
 </a>

 {/* Products */}
 <a
 href="#products"
 onClick={() => setMobileMenuOpen(false)}
 className={`font-semibold text-sm px-3 py-2 rounded-lg transition-all ${
 currentHash === "#products" ? "bg-brand-darkgreen/10 text-brand-darkgreen" : "text-brand-charcoal hover:bg-gray-50"
 }`}
 >
 {t("products")}
 </a>

 {/* Shops */}
 <a
 href="#shops"
 onClick={() => setMobileMenuOpen(false)}
 className={`font-semibold text-sm px-3 py-2 rounded-lg transition-all ${
 currentHash === "#shops" ? "bg-brand-darkgreen/10 text-brand-darkgreen" : "text-brand-charcoal hover:bg-gray-50"
 }`}
 >
 {t("shops")}
 </a>

 {/* Logistics */}
 <a
 href="#logistics"
 onClick={() => setMobileMenuOpen(false)}
 className={`font-semibold text-sm px-3 py-2 rounded-lg transition-all ${
 currentHash === "#logistics" ? "bg-brand-darkgreen/10 text-brand-darkgreen" : "text-brand-charcoal hover:bg-gray-50"
 }`}
 >
 {t("logistics")}
 </a>

 {/* Contact */}
 <a
 href="#contact"
 onClick={() => setMobileMenuOpen(false)}
 className={`font-semibold text-sm px-3 py-2 rounded-lg transition-all ${
 currentHash === "#contact" ? "bg-brand-darkgreen/10 text-brand-darkgreen" : "text-brand-charcoal hover:bg-gray-50"
 }`}
 >
 {t("contact")}
 </a>

 <div className="pt-4 border-t border-gray-150 px-3">
 <a
 href="#contact"
 onClick={() => setMobileMenuOpen(false)}
 className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-brand-darkgreen text-white font-bold text-sm shadow-md"
 >
 <Phone className="w-4 h-4" />
 <span>{t("getInTouch")}</span>
 </a>
 </div>

 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </nav>
 );
}
