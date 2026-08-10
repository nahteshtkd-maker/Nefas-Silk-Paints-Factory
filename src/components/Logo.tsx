import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
 size?: number;
 showText?: boolean;
 textColorClass?: string;
 subTextColorClass?: string;
 className?: string;
}

export default function Logo({
 size = 40,
 showText = false,
 textColorClass = "text-brand-green",
 subTextColorClass = "text-brand-darkgreen",
 className = "",
 ...props
}: LogoProps) {
 return (
 <div className={`flex items-center gap-3 ${className}`}>
 <svg
 width={size}
 height={size}
 viewBox="0 0 100 100"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 className="shrink-0 select-none"
 {...props}
 >
 {/* Globe Grid lines (Green) */}
 {/* Latitude lines */}
 <path
 d="M 8 50 A 42 22 0 0 0 92 50"
 stroke="#00E600"
 strokeWidth="1.5"
 opacity="0.75"
 />
 <path
 d="M 8 50 A 42 22 0 0 1 92 50"
 stroke="#00E600"
 strokeWidth="1.5"
 opacity="0.75"
 />
 {/* Longitude lines */}
 <path
 d="M 50 8 A 28 42 0 0 0 50 92"
 stroke="#00E600"
 strokeWidth="1.5"
 opacity="0.75"
 />
 <path
 d="M 50 8 A 28 42 0 0 1 50 92"
 stroke="#00E600"
 strokeWidth="1.5"
 opacity="0.75"
 />
 {/* Main Grid Cross */}
 <line
 x1="50"
 y1="8"
 x2="50"
 y2="92"
 stroke="#00E600"
 strokeWidth="2"
 opacity="0.8"
 />
 <line
 x1="8"
 y1="50"
 x2="92"
 y2="50"
 stroke="#00E600"
 strokeWidth="2"
 opacity="0.8"
 />

 {/* Outer Globe Ring (Thick Green Circle) */}
 <circle
 cx="50"
 cy="50"
 r="42"
 stroke="#00E600"
 strokeWidth="7"
 opacity="1"
 />

 {/* Highly Slanted Stylized Red 'N' (Matching company logo) */}
 <path
 d="M 12 74 L 61 29 L 39 74 L 88 24"
 stroke="#FF1A1A"
 strokeWidth="11"
 strokeLinecap="butt"
 strokeLinejoin="miter"
 className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
 />
 </svg>

 {showText && (
 <div className="flex flex-col">
 <span className={`font-display font-extrabold text-lg tracking-[-0.5px] leading-tight ${textColorClass}`}>
 NEFAS SILK
 </span>
 <span className={`text-[9px] uppercase font-mono tracking-[1.5px] font-extrabold leading-none ${subTextColorClass}`}>
 Paints Factory PLC
 </span>
 </div>
 )}
 </div>
 );
}
