import { useState, FormEvent } from "react";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, Globe2, Facebook, Twitter, Linkedin, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Location {
 id: string;
 name: string;
 address: string;
 phone: string;
 email: string;
 hours: string;
 x: number; // coordinate representation
 y: number; // coordinate representation
}

const LOCATIONS: Location[] = [
 {
 id: "hq",
 name: "Head Office (Sar Bet)",
 address: "Sar Bet, JFK Apartment, 8th Floor, Addis Ababa, Ethiopia",
 phone: "+251 (11) 465-1030 / +251 (11) 465-1040",
 email: "info@nefassilkpaints.com",
 hours: "Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:00 AM - 12:30 PM",
 x: 480,
 y: 210
 },
 {
 id: "factory1",
 name: "Factory One (Adey Abeba, Saris)",
 address: "Adey Abeba, Saris, Addis Ababa, Ethiopia",
 phone: "+251 (11) 434-2055",
 email: "logistics@nefassilkpaints.com",
 hours: "24/7 Operations Support",
 x: 495,
 y: 260
 },
 {
 id: "factory2",
 name: "Factory Two (Sheger City, Debre Gelan)",
 address: "Sheger City, Debre Gelan, Ethiopia",
 phone: "+251 (22) 111-4090",
 email: "sourcing@nefassilkpaints.com",
 hours: "Mon - Sat: 7:30 AM - 6:00 PM",
 x: 650,
 y: 310
 }
];

