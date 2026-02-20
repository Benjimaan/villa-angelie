"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sophie & Thomas",
    event: "Mariage · Juin 2024",
    stars: 5,
    text: "La Villa Angélie a transformé notre mariage en un moment magique. L'espace est absolument splendide, l'équipe à l'écoute et la terrasse sous les lumières du soir était à couper le souffle. Nos invités en parlent encore !",
    initials: "ST",
  },
  {
    name: "Marie-Claire Dumont",
    event: "Séminaire · Octobre 2024",
    stars: 5,
    text: "Nous avons organisé notre séminaire annuel à la Villa Angélie. Salle impeccable, équipement AV de qualité, et un accueil vraiment professionnel. L'espace terrasse a été parfait pour nos pauses networking.",
    initials: "MD",
  },
  {
    name: "Laurent & Amina B.",
    event: "Fête privée · Décembre 2024",
    stars: 5,
    text: "Pour nos 40 ans combinés, nous voulions un cadre unique. La Villa Angélie a dépassé toutes nos attentes. La modularité des espaces, la décoration, les lumières... Un souvenir impérissable pour 180 convives.",
    initials: "LA",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="py-28 bg-charcoal relative overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Decorative quote marks */}
      <div className="absolute top-10 left-10 text-gold/5 font-serif text-[200px] leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <ScrollReveal>
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            Ils nous font confiance
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mt-4 mb-16">
            Témoignages
          </h2>
        </ScrollReveal>

        {/* Testimonial card */}
        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 text-lg md:text-xl font-light leading-relaxed font-light-serif italic mb-8 max-w-3xl">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-serif font-semibold text-sm">
                    {t.initials}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs tracking-wide">{t.event}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
            aria-label="Précédent"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                className={`transition-all duration-300 ${
                  i === index ? "w-8 h-0.5 bg-gold" : "w-2 h-0.5 bg-white/30"
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
            aria-label="Suivant"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
