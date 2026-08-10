import React, { useState, FormEvent } from "react";
import { useWebsite, HeroSlide, Shop, Product, TeamMember, GroupCompany } from "../context/WebsiteContext";
import { 
 Lock, LayoutDashboard, Sliders, ShoppingBag, MapPin, 
 Settings, Save, RefreshCw, Plus, Trash2, Eye, User, 
 FileText, Briefcase, Award, Phone, Globe, Image as ImageIcon,
 CheckCircle, LogOut, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AdminDashboard() {
 const {
 heroSlides, setHeroSlides,
 businesses, setBusinesses,
 timeline, setTimeline,
 testimonials, setTestimonials,
 news, setNews,
 careers, setCareers,
 products, setProducts,
 shops, setShops,
 teamMembers, setTeamMembers,
 groupCompanies, setGroupCompanies,
 ceoMessage, setCeoMessage,
 vision, setVision,
 contactInfo, setContactInfo,
 seoSettings, setSeoSettings,
 resetToDefault
 } = useWebsite();

 // Authentication state
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [loginError, setLoginError] = useState("");

 // Tabs state
 const [activeTab, setActiveTab] = useState<"general" | "hero" | "products" | "shops" | "team" | "news_careers">("general");

 // Success indicator state
 const [showSuccess, setShowSuccess] = useState(false);

 // Forms states
 const [ceoForm, setCeoForm] = useState(ceoMessage);
 const [visionForm, setVisionForm] = useState(vision);
 const [contactForm, setContactForm] = useState(contactInfo);
 const [seoForm, setSeoForm] = useState(seoSettings);

 const handleLogin = (e: FormEvent) => {
 e.preventDefault();
 if (username === "admin" && password === "admin123") {
 setIsAuthenticated(true);
 setLoginError("");
 } else {
 setLoginError("Invalid username or password. (Use admin / admin123)");
 }
 };

 const triggerSuccess = () => {
 setShowSuccess(true);
 setTimeout(() => setShowSuccess(false), 3000);
 };

 const handleSaveGeneral = () => {
 setCeoMessage(ceoForm);
 setVision(visionForm);
 setContactInfo(contactForm);
 setSeoSettings(seoForm);
 triggerSuccess();
 };

 // HERO SLIDES ACTIONS
 const handleAddHero = () => {
 const newSlide: HeroSlide = {
 id: "slide_" + Date.now(),
 title: "New High-Quality Slide",
 desc: "Describe paint manufacturing, coffee processes, or logistics here.",
 image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200"
 };
 setHeroSlides([...heroSlides, newSlide]);
 triggerSuccess();
 };

 const handleUpdateHero = (index: number, field: keyof HeroSlide, value: string) => {
 const updated = [...heroSlides];
 updated[index] = { ...updated[index], [field]: value };
 setHeroSlides(updated);
 };

 const handleDeleteHero = (index: number) => {
 if (confirm("Are you sure you want to delete this hero slide?")) {
 const updated = heroSlides.filter((_, i) => i !== index);
 setHeroSlides(updated);
 triggerSuccess();
 }
 };

 // PRODUCTS ACTIONS
 const handleAddProduct = () => {
 const newProd: Product = {
 id: "prod_" + Date.now(),
 name: "Nefas Silk New Coatings Standard",
 category: "Decorative Paints",
 description: "Enter detailed product descriptions here...",
 coverage: "10-12 m² per Liter",
 dryingTime: "2-3 Hours",
 finish: "Eggshell Satin Sheen",
 image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
 applications: ["Interior Masonry", "Drywalls"],
 colors: [{ name: "Standard White", hex: "#FFFFFF" }]
 };
 setProducts([...products, newProd]);
 triggerSuccess();
 };

 const handleUpdateProduct = (id: string, field: keyof Product, value: any) => {
 const updated = products.map(p => {
 if (p.id === id) {
 return { ...p, [field]: value };
 }
 return p;
 });
 setProducts(updated);
 };

 const handleDeleteProduct = (id: string) => {
 if (confirm("Are you sure you want to delete this product?")) {
 setProducts(products.filter(p => p.id !== id));
 triggerSuccess();
 }
 };

 // SHOPS ACTIONS
 const handleAddShop = () => {
 const newShop: Shop = {
 id: "shop_" + Date.now(),
 name: "New Showroom Outlet",
 city: "Addis Ababa",
 address: "Main Trading Avenue, near Center Plaza",
 phone: "+251 11 442 7701",
 hours: "Mon - Sat: 8:00 AM - 6:00 PM",
 image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400",
 lat: 9.0203,
 lng: 38.8015
 };
 setShops([...shops, newShop]);
 triggerSuccess();
 };

 const handleUpdateShop = (id: string, field: keyof Shop, value: any) => {
 const updated = shops.map(s => {
 if (s.id === id) {
 return { ...s, [field]: value };
 }
 return s;
 });
 setShops(updated);
 };

 const handleDeleteShop = (id: string) => {
 if (confirm("Are you sure you want to delete this store location?")) {
 setShops(shops.filter(s => s.id !== id));
 triggerSuccess();
 }
 };

 // TEAM MEMBERS ACTIONS
 const handleAddTeam = () => {
 const newTM: TeamMember = {
 id: "tm_" + Date.now(),
 name: "Executive Name",
 position: "Division Director",
 biography: "Describe career background and credentials here...",
 image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
 linkedin: "https://linkedin.com",
 email: "info@nefassilkpaints.com"
 };
 setTeamMembers([...teamMembers, newTM]);
 triggerSuccess();
 };

 const handleUpdateTeam = (id: string, field: keyof TeamMember, value: string) => {
 const updated = teamMembers.map(t => {
 if (t.id === id) {
 return { ...t, [field]: value };
 }
 return t;
 });
 setTeamMembers(updated);
 };

 const handleDeleteTeam = (id: string) => {
 if (confirm("Are you sure you want to delete this executive profile?")) {
 setTeamMembers(teamMembers.filter(t => t.id !== id));
 triggerSuccess();
 }
 };

 // NEWS & CAREERS ACTIONS
 const handleAddNews = () => {
 const newArt = {
 id: "news_" + Date.now(),
 title: "New Corporate Press Release",
 category: "Innovation",
 date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
 image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400",
 summary: "Summarize corporate achievements, chemical formulation standards, or trade expansion logs..."
 };
 setNews([...news, newArt]);
 triggerSuccess();
 };

 const handleUpdateNews = (id: string, field: any, value: string) => {
 const updated = news.map(n => n.id === id ? { ...n, [field]: value } : n);
 setNews(updated);
 };

 const handleDeleteNews = (id: string) => {
 if (confirm("Delete this news article?")) {
 setNews(news.filter(n => n.id !== id));
 triggerSuccess();
 }
 };

 const handleAddJob = () => {
 const newJob = {
 id: "job_" + Date.now(),
 title: "New Position Listing",
 department: "Paint Manufacturing Division",
 location: "Addis Ababa, HQ",
 type: "Full-Time",
 experience: "2+ Years"
 };
 setCareers([...careers, newJob]);
 triggerSuccess();
 };

 const handleUpdateJob = (id: string, field: any, value: string) => {
 const updated = careers.map(c => c.id === id ? { ...c, [field]: value } : c);
 setCareers(updated);
 };

 const handleDeleteJob = (id: string) => {
 if (confirm("Delete this job listing?")) {
 setCareers(careers.filter(c => c.id !== id));
 triggerSuccess();
 }
 };

 // 1. Unauthenticated Login Gate
 if (!isAuthenticated) {
 return (
 <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4 pt-24 pb-12">
 <div className="max-w-md w-full bg-white rounded-3xl p-5 border border-gray-150 shadow-2xl space-y-4">
 <div className="text-center space-y-2">
 <div className="w-16 h-16 bg-brand-darkgreen/15 rounded-2xl flex items-center justify-center mx-auto text-brand-darkgreen">
 <Lock className="w-8 h-8" />
 </div>
 <h1 className="font-display font-black text-xl text-brand-green">
 CMS Admin Access
 </h1>
 <p className="text-xs text-gray-400 font-mono">
 Nefas Silk Paints Factory PLC • Corporate Console
 </p>
 </div>

 <form onSubmit={handleLogin} className="space-y-4">
 <div className="space-y-1">
 <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
 Username
 </label>
 <input
 type="text"
 required
 value={username}
 onChange={(e) => setUsername(e.target.value)}
 placeholder="Enter username (admin)"
 className="w-full px-4 py-3 text-xs bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:border-brand-darkgreen text-brand-charcoal"
 />
 </div>

 <div className="space-y-1">
 <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
 Password
 </label>
 <input
 type="password"
 required
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 placeholder="Enter password (admin123)"
 className="w-full px-4 py-3 text-xs bg-brand-bg border border-gray-200 rounded-xl focus:outline-none focus:border-brand-darkgreen text-brand-charcoal"
 />
 </div>

 {loginError && (
 <p className="text-[11px] font-mono text-red-500 font-semibold bg-red-500/10 p-3 rounded-lg border border-red-500/20">
 {loginError}
 </p>
 )}

 <button
 type="submit"
 className="w-full py-3.5 bg-brand-darkgreen hover:bg-brand-green text-white rounded-xl text-xs uppercase tracking-wider font-extrabold shadow-lg cursor-pointer transition-colors"
 >
 Authenticate & Enter
 </button>
 </form>

 <div className="pt-4 border-t border-gray-100 text-center">
 <p className="text-[10px] text-gray-400 font-mono">
 Note: This is a secure local administrator console. Any changes made are stored immediately.
 </p>
 </div>
 </div>
 </div>
 );
 }

 // 2. Active CMS Admin Workspace Dashboard View
 return (
 <div className="pt-14 pb-12 bg-brand-bg min-h-screen transition-colors duration-300">
 
 {/* CMS Workspace Header */}
 <div className="bg-brand-green py-5 text-white border-b border-white/5 relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-5 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
 <div className="space-y-1 text-center md:text-left">
 <div className="inline-flex items-center gap-1.5 bg-brand-darkgreen/20 text-brand-darkgreen border border-brand-darkgreen/30 px-2 py-0.5 rounded-full text-[9px] uppercase font-mono font-bold">
 <LayoutDashboard className="w-3 h-3 animate-pulse" /> System Active
 </div>
 <h1 className="font-display text-lg sm:text-xl font-extrabold tracking-tight">
 Corporate Content Manager (CMS)
 </h1>
 <p className="text-[11px] text-gray-300 font-sans">
 Modify sliders, products, branches, executives, or corporate text on-the-fly. No coding required.
 </p>
 </div>

 <div className="flex gap-2 shrink-0">
 <button
 onClick={resetToDefault}
 className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
 >
 <RefreshCw className="w-3 h-3" /> Restore Defaults
 </button>
 <button
 onClick={() => setIsAuthenticated(false)}
 className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
 >
 <LogOut className="w-3 h-3" /> Logout
 </button>
 </div>
 </div>
 </div>

 <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-5 mt-6 grid lg:grid-cols-12 gap-4 items-start">
 
 {/* Navigation Sidebar Tabs */}
 <div className="lg:col-span-3 space-y-3">
 <div className="bg-white rounded-xl p-3 border border-gray-150 shadow-sm">
 <span className="text-[9px] uppercase font-mono tracking-widest text-brand-darkgreen font-bold px-1.5 block mb-2">
 CMS Content Sections
 </span>
 <div className="flex flex-col gap-1">
 <button
 onClick={() => setActiveTab("general")}
 className={`w-full text-left px-2.5 py-1.5 rounded-md text-[11px] uppercase tracking-wide font-bold flex items-center gap-2 transition-all ${
 activeTab === "general"
 ? "bg-brand-green text-white"
 : "text-brand-charcoal hover:bg-brand-bg"
 }`}
 >
 <Settings className="w-3.5 h-3.5" /> General & CEO
 </button>

 <button
 onClick={() => setActiveTab("hero")}
 className={`w-full text-left px-2.5 py-1.5 rounded-md text-[11px] uppercase tracking-wide font-bold flex items-center gap-2 transition-all ${
 activeTab === "hero"
 ? "bg-brand-green text-white"
 : "text-brand-charcoal hover:bg-brand-bg"
 }`}
 >
 <Sliders className="w-3.5 h-3.5" /> Hero Slider
 </button>

 <button
 onClick={() => setActiveTab("products")}
 className={`w-full text-left px-2.5 py-1.5 rounded-md text-[11px] uppercase tracking-wide font-bold flex items-center gap-2 transition-all ${
 activeTab === "products"
 ? "bg-brand-green text-white"
 : "text-brand-charcoal hover:bg-brand-bg"
 }`}
 >
 <ShoppingBag className="w-3.5 h-3.5" /> Products
 </button>

 <button
 onClick={() => setActiveTab("shops")}
 className={`w-full text-left px-2.5 py-1.5 rounded-md text-[11px] uppercase tracking-wide font-bold flex items-center gap-2 transition-all ${
 activeTab === "shops"
 ? "bg-brand-green text-white"
 : "text-brand-charcoal hover:bg-brand-bg"
 }`}
 >
 <MapPin className="w-3.5 h-3.5" /> Shops & Contacts
 </button>

 <button
 onClick={() => setActiveTab("team")}
 className={`w-full text-left px-2.5 py-1.5 rounded-md text-[11px] uppercase tracking-wide font-bold flex items-center gap-2 transition-all ${
 activeTab === "team"
 ? "bg-brand-green text-white"
 : "text-brand-charcoal hover:bg-brand-bg"
 }`}
 >
 <User className="w-3.5 h-3.5" /> Executive Team
 </button>

 <button
 onClick={() => setActiveTab("news_careers")}
 className={`w-full text-left px-2.5 py-1.5 rounded-md text-[11px] uppercase tracking-wide font-bold flex items-center gap-2 transition-all ${
 activeTab === "news_careers"
 ? "bg-brand-green text-white"
 : "text-brand-charcoal hover:bg-brand-bg"
 }`}
 >
 <Briefcase className="w-3.5 h-3.5" /> News & Careers
 </button>
 </div>
 </div>

 {/* Success Banner Alert Box inside sidebar */}
 <AnimatePresence>
 {showSuccess && (
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 className="bg-green-500/10 text-green-600 border border-green-500/20 rounded-xl p-3 flex items-center gap-1.5 font-mono text-[10px] font-bold"
 >
 <CheckCircle className="w-4 h-4 shrink-0" />
 <span>Changes compiled and synced to live views!</span>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {/* CMS WORKSPACE WORK AREA COLUMN */}
 <div className="lg:col-span-9 bg-white rounded-xl p-4.5 border border-gray-150 shadow-sm space-y-5">
 
 {/* TAB 1: GENERAL & CEO */}
 {activeTab === "general" && (
 <div className="space-y-4">
 <div className="pb-3 border-b border-gray-100 flex justify-between items-center">
 <h3 className="font-display font-black text-base text-brand-green">
 CEO Message, Vision & Core Statements
 </h3>
 <button
 onClick={handleSaveGeneral}
 className="px-4 py-2 bg-brand-darkgreen hover:bg-brand-green text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
 >
 <Save className="w-4 h-4" /> Save Content Changes
 </button>
 </div>

 {/* CEO form fields */}
 <div className="space-y-4">
 <span className="text-[10px] font-mono uppercase tracking-widest text-brand-darkgreen font-bold block">
 CEO Information Details
 </span>
 <div className="grid sm:grid-cols-2 gap-4">
 <div className="space-y-1">
 <label className="text-[10px] font-mono text-gray-400 font-bold block">CEO Full Name</label>
 <input
 type="text"
 value={ceoForm.name}
 onChange={(e) => setCeoForm({ ...ceoForm, name: e.target.value })}
 className="w-full px-3 py-2 text-xs sm:text-xs bg-brand-bg border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[10px] font-mono text-gray-400 font-bold block">CEO Position Title</label>
 <input
 type="text"
 value={ceoForm.role}
 onChange={(e) => setCeoForm({ ...ceoForm, role: e.target.value })}
 className="w-full px-3 py-2 text-xs sm:text-xs bg-brand-bg border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 <div className="space-y-1">
 <label className="text-[10px] font-mono text-gray-400 font-bold block">CEO Message Body</label>
 <textarea
 rows={5}
 value={ceoForm.message}
 onChange={(e) => setCeoForm({ ...ceoForm, message: e.target.value })}
 className="w-full px-3 py-2 text-xs sm:text-xs bg-brand-bg border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>

 <div className="space-y-1">
 <label className="text-[10px] font-mono text-gray-400 font-bold block">CEO Portrait Image Link</label>
 <input
 type="text"
 value={ceoForm.image}
 onChange={(e) => setCeoForm({ ...ceoForm, image: e.target.value })}
 className="w-full px-3 py-2 text-xs sm:text-xs bg-brand-bg border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 {/* Vision & Mission form */}
 <div className="space-y-4 pt-4 border-t border-gray-100">
 <span className="text-[10px] font-mono uppercase tracking-widest text-brand-darkgreen font-bold block">
 Vision & Missions Statements
 </span>

 <div className="space-y-1">
 <label className="text-[10px] font-mono text-gray-400 font-bold block">Corporate Vision Paragraph</label>
 <textarea
 rows={3}
 value={visionForm.visionText}
 onChange={(e) => setVisionForm({ ...visionForm, visionText: e.target.value })}
 className="w-full px-3 py-2 text-xs sm:text-xs bg-brand-bg border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>

 <div className="grid sm:grid-cols-3 gap-4">
 <div className="space-y-1.5 p-3.5 bg-brand-bg rounded-xl">
 <label className="text-[10px] font-mono text-brand-darkgreen font-bold block">Mission 1 Title</label>
 <input
 type="text"
 value={visionForm.mission1}
 onChange={(e) => setVisionForm({ ...visionForm, mission1: e.target.value })}
 className="w-full px-2 py-1.5 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Description</label>
 <textarea
 rows={2}
 value={visionForm.mission1Desc}
 onChange={(e) => setVisionForm({ ...visionForm, mission1Desc: e.target.value })}
 className="w-full px-2 py-1.5 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 </div>

 <div className="space-y-1.5 p-3.5 bg-brand-bg rounded-xl">
 <label className="text-[10px] font-mono text-brand-darkgreen font-bold block">Mission 2 Title</label>
 <input
 type="text"
 value={visionForm.mission2}
 onChange={(e) => setVisionForm({ ...visionForm, mission2: e.target.value })}
 className="w-full px-2 py-1.5 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Description</label>
 <textarea
 rows={2}
 value={visionForm.mission2Desc}
 onChange={(e) => setVisionForm({ ...visionForm, mission2Desc: e.target.value })}
 className="w-full px-2 py-1.5 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 </div>

 <div className="space-y-1.5 p-3.5 bg-brand-bg rounded-xl">
 <label className="text-[10px] font-mono text-brand-darkgreen font-bold block">Mission 3 Title</label>
 <input
 type="text"
 value={visionForm.mission3}
 onChange={(e) => setVisionForm({ ...visionForm, mission3: e.target.value })}
 className="w-full px-2 py-1.5 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Description</label>
 <textarea
 rows={2}
 value={visionForm.mission3Desc}
 onChange={(e) => setVisionForm({ ...visionForm, mission3Desc: e.target.value })}
 className="w-full px-2 py-1.5 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 </div>
 </div>
 </div>

 {/* SEO and Global settings */}
 <div className="space-y-4 pt-4 border-t border-gray-100">
 <span className="text-[10px] font-mono uppercase tracking-widest text-brand-darkgreen font-bold block">
 Search Engine Optimization (SEO) Metadata
 </span>
 <div className="grid sm:grid-cols-2 gap-4">
 <div className="space-y-1">
 <label className="text-[10px] font-mono text-gray-400 font-bold block">Meta Title</label>
 <input
 type="text"
 value={seoForm.title}
 onChange={(e) => setSeoForm({ ...seoForm, title: e.target.value })}
 className="w-full px-3 py-2 text-xs bg-brand-bg border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[10px] font-mono text-gray-400 font-bold block">Meta Description</label>
 <input
 type="text"
 value={seoForm.description}
 onChange={(e) => setSeoForm({ ...seoForm, description: e.target.value })}
 className="w-full px-3 py-2 text-xs bg-brand-bg border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="col-span-2 space-y-1">
 <label className="text-[10px] font-mono text-gray-400 font-bold block">Keywords Tags (Comma Separated)</label>
 <input
 type="text"
 value={seoForm.keywords}
 onChange={(e) => setSeoForm({ ...seoForm, keywords: e.target.value })}
 className="w-full px-3 py-2 text-xs bg-brand-bg border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>
 </div>

 <div className="flex justify-end pt-4">
 <button
 onClick={handleSaveGeneral}
 className="px-4 py-3 bg-brand-darkgreen hover:bg-brand-green text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow"
 >
 <Save className="w-4 h-4" /> Save Content Changes
 </button>
 </div>
 </div>
 )}

 {/* TAB 2: HERO SLIDER */}
 {activeTab === "hero" && (
 <div className="space-y-4">
 <div className="pb-3 border-b border-gray-100 flex justify-between items-center">
 <div>
 <h3 className="font-display font-black text-base text-brand-green">
 Homepage Hero Slideshow
 </h3>
 <p className="text-xs text-gray-400 font-sans">
 Define cinema slider titles and premium backgrounds representing divisions.
 </p>
 </div>
 <button
 onClick={handleAddHero}
 className="px-4 py-2 bg-brand-green text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
 >
 <Plus className="w-4 h-4" /> Add Slide
 </button>
 </div>

 <div className="space-y-4">
 {heroSlides.map((slide, sIdx) => (
 <div 
 key={slide.id} 
 className="p-5 rounded-2xl bg-brand-bg border border-gray-150 relative flex flex-col md:flex-row gap-4 items-start"
 >
 <img
 src={slide.image}
 alt={slide.title}
 className="w-32 h-20 object-cover rounded-lg shrink-0 border border-gray-200"
 />

 <div className="flex-grow space-y-3 w-full">
 <div className="grid sm:grid-cols-2 gap-4">
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Slide Title</label>
 <input
 type="text"
 value={slide.title}
 onChange={(e) => handleUpdateHero(sIdx, "title", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Background Image URL</label>
 <input
 type="text"
 value={slide.image}
 onChange={(e) => handleUpdateHero(sIdx, "image", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Description Summary</label>
 <input
 type="text"
 value={slide.desc}
 onChange={(e) => handleUpdateHero(sIdx, "desc", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 <button
 onClick={() => handleDeleteHero(sIdx)}
 className="absolute top-4 right-4 p-2 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded-lg transition-colors cursor-pointer"
 title="Delete Slide"
 >
 <Trash2 className="w-4 h-4" />
 </button>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* TAB 3: PRODUCTS */}
 {activeTab === "products" && (
 <div className="space-y-4">
 <div className="pb-3 border-b border-gray-100 flex justify-between items-center">
 <div>
 <h3 className="font-display font-black text-base text-brand-green">
 Corporate Coatings Catalogue
 </h3>
 <p className="text-xs text-gray-400 font-sans">
 Add, edit, or delete industrial, decorative, and specialized chemical grades.
 </p>
 </div>
 <button
 onClick={handleAddProduct}
 className="px-4 py-2 bg-brand-green text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
 >
 <Plus className="w-4 h-4" /> Add Product
 </button>
 </div>

 <div className="space-y-4">
 {products.map((prod) => (
 <div 
 key={prod.id} 
 className="p-5 rounded-2xl bg-brand-bg border border-gray-150 relative space-y-4"
 >
 <div className="flex flex-col sm:flex-row gap-4 items-start">
 <img
 src={prod.image}
 alt={prod.name}
 className="w-20 h-20 object-cover rounded-lg shrink-0 border border-gray-200"
 />

 <div className="flex-grow space-y-3 w-full">
 <div className="grid sm:grid-cols-3 gap-4">
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Product Name</label>
 <input
 type="text"
 value={prod.name}
 onChange={(e) => handleUpdateProduct(prod.id, "name", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>

 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Category</label>
 <select
 value={prod.category}
 onChange={(e) => handleUpdateProduct(prod.id, "category", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 >
 <option value="Decorative Paints">Decorative Paints</option>
 <option value="Industrial Paints">Industrial Paints</option>
 <option value="Protective Coatings">Protective Coatings</option>
 <option value="Wood Finishes">Wood Finishes</option>
 <option value="Primers">Primers</option>
 <option value="Specialty Coatings">Specialty Coatings</option>
 </select>
 </div>

 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Image Link</label>
 <input
 type="text"
 value={prod.image}
 onChange={(e) => handleUpdateProduct(prod.id, "image", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Description</label>
 <textarea
 rows={2}
 value={prod.description}
 onChange={(e) => handleUpdateProduct(prod.id, "description", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>

 <div className="grid sm:grid-cols-3 gap-4">
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Coverage Span</label>
 <input
 type="text"
 value={prod.coverage}
 onChange={(e) => handleUpdateProduct(prod.id, "coverage", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Drying Time</label>
 <input
 type="text"
 value={prod.dryingTime}
 onChange={(e) => handleUpdateProduct(prod.id, "dryingTime", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Finish Coating</label>
 <input
 type="text"
 value={prod.finish}
 onChange={(e) => handleUpdateProduct(prod.id, "finish", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 </div>
 </div>

 <button
 onClick={() => handleDeleteProduct(prod.id)}
 className="absolute top-1 right-4 p-2 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded-lg transition-colors cursor-pointer"
 title="Delete Product"
 >
 <Trash2 className="w-4 h-4" />
 </button>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* TAB 4: SHOPS & CONTACT */}
 {activeTab === "shops" && (
 <div className="space-y-4">
 <div className="pb-3 border-b border-gray-100 flex justify-between items-center">
 <div>
 <h3 className="font-display font-black text-base text-brand-green">
 Showrooms & Outlets GPS Registry
 </h3>
 <p className="text-xs text-gray-400 font-sans">
 Register branches and manage exact coordinate pins displayed on the interactive vector plotter.
 </p>
 </div>
 <button
 onClick={handleAddShop}
 className="px-4 py-2 bg-brand-green text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
 >
 <Plus className="w-4 h-4" /> Add Shop
 </button>
 </div>

 <div className="space-y-4">
 {shops.map((shop) => (
 <div 
 key={shop.id} 
 className="p-5 rounded-2xl bg-brand-bg border border-gray-150 relative space-y-4"
 >
 <div className="grid sm:grid-cols-3 gap-4">
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Outlet Name</label>
 <input
 type="text"
 value={shop.name}
 onChange={(e) => handleUpdateShop(shop.id, "name", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>

 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">City Location</label>
 <input
 type="text"
 value={shop.city}
 onChange={(e) => handleUpdateShop(shop.id, "city", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>

 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Phone Number</label>
 <input
 type="text"
 value={shop.phone}
 onChange={(e) => handleUpdateShop(shop.id, "phone", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 <div className="grid sm:grid-cols-3 gap-4">
 <div className="space-y-1 col-span-2">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Full Physical Address</label>
 <input
 type="text"
 value={shop.address}
 onChange={(e) => handleUpdateShop(shop.id, "address", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Opening Hours</label>
 <input
 type="text"
 value={shop.hours}
 onChange={(e) => handleUpdateShop(shop.id, "hours", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 <div className="grid sm:grid-cols-3 gap-4">
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Latitude Degree</label>
 <input
 type="number"
 step="0.0001"
 value={shop.lat}
 onChange={(e) => handleUpdateShop(shop.id, "lat", parseFloat(e.target.value) || 0)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Longitude Degree</label>
 <input
 type="number"
 step="0.0001"
 value={shop.lng}
 onChange={(e) => handleUpdateShop(shop.id, "lng", parseFloat(e.target.value) || 0)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Outlet Photo URL</label>
 <input
 type="text"
 value={shop.image}
 onChange={(e) => handleUpdateShop(shop.id, "image", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 <button
 onClick={() => handleDeleteShop(shop.id)}
 className="absolute top-1 right-4 p-2 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded-lg transition-colors cursor-pointer"
 title="Delete Store"
 >
 <Trash2 className="w-4 h-4" />
 </button>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* TAB 5: TEAM MEMBERS */}
 {activeTab === "team" && (
 <div className="space-y-4">
 <div className="pb-3 border-b border-gray-100 flex justify-between items-center">
 <div>
 <h3 className="font-display font-black text-base text-brand-green">
 Executive Leadership Bios
 </h3>
 <p className="text-xs text-gray-400 font-sans">
 Configure names, photos, LinkedIn handles, and biographies of the executive leadership board.
 </p>
 </div>
 <button
 onClick={handleAddTeam}
 className="px-4 py-2 bg-brand-green text-white rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
 >
 <Plus className="w-4 h-4" /> Add Member
 </button>
 </div>

 <div className="space-y-4">
 {teamMembers.map((member) => (
 <div 
 key={member.id} 
 className="p-5 rounded-2xl bg-brand-bg border border-gray-150 relative space-y-4"
 >
 <div className="flex flex-col sm:flex-row gap-4">
 <img
 src={member.image}
 alt={member.name}
 className="w-20 h-24 object-cover rounded-lg shrink-0 border border-gray-200"
 />

 <div className="flex-grow space-y-3 w-full">
 <div className="grid sm:grid-cols-2 gap-4">
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Executive Name</label>
 <input
 type="text"
 value={member.name}
 onChange={(e) => handleUpdateTeam(member.id, "name", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Position Title</label>
 <input
 type="text"
 value={member.position}
 onChange={(e) => handleUpdateTeam(member.id, "position", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 <div className="grid sm:grid-cols-2 gap-4">
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Portrait URL</label>
 <input
 type="text"
 value={member.image}
 onChange={(e) => handleUpdateTeam(member.id, "image", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">LinkedIn Profile</label>
 <input
 type="text"
 value={member.linkedin}
 onChange={(e) => handleUpdateTeam(member.id, "linkedin", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>

 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Biography Overview</label>
 <textarea
 rows={3}
 value={member.biography}
 onChange={(e) => handleUpdateTeam(member.id, "biography", e.target.value)}
 className="w-full px-3 py-1.5 text-xs bg-white border border-gray-150 rounded-lg text-brand-charcoal"
 />
 </div>
 </div>
 </div>

 <button
 onClick={() => handleDeleteTeam(member.id)}
 className="absolute top-1 right-4 p-2 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded-lg transition-colors cursor-pointer"
 title="Delete Executive"
 >
 <Trash2 className="w-4 h-4" />
 </button>
 </div>
 ))}
 </div>
 </div>
 )}

 {/* TAB 6: NEWS & CAREERS */}
 {activeTab === "news_careers" && (
 <div className="space-y-5">
 
 {/* News Segment */}
 <div className="space-y-4">
 <div className="pb-2 border-b border-gray-100 flex justify-between items-center">
 <h3 className="font-display font-black text-sm text-brand-green">
 Press Releases & Corporate News
 </h3>
 <button
 onClick={handleAddNews}
 className="px-3 py-1.5 bg-brand-green text-white rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center gap-1 cursor-pointer"
 >
 <Plus className="w-3.5 h-3.5" /> Add Press
 </button>
 </div>

 <div className="space-y-4">
 {news.map((n) => (
 <div key={n.id} className="p-4 rounded-xl bg-brand-bg border border-gray-150 relative space-y-3">
 <div className="grid sm:grid-cols-2 gap-4">
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Article Title</label>
 <input
 type="text"
 value={n.title}
 onChange={(e) => handleUpdateNews(n.id, "title", e.target.value)}
 className="w-full px-3 py-1 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Category Badge</label>
 <input
 type="text"
 value={n.category}
 onChange={(e) => handleUpdateNews(n.id, "category", e.target.value)}
 className="w-full px-3 py-1 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 </div>
 </div>

 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Summary Paragraph</label>
 <textarea
 rows={2}
 value={n.summary}
 onChange={(e) => handleUpdateNews(n.id, "summary", e.target.value)}
 className="w-full px-3 py-1 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 </div>

 <button
 onClick={() => handleDeleteNews(n.id)}
 className="absolute top-1 right-4 p-1.5 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded"
 title="Delete article"
 >
 <Trash2 className="w-3.5 h-3.5" />
 </button>
 </div>
 ))}
 </div>
 </div>

 {/* Careers Segment */}
 <div className="space-y-4 pt-4 border-t border-gray-100">
 <div className="pb-2 border-b border-gray-100 flex justify-between items-center">
 <h3 className="font-display font-black text-sm text-brand-green">
 Active Career Openings
 </h3>
 <button
 onClick={handleAddJob}
 className="px-3 py-1.5 bg-brand-green text-white rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center gap-1 cursor-pointer"
 >
 <Plus className="w-3.5 h-3.5" /> Add Opening
 </button>
 </div>

 <div className="space-y-4">
 {careers.map((c) => (
 <div key={c.id} className="p-4 rounded-xl bg-brand-bg border border-gray-150 relative space-y-3">
 <div className="grid sm:grid-cols-4 gap-3">
 <div className="space-y-1 sm:col-span-2">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Job Title</label>
 <input
 type="text"
 value={c.title}
 onChange={(e) => handleUpdateJob(c.id, "title", e.target.value)}
 className="w-full px-3 py-1 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Department</label>
 <input
 type="text"
 value={c.department}
 onChange={(e) => handleUpdateJob(c.id, "department", e.target.value)}
 className="w-full px-3 py-1 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 </div>
 <div className="space-y-1">
 <label className="text-[9px] font-mono text-gray-400 font-bold block">Location</label>
 <input
 type="text"
 value={c.location}
 onChange={(e) => handleUpdateJob(c.id, "location", e.target.value)}
 className="w-full px-3 py-1 text-xs bg-white border border-gray-150 rounded text-brand-charcoal"
 />
 </div>
 </div>

 <button
 onClick={() => handleDeleteJob(c.id)}
 className="absolute top-1 right-4 p-1.5 bg-red-500/10 hover:bg-red-500 text-red-600 hover:text-white rounded"
 title="Delete listing"
 >
 <Trash2 className="w-3.5 h-3.5" />
 </button>
 </div>
 ))}
 </div>
 </div>

 </div>
 )}

 </div>

 </div>

 </div>
 );
}