export default function Contact() {
 const [activeLoc, setActiveLoc] = useState<Location>(LOCATIONS[0]);
 const [formSubmitted, setFormSubmitted] = useState(false);
 const [formData, setFormData] = useState({ name: "", email: "", subject: "General Partnership", message: "" });

 const handleFormSubmit = (e: FormEvent) => {
 e.preventDefault();
 if (!formData.name || !formData.email || !formData.message) return;
 setFormSubmitted(true);
 setTimeout(() => {
 setFormData({ name: "", email: "", subject: "General Partnership", message: "" });
 setFormSubmitted(false);
 }, 4000);
 };

 return (
 <section id="contact" className="py-24 bg-brand-bg transition-colors duration-300 relative">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold">
 Connect with Us
 </span>
 <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-green mt-3 leading-tight">
 Initiate a Partnership
 </h2>
 <p className="text-base text-gray-500 font-sans mt-4">
 Whether inquiring about bulk architectural paint formulas, direct trade coffee shipments, or cargo fleet charters, our corporate board is ready to assist.
 </p>
 </div>

 {/* Split Layout Container */}
 <div className="grid lg:grid-cols-12 gap-12 items-stretch">
 
 {/* Left: Contact Form & Info (lg:col-span-6) */}
 <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
 <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-md flex-grow flex flex-col justify-between">
 
 <AnimatePresence mode="wait">
 {formSubmitted ? (
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0 }}
 className="py-16 text-center space-y-4 flex flex-col items-center justify-center h-full"
 >
 <div className="p-4 rounded-full bg-green-100 text-green-600">
 <CheckCircle2 className="w-12 h-12" />
 </div>
 <h3 className="font-display font-bold text-xl text-gray-900">
 Message Dispatched
 </h3>
 <p className="text-sm text-gray-500 font-sans max-w-xs leading-relaxed">
 Thank you for contacting Nefas Silk PLC! Your corporate request has been cataloged under reference <strong>NS-{Math.floor(Math.random() * 900000) + 100000}</strong>. Our communications director will follow up within 24 business hours.
 </p>
 </motion.div>
 ) : (
 <motion.form
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onSubmit={handleFormSubmit}
 className="space-y-4"
 >
 <div className="grid sm:grid-cols-2 gap-4">
 <div className="space-y-1.5">
 <label className="text-xs font-semibold text-gray-500">
 Your Name *
 </label>
 <input
 type="text"
 required
 value={formData.name}
 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
 placeholder="Abebe Hailu"
 className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-bg text-sm focus:border-brand-darkgreen focus:outline-none"
 />
 </div>
 <div className="space-y-1.5">
 <label className="text-xs font-semibold text-gray-500">
 Corporate Email *
 </label>
 <input
 type="email"
 required
 value={formData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
 placeholder="hailu@company.com"
 className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-bg text-sm focus:border-brand-darkgreen focus:outline-none"
 />
 </div>
 </div>

 <div className="space-y-1.5">
 <label className="text-xs font-semibold text-gray-500">
 Inquiry Segment
 </label>
 <select
 value={formData.subject}
 onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
 className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-bg text-sm focus:border-brand-darkgreen focus:outline-none"
 >
 <option value="General Partnership">General Corporate Partnership</option>
 <option value="Paint Coatings Purchase">Paint & Protective Coatings (Bulk)</option>
 <option value="Coffee Import Contract">Arabica Coffee Import Contracts</option>
 <option value="Fleet Charter Inquiries">Fleet Charter & Transit Logistics</option>
 <option value="Agro-Commodities Orders">Agro-Commodity / Sesame Sourcing</option>
 </select>
 </div>

 <div className="space-y-1.5">
 <label className="text-xs font-semibold text-gray-500">
 Message Details *
 </label>
 <textarea
 rows={5}
 required
 value={formData.message}
 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
 placeholder="Please describe your requirements, volume demands, or transit specifications in detail..."
 className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-brand-bg text-sm focus:border-brand-darkgreen focus:outline-none resize-none"
 />
 </div>

 <button
 type="submit"
 className="w-full py-4 rounded-xl bg-brand-green text-white hover:bg-brand-green/95 font-bold text-sm shadow-md flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
 >
 <Send className="w-4 h-4" />
 <span>Transmit Message</span>
 </button>
 </motion.form>
 )}
 </AnimatePresence>

 </div>
 </div>

 {/* Right: Info Details for the three locations (lg:col-span-6) */}
 <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
 
 <div className="space-y-4">
 <span className="text-xs uppercase tracking-widest font-mono text-brand-darkgreen font-bold block mb-1">
 Corporate & Industrial Hubs
 </span>
 <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-green leading-tight">
 Our Office Locations
 </h3>
 <p className="text-sm text-gray-500 font-sans">
 Visit or get in touch directly with our specific corporate offices, manufacturing depots, or regional agricultural trade hubs in Ethiopia.
 </p>
 </div>

 {/* List of 3 Locations Stack */}
 <div className="space-y-6 flex-grow">
 {LOCATIONS.map((loc) => {
 const getLabel = (id: string) => {
 switch (id) {
 case "hq":
 return { text: "Head Office", color: "bg-brand-darkgreen/15 text-brand-darkgreen border-brand-darkgreen/30" };
 case "factory1":
 return { text: "Factory One", color: "bg-brand-sage text-brand-green border-brand-green/20" };
 case "factory2":
 return { text: "Factory Two", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" };
 default:
 return { text: "Branch", color: "bg-gray-100 text-gray-500" };
 }
 };
 const label = getLabel(loc.id);

 return (
 <motion.div
 key={loc.id}
 id={`contact-hub-${loc.id}`}
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4 }}
 className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:border-brand-darkgreen/20 transition-all duration-300 space-y-4"
 >
 <div className="flex items-center justify-between gap-3">
 <div className="flex items-center gap-2">
 <MapPin className="w-5 h-5 text-brand-darkgreen shrink-0" />
 <h4 className="font-display font-bold text-sm sm:text-base text-brand-green">
 {loc.name}
 </h4>
 </div>
 <span className={`text-[9px] uppercase font-mono tracking-wider px-2.5 py-1 rounded border font-bold ${label.color}`}>
 {label.text}
 </span>
 </div>

 <div className="space-y-2.5 text-xs sm:text-sm font-sans text-gray-500">
 <p className="leading-relaxed">{loc.address}</p>
 
 <div className="grid sm:grid-cols-2 gap-2 pt-2 border-t border-gray-100">
 <div className="flex items-center gap-2">
 <Phone className="w-4 h-4 text-brand-green shrink-0" />
 <span className="font-mono text-gray-700 font-semibold">{loc.phone}</span>
 </div>
 <div className="flex items-center gap-2">
 <Mail className="w-4 h-4 text-brand-green shrink-0" />
 <span className="text-brand-green hover:underline font-semibold">{loc.email}</span>
 </div>
 </div>

 <div className="flex items-center gap-2 pt-2 text-xs font-mono text-gray-400">
 <Clock className="w-4 h-4 text-gray-300" />
 <span>{loc.hours}</span>
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>

 </div>

 </div>

 </div>
 </section>
 );
}
