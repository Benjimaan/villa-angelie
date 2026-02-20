"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/images/la-villa-angelie-78.jpg",
    tag: "Mariages d'Exception",
    title: "Votre Jour Parfait\nCommence Ici",
    subtitle: "Un cadre contemporain et raffiné pour célébrer l'amour",
  },
  {
    image: "/images/la-villa-angelie-87.jpg",
    tag: "Séminaires & Congrès",
    title: "L'Excellence au\nService du Business",
    subtitle: "Des espaces modulables jusqu'à 350 participants",
  },
  {
    image: "/images/la-villa-angelie-96.jpg",
    tag: "Fêtes Privées",
    title: "Des Moments\nInoubliables",
    subtitle: "Terrasses, piste de danse, mobilier d'exception",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Warm tint overlay */}
      <div className="absolute inset-0 bg-[#8B6914]/10 mix-blend-multiply pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Tag */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tag-${current}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium border border-gold/50 px-5 py-2">
              {slide.tag}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="font-serif text-white text-5xl md:text-7xl font-semibold leading-tight max-w-4xl mb-6 whitespace-pre-line drop-shadow-lg"
          >
            {slide.title}
          </motion.h1>
        </AnimatePresence>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-24 h-px bg-gold mx-auto mb-6"
        />

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="text-white/80 text-lg md:text-xl font-light max-w-xl mb-12 tracking-wide"
          >
            {slide.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="/pre-reservation"
            className="bg-gold hover:bg-gold-dark text-white px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-xl hover:shadow-gold/30"
          >
            Demander un Devis
          </Link>
          <Link
            href="/la-villa"
            className="border border-white/60 hover:border-white text-white px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            Découvrir la Villa
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPrev(current); setCurrent(i); }}
              className={`transition-all duration-500 ${
                i === current
                  ? "w-10 h-0.5 bg-gold"
                  : "w-4 h-0.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
