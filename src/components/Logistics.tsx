import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Truck, Navigation, Globe, ShieldCheck, Anchor, Compass, Clock, CheckCircle2, MapPin } from "lucide-react";
import Logo from "./Logo";

interface RouteNode {
 name: string;
 desc: string;
 x: number;
 y: number;
}

const CORRIDOR_NODES: RouteNode[] = [
 { name: "Addis Ababa HQ", desc: "Central loading, clearance, and fleet dispatch center.", x: 50, y: 220 },
 { name: "Modjo Dry Port", desc: "Primary dry port hub and customs clearance processing.", x: 130, y: 195 },
 { name: "Awash Junction", desc: "Vital transit checkpoint connecting the northern and eastern regions.", x: 220, y: 160 },
 { name: "Dire Dawa Hub", desc: "Secondary railway/road cargo consolidation terminal.", x: 310, y: 185 },
 { name: "Galafi Border", desc: "Official customs border crossing between Ethiopia and Djibouti.", x: 360, y: 95 },
 { name: "Port of Djibouti", desc: "Strategic maritime gateway for East African import-export trade.", x: 440, y: 60 }
];

export default function Logistics() {
 const [activeNode, setActiveNode] = useState<RouteNode>(CORRIDOR_NODES[0]);
 const [truckProgress, setTruckProgress] = useState(0);

 // Animate truck along route
 useEffect(() => {
 const timer = setInterval(() => {
 setTruckProgress((prev) => (prev >= 100 ? 0 : prev + 1));
 }, 180);
 return () => clearInterval(timer);
 }, []);

 // Compute truck coordinates based on progress
 const truckCoords = useMemo(() => {
 if (CORRIDOR_NODES.length === 0) return { x: 50, y: 220 };
 const segmentsCount = CORRIDOR_NODES.length - 1;
 const segmentSize = 100 / segmentsCount;
 const currentSegmentIndex = Math.min(
 Math.floor(truckProgress / segmentSize),
 segmentsCount - 1
 );

 const segmentProgress = (truckProgress % segmentSize) / segmentSize;
 const startNode = CORRIDOR_NODES[currentSegmentIndex];
 const endNode = CORRIDOR_NODES[currentSegmentIndex + 1];

 const x = startNode.x + (endNode.x - startNode.x) * segmentProgress;
 const y = startNode.y + (endNode.y - startNode.y) * segmentProgress;

 return { x, y };
 }, [truckProgress]);

 return (
 <div className="pt-24 pb-20 bg-brand-bg transition-colors duration-300">
 
 {/* 1. Page Header */}
 <div className="bg-white py-16 text-brand-charcoal border-b border-black/5 relative overflow-hidden">
 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200')` }} />
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
 <span className="text-xs uppercase tracking-[3px] font-mono text-brand-darkgreen font-bold">
 East African Transit Corridor
 </span>
 <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
 Our Fleet & Logistics Division
 </h1>
 <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-sans">
 Operating a robust, heavily branded fleet of over 200 heavy transport trucks along the vital import-export corridor linking landlocked Ethiopia to the Port of Djibouti.
 </p>
 </div>
 </div>

 {/* 2. Corridor Map & Operations Description */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid lg:grid-cols-12 gap-10 items-start">
 
 {/* LEFT COLUMN: Operations and Facts (lg:col-span-5) */}
 <div className="lg:col-span-5 space-y-6">
 <div className="space-y-4">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Connecting Global Trade
 </span>
 <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-green tracking-tight leading-tight">
 The Addis to Djibouti Highway
 </h2>
 <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
 Our fleet and transport division is one of our most successful expansions. By maintaining strict control over our logistics corridors, we secure smooth container operations for our premium coffee exports and chemical paint ingredient imports alike.
 </p>
 <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
 Every single vehicle in our fleet is fully branded, displaying the iconic **Nefas Silk Paints Factory logo** on the doors and cargo container side walls. This ensures visibility, accountability, and high corporate standards along the 1,000km highway.
 </p>
 </div>

 {/* Branded Fleet Photo */}
 <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white shadow-xl group">
 <img
 src="/images/fleet_logistics_branded_truck.png"
 alt="Branded Nefas Silk Logistics Truck"
 className="w-full h-full object-cover brightness-[0.85] transition-transform duration-750 group-hover:scale-105"
 referrerPolicy="no-referrer"
 />
 
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
 <span className="absolute bottom-4 left-4 text-[10.5px] font-mono uppercase tracking-widest text-white font-bold bg-brand-darkgreen/90 px-3 py-1.5 rounded">
 Active Branded Trailer Fleet
 </span>
 </div>

 {/* Quick specs stats */}
 <div className="grid grid-cols-2 gap-4">
 <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
 <span className="block text-3xl font-extrabold text-brand-darkgreen font-display">200+</span>
 <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Heavy Duty Trucks</span>
 </div>
 <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
 <span className="block text-3xl font-extrabold text-brand-darkgreen font-display">1,000 km</span>
 <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Addis-Djibouti Route</span>
 </div>
 </div>
 </div>

 {/* RIGHT COLUMN: Interactive High-Fidelity Animated SVG Corridor Map (lg:col-span-7) */}
 <div className="lg:col-span-7 space-y-6">
 <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-6">
 
 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
 <div className="flex items-center gap-2">
 <Compass className="w-5 h-5 text-brand-darkgreen" />
 <h3 className="font-display font-extrabold text-base text-brand-charcoal">
 Live Corridor Tracker Map
 </h3>
 </div>
 <span className="text-[10px] font-mono uppercase bg-brand-darkgreen/15 text-brand-darkgreen px-2.5 py-1 rounded border border-brand-darkgreen/30 font-bold">
 Transit Active
 </span>
 </div>

 {/* Simulated Animated Route Tracker */}
 <div className="relative h-[320px] w-full rounded-2xl overflow-hidden bg-brand-bg border border-gray-200 flex items-center justify-center">
 
 {/* Gridlines overlay */}
 <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:16px_16px]" />

 <svg viewBox="0 0 500 300" className="w-full h-full text-gray-300 absolute z-0">
 {/* Dashed route trace */}
 <path
 id="logistics-route-line"
 d="M 50 220 L 130 195 L 220 160 L 310 185 L 360 95 L 440 60"
 fill="none"
 stroke="currentColor"
 strokeWidth="3.5"
 strokeDasharray="6 4"
 className="text-gray-300"
 />

 {/* Animated colored highlight behind truck */}
 <path
 d="M 50 220 L 130 195 L 220 160 L 310 185 L 360 95 L 440 60"
 fill="none"
 stroke="#FF6B00"
 strokeWidth="2.5"
 strokeDasharray="500"
 strokeDashoffset={500 - (500 * truckProgress) / 100}
 opacity="0.8"
 />

 {/* Plotting points */}
 {CORRIDOR_NODES.map((node, nIdx) => (
 <circle
 key={nIdx}
 cx={node.x}
 cy={node.y}
 r={activeNode.name === node.name ? "7" : "5"}
 fill={activeNode.name === node.name ? "#FF6B00" : "#94A3B8"}
 className="cursor-pointer hover:fill-brand-darkgreen transition-colors duration-200"
 onClick={() => setActiveNode(node)}
 />
 ))}
 </svg>

 {/* Real-time moving truck SVG branded with logo */}
 <div
 className="absolute z-10 pointer-events-none transition-all duration-100 ease-out flex flex-col items-center"
 style={{ left: `${truckCoords.x - 16}px`, top: `${truckCoords.y - 18}px` }}
 >
 {/* Mini Branded Truck container */}
 <div className="relative bg-white border-2 border-brand-darkgreen px-1 rounded-md shadow-md flex items-center gap-1">
 <Truck className="w-4 h-4 text-brand-darkgreen" />
 {/* Micro Logo */}
 <div className="w-2.5 h-2.5 rounded-full bg-green-500 flex items-center justify-center">
 <span className="text-[5px] text-white font-mono">N</span>
 </div>
 </div>
 </div>

 {/* Maritime & Landmark decorative symbols */}
 <div className="absolute top-8 left-8 text-[10px] font-mono text-gray-400 flex items-center gap-1">
 <Globe className="w-3.5 h-3.5 text-brand-green" />
 <span>Horn of Africa Corridor</span>
 </div>

 <div className="absolute top-12 right-12 text-[10px] font-mono text-gray-400 flex items-center gap-1">
 <Anchor className="w-3.5 h-3.5 text-brand-green" />
 <span>Port Gulf of Aden</span>
 </div>

 </div>

 {/* Click-to-Inspect Node Card */}
 <div className="p-4 rounded-2xl bg-brand-bg border border-gray-200 space-y-3">
 <div className="flex justify-between items-center">
 <div className="flex items-center gap-2">
 <MapPin className="w-4 h-4 text-brand-darkgreen" />
 <span className="font-display font-extrabold text-sm text-brand-green">
 {activeNode.name}
 </span>
 </div>
 <span className="text-[10px] font-mono uppercase bg-brand-green/10 text-brand-green px-2 py-0.5 rounded border border-brand-green/20">
 Station Node Info
 </span>
 </div>
 <p className="text-xs text-gray-500 font-sans">
 {activeNode.desc}
 </p>

 {/* Station selector list */}
 <div className="flex gap-1.5 overflow-x-auto pt-2 border-t border-gray-200/60 scrollbar-none">
 {CORRIDOR_NODES.map((node, idx) => (
 <button
 key={idx}
 onClick={() => setActiveNode(node)}
 className={`px-3 py-1.5 rounded-lg text-[9.5px] font-extrabold uppercase tracking-wider whitespace-nowrap focus:outline-none cursor-pointer ${
 activeNode.name === node.name
 ? "bg-brand-green text-white"
 : "bg-white hover:bg-gray-100 text-brand-charcoal border border-gray-150"
 }`}
 >
 {node.name}
 </button>
 ))}
 </div>
 </div>

 </div>
 </div>

 </div>

 </div>
 );
}

// Simple polyfill to compute truck coordinate transitions
import { useMemo } from "react";
