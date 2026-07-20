"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AdobexdIcon } from "@/components/icons/simple-icons-adobexd";
import { AffinityIcon } from "@/components/icons/simple-icons-affinity";
import { Css3Icon } from "@/components/icons/simple-icons-css3";
import { FigmaIcon } from "@/components/icons/simple-icons-figma";
import { GooglegeminiIcon } from "@/components/icons/simple-icons-googlegemini";
import { Html5Icon } from "@/components/icons/simple-icons-html5";
import { NextdotjsIcon } from "@/components/icons/simple-icons-nextdotjs";
import { ReactIcon } from "@/components/icons/simple-icons-react";
import { TailwindcssIcon } from "@/components/icons/simple-icons-tailwindcss";
import { TypescriptIcon } from "@/components/icons/simple-icons-typescript";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Services() {
  const [selectValue, setSelectValue] = useState("Frontend Development");

  useEffect(() => {
    // Blur any active element when the selection changes to clear button focus outline styling
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [selectValue]);

  function updateSelection() {
    if (selectValue === "Frontend Development") {
      setSelectValue("UI Design");
    } else {
      setSelectValue("Frontend Development");
    }
  }

  return (
    <section className="bg-light py-20 px-6 flex flex-col items-center w-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-dark relative after:content-[''] after:block after:w-8 after:h-px after:bg-dark after:opacity-25 after:mx-auto after:mt-2">
        What I Do
      </h2>
      
      <div className="flex flex-row items-center justify-center gap-4 my-8 md:my-10">
        <button 
          className="bg-transparent border-0 cursor-pointer text-4xl flex items-center justify-center text-dark hover:text-accent transition-colors"
          onClick={updateSelection}
          aria-label="Previous service"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-secondary tracking-wide text-dark min-w-[240px] text-center">
          {selectValue}
        </h1>
        <button 
          className="bg-transparent border-0 cursor-pointer text-4xl flex items-center justify-center text-dark hover:text-accent transition-colors"
          onClick={updateSelection}
          aria-label="Next service"
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      </div>

      <div className="w-full flex justify-center">
        {selectValue === "Frontend Development" ? (
          <FrontendDevelopment />
        ) : (
          <UIDesign />
        )}
      </div>

      <Link 
        href="/projects" 
        className="block w-fit px-10 py-4 rounded-full bg-accent text-light font-secondary font-bold uppercase tracking-wider hover:bg-dark transition-colors mt-12 mx-auto no-underline text-center cursor-pointer text-sm sm:text-base"
      >
        View Projects
      </Link>
    </section>
  );
}

function FrontendVector() {
  return (
    <svg 
      viewBox="0 0 400 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[350px] animate-fade-in-left rounded-2xl bg-dark/5 p-4 border border-dark/10"
    >
      {/* Browser Window Mockup */}
      <rect x="20" y="20" width="360" height="260" rx="12" fill="#370075" fillOpacity="0.03" stroke="#370075" strokeWidth="2" />
      {/* Header bar */}
      <line x1="20" y1="55" x2="380" y2="55" stroke="#370075" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Browser dots */}
      <circle cx="45" cy="38" r="5" fill="#FF5F56" />
      <circle cx="60" cy="38" r="5" fill="#FFBD2E" />
      <circle cx="75" cy="38" r="5" fill="#27C93F" />
      
      {/* Code Blocks */}
      {/* Left tag < > */}
      <path d="M110 110L85 130L110 150" stroke="#FDBA31" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M140 110L165 130L140 150" stroke="#FDBA31" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="135" y1="105" x2="115" y2="155" stroke="#370075" strokeWidth="3.5" strokeLinecap="round" />
      
      {/* Abstract lines representing code and elements */}
      <rect x="195" y="98" width="120" height="10" rx="5" fill="#370075" fillOpacity="0.3" />
      <rect x="195" y="118" width="80" height="10" rx="5" fill="#FDBA31" fillOpacity="0.7" />
      <rect x="195" y="138" width="100" height="10" rx="5" fill="#370075" fillOpacity="0.2" />
      
      <rect x="85" y="185" width="230" height="8" rx="4" fill="#370075" fillOpacity="0.15" />
      <rect x="85" y="203" width="190" height="8" rx="4" fill="#370075" fillOpacity="0.15" />
      <rect x="85" y="221" width="130" height="8" rx="4" fill="#FDBA31" fillOpacity="0.4" />
      
      {/* Little floating gear or sparkles */}
      <circle cx="330" cy="130" r="12" stroke="#370075" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.5" />
    </svg>
  );
}

