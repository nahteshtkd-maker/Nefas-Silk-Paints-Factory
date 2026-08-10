import { useState, useEffect } from "react";
import { ArrowUp, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useWebsite } from "./context/WebsiteContext";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Businesses from "./components/Businesses";
import GroupCompanies from "./components/GroupCompanies";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Shops from "./components/Shops";
import Logistics from "./components/Logistics";
import WhyChooseUs from "./components/WhyChooseUs";
import Timeline from "./components/Timeline";
import Manufacturing from "./components/Manufacturing";
import Sustainability from "./components/Sustainability";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
 const { seoSettings } = useWebsite();
 const [loading, setLoading] = useState(true);
 const [showBackToTop, setShowBackToTop] = useState(false);
 const [currentHash, setCurrentHash] = useState("home");

 // Synchronize Tab Document Title & Metadata
 useEffect(() => {
 if (seoSettings) {
 document.title = seoSettings.title;
 // Update meta description
 const metaDesc = document.querySelector('meta[name="description"]');
 if (metaDesc) {
 metaDesc.setAttribute("content", seoSettings.description);
 }
 }
 }, [seoSettings]);

 // Theme is permanently light/bright — no light/dark toggle
 useEffect(() => {
 window.document.documentElement.classList.remove("dark");
 }, []);

 // Handle Loading Simulation & Hash Routing Sync
 useEffect(() => {
 const loadTimer = setTimeout(() => {
 setLoading(false);
 }, 1200);

 const handleScroll = () => {
 setShowBackToTop(window.scrollY > 450);
 };

 const handleHashChange = () => {
 const hash = window.location.hash.replace("#", "");
 if (hash && ["home", "about", "businesses", "products", "shops", "logistics", "contact"].includes(hash)) {
 setCurrentHash(hash);
 } else {
 setCurrentHash("home");
 }
 window.scrollTo({ top: 0, behavior: "instant" as any });
 };

 window.addEventListener("scroll", handleScroll);
 window.addEventListener("hashchange", handleHashChange);
 
 // Trigger initial route match
 handleHashChange();

 return () => {
 clearTimeout(loadTimer);
 window.removeEventListener("scroll", handleScroll);
 window.removeEventListener("hashchange", handleHashChange);
 };
 }, []);

 const scrollToTop = () => {
 window.scrollTo({ top: 0, behavior: "smooth" });
 };

 // Render correct page view according to hash state
 const renderView = () => {
 switch (currentHash) {
 case "about":
 return <AboutUs />;
 case "businesses":
 return (
 <div className="pt-24 space-y-12">
 <Businesses />
 <GroupCompanies />
 <Manufacturing />
 <Sustainability />
 </div>
 );
 case "products":
 return <Products />;
 case "shops":
 return <Shops />;
 case "logistics":
 return <Logistics />;
 case "contact":
 return (
 <div className="pt-24 pb-12">
 <Contact />
 </div>
 );
 case "home":
 default:
 return (
 <>
 <Hero />
 <Businesses />
 <WhyChooseUs />
 <Stats />
 <Testimonials />
 <Contact />
 </>
 );
 }
 };

 return (
 <div className="min-h-screen bg-brand-bg text-brand-charcoal transition-colors duration-300 antialiased font-sans">
 
 {/* 1. Global Page Loader */}
 <AnimatePresence>
 {loading && (
 <motion.div
 id="page-loader"
 exit={{ opacity: 0, y: -20 }}
 transition={{ duration: 0.5, ease: "easeInOut" }}
 className="fixed inset-0 bg-brand-green flex flex-col items-center justify-center z-[100] text-white"
 >
 <div className="relative flex items-center justify-center mb-6">
 <motion.div
 animate={{ rotate: 360 }}
 transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
 className="w-16 h-16 rounded-full border-2 border-white/10 border-t-brand-darkgreen absolute"
 />
 <Logo size={42} showText={false} />
 </div>

 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.15 }}
 className="text-center space-y-1.5"
 >
 <h1 className="font-display font-extrabold text-base sm:text-lg tracking-tight uppercase">
 Nefas Silk Paints Factory PLC
 </h1>
 <p className="text-[9px] sm:text-xs uppercase tracking-widest text-brand-darkgreen font-mono font-bold">
 Pioneering Quality & Industry • Since 1967
 </p>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>

 {/* 2. Main Site Structure */}
 {!loading && (
 <div id="app-main-content">
 
 {/* Sticky Header Navigation */}
 <Navbar />

 {/* Render Active View Segment with animated transitions */}
 <main className="min-h-[80vh]">
 <AnimatePresence mode="wait">
 <motion.div
 key={currentHash}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.35, ease: "easeInOut" }}
 >
 {renderView()}
 </motion.div>
 </AnimatePresence>
 </main>

 {/* Footer Navigation bar */}
 <Footer />

 {/* 3. Back to Top Button */}
 <AnimatePresence>
 {showBackToTop && (
 <motion.button
 id="back-to-top"
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.8 }}
 onClick={scrollToTop}
 className="fixed bottom-6 right-6 p-3 rounded-xl bg-brand-green text-white hover:bg-brand-darkgreen shadow-xl border border-white/10 z-40 cursor-pointer transition-transform hover:scale-105"
 aria-label="Scroll back to top"
 >
 <ArrowUp className="w-5 h-5" />
 </motion.button>
 )}
 </AnimatePresence>

 </div>
 )}

 </div>
 );
}
