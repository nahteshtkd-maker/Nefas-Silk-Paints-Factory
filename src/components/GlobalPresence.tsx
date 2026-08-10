import { useState } from "react";
import { Globe, Anchor, CheckCircle2, Navigation, Ship, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TradeNode {
 id: string;
 name: string;
 region: string;
 x: number; // SVG coordinate
 y: number; // SVG coordinate
 products: string;
 transit: string;
 partners: string;
}

const TRADE_NODES: TradeNode[] = [
 {
 id: "addis",
 name: "Addis Ababa, Ethiopia (HQ)",
 region: "Origin Hub",
 x: 550,
 y: 320,
 products: "Paints, Specialty Arabica Coffee, Sesame, Pulses",
 transit: "Sourcing & Logistics Center",
 partners: "Nefas Silk Industrial Complexes"
 },
 {
 id: "rotterdam",
 name: "Port of Rotterdam, Netherlands",
 region: "Europe",
 x: 460,
 y: 170,
 products: "Premium Grade-1 Specialty Coffee Beans & Agro-commodities",
 transit: "18-22 Days (Djibouti Transit)",
 partners: "European Specialty Coffee Roasters & Wholesale Cooperatives"
 },
 {
 id: "jeddah",
 name: "Jeddah Islamic Port, Saudi Arabia",
 region: "Middle East",
 x: 565,
 y: 265,
 products: "White Humera Sesame Seeds & Red Kidney Beans",
 transit: "6-8 Days (Red Sea Transit)",
 partners: "Middle Eastern Confectioneries & Agro-processors"
 },
 {
 id: "dubai",
 name: "Port of Jebel Ali, UAE",
 region: "Middle East",
 x: 620,
 y: 260,
 products: "Specialty Roasted Coffee Beans & Pulses",
 transit: "10-12 Days",
 partners: "Gulf Distribution Networks"
 },
 {
 id: "shanghai",
 name: "Port of Shanghai, China",
 region: "Asia",
 x: 770,
 y: 245,
 products: "High-Oil Sesame Seeds & Oilseeds",
 transit: "24-28 Days",
 partners: "East Asian Agro-Industrial Mills"
 },
 {
 id: "tokyo",
 name: "Port of Tokyo, Japan",
 region: "Asia",
 x: 825,
 y: 215,
 products: "Premium Natural-Processed Yirgacheffe & Sidamo Coffee",
 transit: "28-32 Days",
 partners: "Japanese Micro-Roasters & Premium Brands"
 }
];

export default function GlobalPresence() {
 const [selectedNode, setSelectedNode] = useState<TradeNode>(TRADE_NODES[0]);

 return (
 <section id="global-map" className="py-24 bg-brand-bg transition-colors duration-300 relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Bridging Continents
 </span>
 <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-green mt-3 leading-tight">
 Global Export & Logistics Presence
 </h2>
 <p className="text-base sm:text-lg text-gray-500 font-sans mt-4">
 From our strategic headquarters in Addis Ababa, our supply chains stretch across high-demand agricultural and coffee markets worldwide.
 </p>
 </div>

 {/* Layout Grid: Map & Details */}
 <div className="grid lg:grid-cols-12 gap-10 items-center">
 
 {/* Interactive World Map SVG (lg:col-span-8) */}
 <div className="lg:col-span-8 p-6 rounded-2xl bg-brand-bg border border-gray-100 shadow-inner relative">
 <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/80 px-3 py-1.5 rounded-lg border border-gray-200/50 font-mono text-[10px] text-gray-500 z-10">
 <Ship className="w-3.5 h-3.5 text-brand-darkgreen animate-pulse" />
 <span>Dashed arcs represent active cargo shipping routes</span>
 </div>

 {/* Custom SVG Map Container */}
 <div className="w-full h-auto aspect-[2/1] min-h-[300px] overflow-hidden">
 <svg
 viewBox="200 100 700 320"
 className="w-full h-full text-gray-300"
 style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
 >
 {/* Simplified Continents Representation */}
 {/* Europe & Africa */}
 <path
 d="M380,120 L480,110 L520,150 L500,190 L480,210 L500,240 L480,260 L450,280 L490,320 L510,360 L540,380 L560,400 L530,420 L480,410 L440,350 L420,320 L410,280 L350,250 L360,220 L340,190 L360,170 Z"
 fill="currentColor"
 opacity="0.25"
 />
 {/* Asia & Middle East */}
 <path
 d="M520,150 L580,120 L660,110 L750,130 L800,160 L850,180 L880,160 L840,220 L810,250 L770,280 L730,300 L660,310 L620,310 L580,280 L550,260 L540,200 Z"
 fill="currentColor"
 opacity="0.25"
 />
 
 {/* Shipping Route Arcs (Addis coordinate is 550, 320) */}
 {TRADE_NODES.filter(node => node.id !== "addis").map((node) => {
 // Calculate curve midpoint coordinates for organic Bezier curve look
 const midX = (550 + node.x) / 2;
 const midY = (320 + node.y) / 2 - 40; // Push curve upwards
 return (
 <g key={`route-${node.id}`}>
 {/* Base Route Path */}
 <path
 d={`M550,320 Q${midX},${midY} ${node.x},${node.y}`}
 fill="none"
 stroke="#176B4D"
 strokeWidth="1.5"
 strokeDasharray="4 4"
 opacity={selectedNode.id === node.id ? "1" : "0.4"}
 className="transition-opacity duration-300"
 />
 {/* Pulse indicator following the arc */}
 <circle r="3" fill="#176B4D">
 <animateMotion
 path={`M550,320 Q${midX},${midY} ${node.x},${node.y}`}
 dur="4s"
 repeatCount="indefinite"
 />
 </circle>
 </g>
 );
 })}

 {/* Plotting trade nodes */}
 {TRADE_NODES.map((node) => {
 const isSelected = selectedNode.id === node.id;
 const isHQ = node.id === "addis";
 return (
 <g
 key={node.id}
 transform={`translate(${node.x}, ${node.y})`}
 className="cursor-pointer"
 onClick={() => setSelectedNode(node)}
 >
 {/* Glowing pulsing halo */}
 <circle
 r={isHQ ? "16" : "12"}
 className={`${
 isHQ
 ? "fill-brand-green/20 animate-ping"
 : isSelected
 ? "fill-brand-darkgreen/30 animate-ping"
 : "fill-transparent"
 }`}
 style={{ animationDuration: isHQ ? "2.5s" : "1.8s" }}
 />
 {/* Inner solid marker */}
 <circle
 r={isHQ ? "7" : "5"}
 fill={isHQ ? "#176B4D" : isSelected ? "#176B4D" : "#94A3B8"}
 className="transition-colors duration-300 stroke-white"
 strokeWidth="1.5"
 />
 {/* Name Label */}
 <text
 y="-12"
 textAnchor="middle"
 className={`font-display text-[8px] font-bold tracking-tight select-none pointer-events-none fill-brand-charcoal ${
 isSelected ? "opacity-100 scale-105" : "opacity-60"
 } transition-all duration-300`}
 >
 {isHQ ? "ADDIS ABABA (HQ)" : node.region}
 </text>
 </g>
 );
 })}
 </svg>
 </div>
 
 <div className="mt-4 flex flex-wrap gap-2.5 justify-center">
 {TRADE_NODES.map((node) => (
 <button
 key={node.id}
 onClick={() => setSelectedNode(node)}
 className={`px-3 py-1.5 rounded-lg font-display text-xs font-semibold border transition-all ${
 selectedNode.id === node.id
 ? "bg-brand-green text-white border-brand-green"
 : "bg-white text-gray-600 border-gray-200 hover:border-brand-darkgreen/40"
 }`}
 >
 {node.id === "addis" ? "Addis HQ" : node.region}
 </button>
 ))}
 </div>

 </div>

 {/* Interactive Details Panel (lg:col-span-4) */}
 <div className="lg:col-span-4 h-full flex flex-col justify-between">
 <AnimatePresence mode="wait">
 <motion.div
 key={selectedNode.id}
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -15 }}
 transition={{ duration: 0.2 }}
 className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg flex-grow flex flex-col justify-between space-y-8"
 >
 <div className="space-y-6">
 {/* Category */}
 <div>
 <span className="text-[10px] uppercase font-mono tracking-widest text-brand-darkgreen font-bold px-2 py-1 rounded bg-brand-darkgreen/10">
 {selectedNode.region} Trade Node
 </span>
 <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-green mt-3 tracking-tight">
 {selectedNode.name}
 </h3>
 </div>

 <div className="space-y-4 font-sans text-sm">
 <div className="space-y-1">
 <span className="text-xs text-gray-400 font-mono">EXPORT COMMODITIES</span>
 <p className="font-semibold text-gray-800">
 {selectedNode.products}
 </p>
 </div>

 <div className="space-y-1 pt-3 border-t border-gray-100">
 <span className="text-xs text-gray-400 font-mono">TRANSIT TIMEFRAME</span>
 <p className="font-semibold text-brand-darkgreen">
 {selectedNode.transit}
 </p>
 </div>

 <div className="space-y-1 pt-3 border-t border-gray-100">
 <span className="text-xs text-gray-400 font-mono">KEY PARTNERS</span>
 <p className="font-semibold text-gray-800">
 {selectedNode.partners}
 </p>
 </div>
 </div>
 </div>

 <div className="pt-6 border-t border-gray-100 flex items-center gap-2">
 <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
 <span className="text-xs text-gray-400 font-mono">Export Protocol active</span>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 </div>

 </div>
 </section>
 );
}
