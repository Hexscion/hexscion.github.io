"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects/" },
    { name: "CERTIFICATES", path: "/certificates/" },
  ];

  return (
    <header className={`absolute top-0 left-0 w-full flex justify-between items-center p-6 bg-transparent font-sans font-semibold tracking-wider z-100 pointer-events-none ${menuOpen ? "menu-open" : ""}`}>
      <Link href="/" className="text-dark font-bold text-xl no-underline hover:text-accent transition-colors backdrop-blur-3xl bg-light/30 border border-light px-6 py-3 sm:px-8 sm:py-2 rounded-full pointer-events-auto">
        &lt;hexscion /&gt;
      </Link>

      {/* Hamburger Toggle Button - Mobile Only */}
      <button
        className="nav-toggle-btn sm:hidden backdrop-blur-3xl bg-light/30 border border-light rounded-full pointer-events-auto"
        aria-label="toggle navigation"
        onClick={toggleMenu}
      >
        <span className="hamburger"></span>
      </button>

      <div className="bubble pointer-events-auto"></div>

      {/* Large Screen Navigation - Desktop Only */}
      <nav className="hidden sm:flex items-center gap-8 backdrop-blur-3xl bg-light/30 border border-light px-8 py-2 rounded-full pointer-events-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`font-bold tracking-wider transition-colors duration-150 no-underline hover:text-accent ${
                isActive
                  ? "text-accent underline decoration-2 underline-offset-4"
                  : "text-dark"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Fullscreen Mobile Navigation Menu */}
      <nav
        className={`fixed max-w-dvw inset-0 z-10 flex flex-col justify-center items-center transition-all duration-500 translate-x-0 translate-y-0 ease-[cubic-bezier(0.5,0,0.5,1)] pointer-events-auto ${
          menuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-10 items-center text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={closeMenu}
                  className={`font-bold text-4xl no-underline tracking-widest transition-colors ${
                    isActive ? "text-accent" : "text-light hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
