import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Download, CheckCircle2, Sliders, Palette, Tag, Info, ShieldCheck } from "lucide-react";
import { useWebsite } from "../context/WebsiteContext";

export default function Products() {
 const { products, t } = useWebsite();
 const [selectedCategory, setSelectedCategory] = useState("All Products");
 const [searchQuery, setSearchQuery] = useState("");
 const [activeProductColors, setActiveProductColors] = useState<Record<string, string>>({});
 const [downloadingTds, setDownloadingTds] = useState<string | null>(null);

 // Derive categories dynamically from existing products
 const CATEGORIES = ["All Products", ...Array.from(new Set(products.map((p) => p.category)))];

 // Filter products based on search and selected category
 const filteredProducts = products.filter((product) => {
 const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
 const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
 product.description.toLowerCase().includes(searchQuery.toLowerCase());
 return matchesCategory && matchesSearch;
 });

 const selectColor = (productId: string, hexColor: string) => {
 setActiveProductColors((prev) => ({ ...prev, [productId]: hexColor }));
 };

 const handleDownloadTds = (productName: string) => {
 setDownloadingTds(productName);
 setTimeout(() => {
 // Simulate file download
 const element = document.createElement("a");
 const fileContents = `
=========================================
TECHNICAL DATA SHEET (TDS) - SPECIFICATIONS
=========================================
Product Name: ${productName}
Manufacturer: Nefas Silk Paints Factory PLC, Addis Ababa, Ethiopia
Standard Certifications: ISO 9001:2015 compliant, ES ISO 12944 compliant
Grade: Professional Architectural & Industrial Coating

TEST STANDARDS & PARAMETERS:
- Volatile Organic Compounds (VOC): Low VOC Eco-friendly formulation
- Scrub Resistance (Cycles): >15,000 cycles (Class 1)
- Specular Gloss: Quality Finish
- Weathering Resistance: Premium grade exterior formulation

APPLICATION PROTOCOL:
- Surface Preparation: Must be completely dust-free, oil-free, and thoroughly primed.
- Thinner: Tap water or mineral spirits depending on specific binder model (dilute 5-10% max)
- Application Method: Roller, high-quality airless spray, or nylon-bristle brush.

-----------------------------------------------------
Download complete. (Simulated Corporate Technical Document)
 `;
 const file = new Blob([fileContents], { type: "text/plain" });
 element.href = URL.createObjectURL(file);
 element.download = `NefasSilk_TDS_${productName.replace(/\s+/g, "_")}.txt`;
 document.body.appendChild(element);
 element.click();
 document.body.removeChild(element);
 setDownloadingTds(null);
 }, 1200);
 };

 return (
 <div className="pt-24 pb-20 bg-brand-bg transition-colors duration-300">
 
 {/* 1. Header Banner */}
 <div className="bg-white py-16 text-brand-charcoal border-b border-gray-150 relative overflow-hidden">
 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200')` }} />
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
 <span className="text-xs uppercase tracking-[3px] font-mono text-brand-darkgreen font-bold">
 {t("productCatalogue")}
 </span>
 <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
 Our Professional Product Catalogue
 </h1>
 <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-sans">
 Supplying premium chemical grade, eco-friendly decorative emulsion, protective anti-corrosive epoxies, and architectural coatings across East Africa.
 </p>
 </div>
 </div>

 {/* 2. Controls Grid: Category Selector & Search Bar */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
 <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
 
 {/* Category Scroller */}
 <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-3 lg:pb-0 scrollbar-none">
 <Sliders className="w-4 h-4 text-brand-darkgreen shrink-0 hidden sm:block" />
 <div className="flex gap-1">
 {CATEGORIES.map((cat) => (
 <button
 key={cat}
 onClick={() => setSelectedCategory(cat)}
 className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
 selectedCategory === cat
 ? "bg-brand-green text-white"
 : "bg-brand-bg hover:bg-gray-200 text-brand-charcoal"
 }`}
 >
 {cat}
 </button>
 ))}
 </div>
 </div>

 {/* Search box */}
 <div className="relative w-full lg:max-w-xs shrink-0">
 <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
 <input
 type="text"
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 placeholder="Search product..."
 className="w-full pl-10 pr-4 py-2.5 rounded-lg text-xs sm:text-sm bg-brand-bg border border-gray-150 text-brand-charcoal placeholder-gray-400 focus:outline-none focus:border-brand-darkgreen"
 />
 </div>

 </div>
 </div>

 {/* 3. Products Grid */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
 {filteredProducts.length === 0 ? (
 <div className="text-center py-20 text-gray-500 font-medium">
 No products found matching your filter selections.
 </div>
 ) : (
 <div className="grid md:grid-cols-2 gap-8">
 <AnimatePresence mode="popLayout">
 {filteredProducts.map((product) => {
 const colorsList = product.colors || [];
 const currentHexColor = activeProductColors[product.id] || colorsList[0]?.hex || "#FFFFFF";
 return (
 <motion.div
 key={product.id}
 layout
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.95 }}
 transition={{ duration: 0.4 }}
 className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm flex flex-col md:flex-row"
 >
 {/* Left Column: Product Image */}
 <div className="relative w-full md:w-48 bg-gray-50 p-4 flex flex-col items-center justify-center shrink-0">
 <img
 src={product.image}
 alt={product.name}
 referrerPolicy="no-referrer"
 className="w-full h-32 md:h-36 object-cover rounded-xl shadow-inner mb-4"
 />

 {/* Interactive Paint Can demonstration utilizing Selected Color */}
 {colorsList.length > 0 && (
 <div className="w-full flex items-center justify-center gap-2 mb-2 p-1.5 rounded-md bg-white border border-gray-150">
 <div
 className="w-4 h-4 rounded-full border border-gray-200 shadow-sm transition-colors duration-300"
 style={{ backgroundColor: currentHexColor }}
 />
 <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider truncate">
 {colorsList.find((c) => c.hex === currentHexColor)?.name || "Default"}
 </span>
 </div>
 )}
 </div>

 {/* Right Column: Specification details */}
 <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
 <div className="space-y-2">
 <div className="flex items-center justify-between gap-2">
 <span className="text-[9px] uppercase font-mono tracking-widest text-brand-darkgreen font-bold flex items-center gap-1 bg-brand-darkgreen/5 px-2 py-0.5 rounded border border-brand-darkgreen/20">
 <Tag className="w-2.5 h-2.5" /> {product.category}
 </span>
 <span className="text-[9px] font-mono text-gray-400">
 ISO 9001 COMPLIANT
 </span>
 </div>

 <h3 className="font-display font-black text-base sm:text-lg text-brand-green tracking-tight leading-tight">
 {product.name}
 </h3>
 
 <p className="text-xs text-gray-500 font-sans leading-relaxed">
 {product.description}
 </p>
 </div>

 {/* Specifications List */}
 <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-brand-bg text-[10px] font-mono border border-gray-150">
 <div>
 <span className="text-gray-400 block uppercase">Coverage:</span>
 <span className="font-bold text-brand-charcoal">{product.coverage}</span>
 </div>
 <div>
 <span className="text-gray-400 block uppercase">Drying Time:</span>
 <span className="font-bold text-brand-charcoal">{product.dryingTime}</span>
 </div>
 <div className="col-span-2 pt-1 border-t border-gray-200/60">
 <span className="text-gray-400 block uppercase">Finish Grade:</span>
 <span className="font-bold text-brand-charcoal">{product.finish}</span>
 </div>
 </div>

 {/* Applications Tagging */}
 {product.applications && product.applications.length > 0 && (
 <div className="space-y-1">
 <span className="text-[9px] font-mono uppercase text-gray-400 tracking-wider flex items-center gap-1">
 <Info className="w-3 h-3" /> Recommended Applications
 </span>
 <div className="flex flex-wrap gap-1">
 {product.applications.map((app, idx) => (
 <span
 key={idx}
 className="text-[9.5px] font-sans font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded"
 >
 {app}
 </span>
 ))}
 </div>
 </div>
 )}

 {/* Color Swatch Panel */}
 {colorsList.length > 0 && (
 <div className="space-y-1.5 pt-1">
 <span className="text-[9px] font-mono uppercase text-gray-400 tracking-wider flex items-center gap-1">
 <Palette className="w-3 h-3" /> Select Color Shade
 </span>
 <div className="flex flex-wrap gap-1.5">
 {colorsList.map((col) => (
 <button
 key={col.hex}
 onClick={() => selectColor(product.id, col.hex)}
 title={col.name}
 className={`w-6 h-6 rounded-full border cursor-pointer transition-all ${
 currentHexColor === col.hex
 ? "scale-110 border-brand-darkgreen ring-2 ring-brand-darkgreen/30"
 : "border-gray-200 hover:scale-105"
 }`}
 style={{ backgroundColor: col.hex }}
 />
 ))}
 </div>
 </div>
 )}

 {/* Technical Data Sheet Action Button */}
 <div className="pt-2 border-t border-gray-150 flex justify-end">
 <button
 onClick={() => handleDownloadTds(product.name)}
 disabled={downloadingTds === product.name}
 className="flex items-center justify-center gap-1.5 bg-brand-green hover:bg-brand-darkgreen text-white text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded transition-colors duration-200 shadow-sm"
 >
 {downloadingTds === product.name ? (
 <>
 <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
 <span>Preparing...</span>
 </>
 ) : (
 <>
 <Download className="w-3.5 h-3.5" />
 <span>Technical TDS</span>
 </>
 )}
 </button>
 </div>

 </div>
 </motion.div>
 );
 })}
 </AnimatePresence>
 </div>
 )}
 </div>

 </div>
 );
}
