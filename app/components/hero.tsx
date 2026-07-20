"use client";

import { useEffect, useState, useRef } from "react";
import SvgReact from "@/app/svgrs/react.jsx";
import SvgBgTag from "@/app/svgrs/bg-tag.jsx";
import SvgBackground from "@/app/svgrs/background.jsx";
import SvgCloud1 from "@/app/svgrs/cloud-1.jsx";
import SvgCloud2 from "@/app/svgrs/cloud-2.jsx";
import SvgHillBack from "@/app/svgrs/hill-back.jsx";
import SvgHillFront from "@/app/svgrs/hill-front.jsx";
import SvgLandBack from "@/app/svgrs/land-back.jsx";
import SvgLandFront from "@/app/svgrs/land-front.jsx";
import SvgTree1 from "@/app/svgrs/tree-1.jsx";
import SvgTree2 from "@/app/svgrs/tree-2.jsx";
import SvgTree3 from "@/app/svgrs/tree-3.jsx";
import SvgBirds from "@/app/svgrs/birds.jsx";

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0, isMobile: false, rawX: 0 });
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);

    let animationFrameId: number;
    let pendingCoords = { x: 0, y: 0, isMobile: false, rawX: 0 };
    let needsUpdate = false;

    // requestAnimationFrame tick loop
    const updateCoords = () => {
      if (needsUpdate) {
        setCoords(pendingCoords);
        needsUpdate = false;
      }
      animationFrameId = requestAnimationFrame(updateCoords);
    };

    animationFrameId = requestAnimationFrame(updateCoords);

    // Native mouse event handler
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      if (innerWidth <= 725) return;
      pendingCoords = {
        x: e.clientX - innerWidth / 2,
        y: e.clientY - innerHeight / 2,
        isMobile: false,
        rawX: e.clientX,
      };
      needsUpdate = true;
    };

    // Device orientation handler
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { innerWidth, innerHeight } = window;
      if (innerWidth >= 725) return;

      const gammaCorrected = event.gamma !== null ? event.gamma : 0;
      const beta = event.beta !== null ? event.beta : 0;
      let betaCorrected = 0;
      if (beta <= 90 && beta >= -30) {
        betaCorrected = beta - 30;
      }

      pendingCoords = {
        x: (gammaCorrected * innerWidth) / 20,
        y: (betaCorrected * innerHeight) / 20,
        isMobile: true,
        rawX: gammaCorrected,
      };
      needsUpdate = true;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    // Handle iOS Device Orientation permission request
    const requestiOSPermission = () => {
        (DeviceOrientationEvent as any)
          .requestPermission()
          .then((response: string) => {
            if (response === "granted") {
              window.addEventListener("deviceorientation", handleOrientation, true);
            }
          })
          .catch(console.error);
    };

    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof (DeviceOrientationEvent as any).requestPermission === "function"
    ) {
      // iOS: Require user gesture to trigger the permission prompt
      window.addEventListener("click", requestiOSPermission, { once: true });
      window.addEventListener("touchstart", requestiOSPermission, { once: true });
    } else {
      // Android / Other non-iOS browsers
      window.addEventListener("deviceorientation", handleOrientation, true);
    }

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("deviceorientation", handleOrientation, true);
      window.removeEventListener("click", requestiOSPermission);
      window.removeEventListener("touchstart", requestiOSPermission);
    };
  }, []);

  const layers = [
    { src: SvgBackground, name: "background", speedx: 0, speedy: 0.5, speedz: 0, yInitial: 50, leftOffset: 0, isLeft: 1 },
    { src: SvgCloud1, name: "cloud-1", speedx: 0.15, speedy: 0.11, speedz: 0.1, yInitial: -150, leftOffset: -900, isLeft: -1 },
    { src: SvgCloud2, name: "cloud-2", speedx: 0.17, speedy: 0.13, speedz: 0.1, yInitial: -150, leftOffset: 600, isLeft: 1 },
    { src: SvgHillBack, name: "hill-back", speedx: 0.1, speedy: 0.1, speedz: 0.04, yInitial: 100, leftOffset: 200, isLeft: 1 },
    { src: SvgHillFront, name: "hill-front", speedx: 0.08, speedy: 0.08, speedz: 0.06, yInitial: 100, leftOffset: 200, isLeft: 1 },
    { src: SvgLandBack, name: "land-back", speedx: 0.06, speedy: 0.06, speedz: 0.07, yInitial: 100, leftOffset: -15, isLeft: -1 },
    { src: SvgTree1, name: "tree-1", speedx: 0.005, speedy: 0.035, speedz: 0.05, yInitial: 300, leftOffset: 250, isLeft: 1 },
    { src: SvgTree2, name: "tree-2", speedx: 0.01, speedy: 0.04, speedz: 0.06, yInitial: 300, leftOffset: 100, isLeft: 1 },
    { src: SvgTree3, name: "tree-3", speedx: 0.015, speedy: 0.045, speedz: 0.07, yInitial: 300, leftOffset: 390, isLeft: 1 },
    { src: SvgLandFront, name: "land-front", speedx: 0.02, speedy: 0.03, speedz: 0.03, yInitial: 100, leftOffset: 15, isLeft: 1 },
    { src: SvgBirds, name: "birds", speedx: 0.2, speedy: 0.2, speedz: 0.5, yInitial: -300, leftOffset: -700, isLeft: -1 },
  ];

  return (
    <section
      ref={containerRef}
      className={`parallax-container select-none overflow-hidden bg-light ${loaded ? "loaded" : ""}`}
    >
      {layers.map((layer) => {
        const xVal = coords.x * layer.speedx;
        const yVal = coords.y * layer.speedy;

        // Calculate translation on Z axis
        let zVal = 0;
        if (typeof window !== "undefined") {
          const width = window.innerWidth;
          if (coords.isMobile) {
            zVal = (coords.rawX - (0.5 + layer.leftOffset / width)) * layer.isLeft;
          } else {
            // Replicate: (clientX - elementLeft) * isLeft
            zVal = (coords.rawX - (width / 2 + layer.leftOffset)) * layer.isLeft;
          }
        }

        const transform = `perspective(2000px) ${
          mounted
            ? `translate3d(calc(-50% + ${xVal}px), ${yVal}px, ${zVal * layer.speedz}px)`
            : `translate3d(calc(-50% + 0px), ${layer.yInitial}%, 0px)`
        }`;

        const LayerComponent = layer.src;

        return (
          <LayerComponent
            key={layer.name}
            className={`parallax ${layer.name}`}
            style={{ transform }}
            preserveAspectRatio="none"
            alt={layer.name}
          />
        );
      })}

      {/* Intro Overlay Text */}
      <div className="relative mt-32 mx-auto w-[85%] sm:w-[70%] lg:w-[60%] max-w-[1150px] grid grid-cols-1 lg:grid-cols-[25%_75%] gap-4 items-center z-20">
        <SvgReact
          className={`hidden lg:block w-[90%] max-w-[250px] z-20 animate-[spin_30s_linear_infinite] transition-all duration-1000 ease-out ${
            mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          alt="React Logo"
        />
        <div className="z-20 text-left">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-dark drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)] transition-[transform,opacity] duration-1000 ease-out ${
              mounted ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            Hello, I am <strong className="block font-bold">Aldrick Rasquinha</strong>
          </h1>
          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              mounted ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <p className="inline-block w-full lg:w-3/4 mt-4 text-lg lg:text-xl py-1.5 px-6 text-light drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)] bg-[url(/assets/bg-tag.svg)] bg-no-repeat bg-size-[100%_100%]">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