function UIDesignVector() {
  return (
    <svg 
      viewBox="0 0 400 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[350px] animate-fade-in-left rounded-2xl bg-dark/5 p-4 border border-dark/10"
    >
      {/* Canvas background */}
      <rect x="20" y="20" width="360" height="260" rx="12" fill="#370075" fillOpacity="0.03" stroke="#370075" strokeWidth="2" />
      {/* Ruler guides */}
      <line x1="75" y1="20" x2="75" y2="280" stroke="#370075" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.2" />
      <line x1="20" y1="190" x2="380" y2="190" stroke="#370075" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.2" />
      
      {/* Intersecting shapes */}
      {/* Rectangle overlay with opacity */}
      <rect x="100" y="65" width="110" height="110" rx="16" fill="#370075" fillOpacity="0.15" stroke="#370075" strokeWidth="2.5" />
      {/* Circle overlay with opacity */}
      <circle cx="235" cy="145" r="60" fill="#FDBA31" fillOpacity="0.25" stroke="#FDBA31" strokeWidth="2.5" />
      
      {/* Selection Handles */}
      <circle cx="235" cy="145" r="4" fill="#FAFAFA" stroke="#FDBA31" strokeWidth="1.5" />
      <rect x="97" y="62" width="6" height="6" fill="#FAFAFA" stroke="#370075" strokeWidth="1.5" />
      <rect x="207" y="62" width="6" height="6" fill="#FAFAFA" stroke="#370075" strokeWidth="1.5" />
      <rect x="97" y="172" width="6" height="6" fill="#FAFAFA" stroke="#370075" strokeWidth="1.5" />
      <rect x="207" y="172" width="6" height="6" fill="#FAFAFA" stroke="#370075" strokeWidth="1.5" />
      
      {/* Pen tool path drawing */}
      <path d="M120 220C160 250 220 200 290 235" stroke="#370075" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Anchor points */}
      <circle cx="120" cy="220" r="4" fill="#FAFAFA" stroke="#370075" strokeWidth="1.5" />
      <circle cx="290" cy="235" r="4" fill="#FAFAFA" stroke="#370075" strokeWidth="1.5" />
      
      {/* Vector handle */}
      <line x1="195" y1="225" x2="215" y2="195" stroke="#FDBA31" strokeWidth="1.5" />
      <circle cx="195" cy="225" r="3" fill="#FDBA31" />
      <circle cx="215" cy="195" r="3" fill="#FDBA31" />
    </svg>
  );
}

function FrontendDevelopment() {
  const techStack = [
    { name: "HTML", icon: Html5Icon },
    { name: "CSS", icon: Css3Icon },
    { name: "TypeScript", icon: TypescriptIcon },
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextdotjsIcon },
    { name: "Tailwind CSS", icon: TailwindcssIcon },
  ];

  return (
    <div className="flex flex-col items-center gap-8 max-w-[1200px] w-full animate-fade-in">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mb-8 w-full">
        <FrontendVector />
        <p className="w-full lg:w-1/2 text-base sm:text-lg lg:text-xl text-dark leading-relaxed animate-fade-in-right text-center lg:text-left font-light">
          I build responsive web applications focused on performance, accessibility, and clean structure. I write maintainable React and TypeScript code, collaborate on API integration, and translate design wireframes into interactive user experiences.
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-4 w-full animate-fade-in mt-4">
        {techStack.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <div 
              key={tech.name} 
              className="flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 text-dark hover:text-accent group w-24"
            >
              <IconComponent className="transition-all duration-300 group-hover:drop-shadow-[0px_4px_6px_rgba(0,0,0,0.15)]" size={48} strokeWidth={0} fill="currentColor" />
              <p className="margin-0 font-sans text-xs sm:text-sm text-center mt-1">
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function UIDesign() {
  const techStack = [
    { name: "Figma", icon: FigmaIcon },
    { name: "Adobe XD", icon: AdobexdIcon },
    { name: "Affinity", icon: AffinityIcon },
    { name: "Google Stitch", icon: GooglegeminiIcon },
  ];

  return (
    <div className="flex flex-col items-center gap-8 max-w-[1200px] w-full animate-fade-in">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mb-8 w-full">
        <UIDesignVector />
        <p className="w-full lg:w-1/2 text-base sm:text-lg lg:text-xl text-dark leading-relaxed animate-fade-in-right text-center lg:text-left font-light">
          I design layouts, user journeys, color palettes, and typographic scales for digital interfaces. I build wireframes and interactive prototypes to ensure that websites and applications are both intuitive and visually consistent.
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-4 w-full animate-fade-in mt-4">
        {techStack.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <div 
              key={tech.name} 
              className="flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 text-dark hover:text-accent group w-24"
            >
              <IconComponent className="transition-all duration-300 group-hover:drop-shadow-[0px_4px_6px_rgba(0,0,0,0.15)]" size={48} strokeWidth={0} fill="currentColor" />
              <p className="margin-0 font-sans text-xs sm:text-sm text-center mt-1">
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
