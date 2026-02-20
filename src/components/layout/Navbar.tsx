"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/la-villa", label: "La Villa" },
  { href: "/prestations", label: "Prestations" },
  { href: "/pre-reservation", label: "Pré-réservation" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-[#E8E0D5]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group flex flex-col items-start">
              <span
                className={`font-serif text-xl font-semibold tracking-wide transition-colors ${
                  isTransparent ? "text-white" : "text-charcoal"
                }`}
              >
                La Villa Angélie
              </span>
              <span
                className={`text-[10px] tracking-[0.3em] uppercase font-light transition-colors ${
                  isTransparent ? "text-white/70" : "text-gold"
                }`}
              >
                Lieu de réception
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all duration-300 relative group ${
                    isTransparent
                      ? "text-white/90 hover:text-white"
                      : "text-warm-gray hover:text-charcoal"
                  } ${
                    pathname === link.href
                      ? isTransparent
                        ? "text-white"
                        : "text-charcoal"
                      : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+33XXXXXXXXX"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isTransparent ? "text-white/80 hover:text-white" : "text-warm-gray hover:text-gold"
                }`}
              >
                <Phone size={14} />
                <span className="tracking-wide">Nous appeler</span>
              </a>
              <Link
                href="/pre-reservation"
                className="bg-gold text-white text-sm px-6 py-2.5 tracking-widest uppercase font-medium transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
              >
                Réserver
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={`md:hidden p-2 transition-colors ${
                isTransparent ? "text-white" : "text-charcoal"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory pt-20"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-serif text-3xl font-medium transition-colors ${
                      pathname === link.href ? "text-gold" : "text-charcoal hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/pre-reservation"
                  onClick={() => setMobileOpen(false)}
                  className="bg-gold text-white text-sm px-10 py-3.5 tracking-widest uppercase font-medium"
                >
                  Demander un Devis
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
