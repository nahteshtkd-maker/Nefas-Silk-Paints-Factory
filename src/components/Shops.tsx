import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Phone, Clock, Navigation, PhoneCall, ListFilter, CheckCircle2 } from "lucide-react";
import { useWebsite } from "../context/WebsiteContext";

export default function Shops() {
 const { shops, t } = useWebsite();
 const [selectedCity, setSelectedCity] = useState("All Cities");
 const [searchQuery, setSearchQuery] = useState("");
 const [activeShopState, setActiveShopState] = useState<any>(null);
 const [showDirections, setShowDirections] = useState<string | null>(null);

 // Derive Cities dynamically from shops database
 const CITIES = ["All Cities", ...Array.from(new Set(shops.map((s) => s.city)))];

 // Search & Filter Memo
 const filteredShops = useMemo(() => {
 return shops.filter((shop) => {
 const matchesCity = selectedCity === "All Cities" || shop.city === selectedCity;
 const matchesSearch =
 shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
 shop.address.toLowerCase().includes(searchQuery.toLowerCase());
 return matchesCity && matchesSearch;
 });
 }, [shops, selectedCity, searchQuery]);

 // Set first shop as default active shop if none is active or active is deleted
 const activeShop = useMemo(() => {
 if (activeShopState && shops.some((s) => s.id === activeShopState.id)) {
 return activeShopState;
 }
 return shops[0] || null;
 }, [activeShopState, shops]);

 const handleCall = (phone: string) => {
 // Avoid window.alert, do nice visual notification
 const dialerLink = document.createElement("a");
 dialerLink.href = `tel:${phone}`;
 dialerLink.click();
 };

 const handleDirections = (shop: any) => {
 setShowDirections(shop.name);
 setTimeout(() => {
 setShowDirections(null);
 const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.name + ", " + shop.address)}`;
 window.open(mapsUrl, "_blank");
 }, 1200);
 };

 return (
 <div className="pt-24 pb-20 bg-brand-bg transition-colors duration-300">
 
 {/* 1. Page Header */}
 <div className="bg-white py-16 text-brand-charcoal border-b border-gray-150 relative overflow-hidden">
 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200')` }} />
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
 <span className="text-xs uppercase tracking-[3px] font-mono text-brand-darkgreen font-bold">
 {t("shops")} Network
 </span>
 <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
 Find Our Paint Stores
 </h1>
 <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-sans">
 Connect with our color consultants, browse specialty coatings, and access instant mixing facilities across Ethiopia's major trading hubs.
 </p>
 </div>
 </div>

 {/* 2. Store Listing & Detail Grid */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid lg:grid-cols-12 gap-8">
 
 {/* LEFT COLUMN: Store Listing and Filters (lg:col-span-5) */}
 <div className="lg:col-span-5 space-y-6">
 <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-sm space-y-4">
 
 {/* City filtering and Search */}
 <div className="space-y-3">
 <h3 className="text-xs uppercase tracking-wider font-mono text-brand-darkgreen font-bold flex items-center gap-1.5">
 <ListFilter className="w-4 h-4" /> Filter Outlets
 </h3>
 
 <div className="flex flex-wrap gap-1.5">
 {CITIES.map((city) => (
 <button
 key={city}
 onClick={() => setSelectedCity(city)}
 className={`px-3 py-1.5 rounded-lg text-[10.5px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
 selectedCity === city
 ? "bg-brand-green text-white"
 : "bg-brand-bg text-brand-charcoal hover:bg-gray-200"
 }`}
 >
 {city}
 </button>
 ))}
 </div>
 </div>

 <div className="relative">
 <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
 <input
 type="text"
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 placeholder="Search store by name..."
 className="w-full pl-10 pr-4 py-2.5 rounded-lg text-xs sm:text-sm bg-brand-bg border border-gray-150 text-brand-charcoal placeholder-gray-400 focus:outline-none focus:border-brand-darkgreen"
 />
 </div>
 </div>

 {/* Scrollable Store Cards list */}
 <div className="space-y-4 max-h-[580px] overflow-y-auto pr-2">
 {filteredShops.length === 0 ? (
 <div className="text-center py-10 text-gray-500 font-medium">
 No stores match your search.
 </div>
 ) : (
 <AnimatePresence mode="popLayout">
 {filteredShops.map((shop) => (
 <motion.div
 key={shop.id}
 layout
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -15 }}
 onClick={() => setActiveShopState(shop)}
 className={`p-4 rounded-xl border cursor-pointer transition-all flex gap-4 ${
 activeShop && activeShop.id === shop.id
 ? "bg-brand-green/5 border-brand-darkgreen/40 shadow-md"
 : "bg-white border-gray-150 hover:shadow-sm"
 }`}
 >
 <img
 src={shop.image}
 alt={shop.name}
 referrerPolicy="no-referrer"
 className="w-20 h-20 object-cover rounded-lg shrink-0 border border-gray-100"
 />
 <div className="flex-grow space-y-2.5">
 <div>
 <span className="text-[9px] uppercase font-mono tracking-widest text-brand-darkgreen font-bold">
 {shop.city}
 </span>
 <h4 className="font-display font-extrabold text-sm text-brand-charcoal leading-tight">
 {shop.name}
 </h4>
 </div>

 <div className="space-y-1 text-xs text-gray-500">
 <p className="flex items-start gap-1">
 <MapPin className="w-3.5 h-3.5 text-brand-darkgreen shrink-0 mt-0.5" />
 <span>{shop.address}</span>
 </p>
 </div>

 {/* Interactive inline quick buttons */}
 <div className="flex items-center gap-3 pt-1 border-t border-gray-150 text-[10px] font-bold tracking-wider uppercase text-gray-400">
 <button
 onClick={(e) => { e.stopPropagation(); handleCall(shop.phone); }}
 className="hover:text-brand-darkgreen inline-flex items-center gap-1 focus:outline-none cursor-pointer"
 >
 <PhoneCall className="w-3 h-3" /> Call
 </button>
 <button
 onClick={(e) => { e.stopPropagation(); handleDirections(shop); }}
 className="hover:text-brand-darkgreen inline-flex items-center gap-1 focus:outline-none cursor-pointer"
 >
 <Navigation className="w-3 h-3" /> Directions
 </button>
 </div>
 </div>
 </motion.div>
 ))}
 </AnimatePresence>
 )}
 </div>
 </div>

 {/* RIGHT COLUMN: Selected Outlet Detail (lg:col-span-7) */}
 <div className="lg:col-span-7 space-y-6">
 {activeShop ? (
 <div className="bg-white rounded-3xl p-5 border border-gray-150 shadow-md space-y-4">
 <div className="flex justify-between items-center pb-3 border-b border-gray-150">
 <div className="flex items-center gap-2">
 <MapPin className="w-5 h-5 text-brand-darkgreen" />
 <h3 className="font-display font-extrabold text-base text-brand-charcoal">
 Selected Outlet
 </h3>
 </div>
 </div>

 {/* Outlet hero image */}
 <div className="relative h-[280px] w-full rounded-2xl overflow-hidden border border-gray-200">
 <img
 src={activeShop.image}
 alt={activeShop.name}
 referrerPolicy="no-referrer"
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
 <div className="absolute bottom-4 left-4 text-white">
 <span className="text-[10px] uppercase font-mono tracking-widest text-brand-darkgreen font-bold">
 {activeShop.city}
 </span>
 <h4 className="font-display font-extrabold text-lg">{activeShop.name}</h4>
 </div>
 </div>

 {/* Active Outlet details card */}
 <div className="p-4 rounded-2xl bg-brand-bg border border-gray-250 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
 <div className="space-y-1.5">
 <h4 className="font-display font-black text-sm text-brand-green flex items-center gap-1.5">
 <CheckCircle2 className="w-4 h-4 text-brand-darkgreen" />
 {activeShop.name}
 </h4>
 <div className="space-y-0.5 text-xs text-gray-500">
 <p className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-brand-darkgreen" /> {activeShop.phone}</p>
 <p className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand-darkgreen" /> {activeShop.hours}</p>
 </div>
 </div>

 <div className="flex gap-2 w-full sm:w-auto shrink-0">
 <button
 onClick={() => handleCall(activeShop.phone)}
 className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-100 text-xs font-bold text-brand-charcoal uppercase border border-gray-200 rounded-lg shadow-sm cursor-pointer"
 >
 <PhoneCall className="w-3.5 h-3.5 text-brand-darkgreen" /> Call
 </button>
 <button
 onClick={() => handleDirections(activeShop)}
 className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-brand-green hover:bg-brand-darkgreen text-white text-xs font-bold uppercase rounded-lg shadow-sm transition-colors cursor-pointer"
 >
 {showDirections === activeShop.name ? (
 <>
 <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
 <span>Loading...</span>
 </>
 ) : (
 <>
 <Navigation className="w-3.5 h-3.5" /> Navigate
 </>
 )}
 </button>
 </div>
 </div>

 </div>
 ) : (
 <div className="h-[450px] bg-white rounded-3xl border border-gray-150 shadow-md flex flex-col items-center justify-center text-gray-500">
 Select a showroom to view interactive maps and driving directions.
 </div>
 )}
 </div>

 </div>

 </div>
 );
}
