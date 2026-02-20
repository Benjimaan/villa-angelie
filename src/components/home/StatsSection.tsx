"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StaggerContainer, fadeUpItem } from "@/components/common/ScrollReveal";

const stats = [
  { value: "330", unit: "m²", label: "d'espace modulable" },
  { value: "350", unit: "", label: "invités accueillis" },
  { value: "3", unit: "", label: "espaces distincts" },
  { value: "30", unit: "min", label: "de Paris Roissy" },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-charcoal py-20 relative overflow-hidden" ref={ref}>
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1
                  ? "lg:border-r lg:border-white/10"
                  : ""
              } px-6 py-4`}
            >
              <div className="font-serif text-5xl md:text-6xl font-semibold text-gold mb-1">
                {stat.value}
                <span className="text-2xl md:text-3xl text-gold/70">{stat.unit}</span>
              </div>
              <p className="text-white/50 text-sm tracking-wide mt-2 uppercase text-[11px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
