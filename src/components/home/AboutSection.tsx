"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-28 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                  src="/images/clearpix_1771609068071.png"
                  alt="Salle de réception La Villa Angélie"
                  className="w-full h-[480px] object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>

              {/* Accent image — overlapping */}
              <div className="absolute -bottom-10 -right-8 w-48 h-48 md:w-64 md:h-64 z-20 overflow-hidden border-4 border-ivory shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/clearpix_1771610222883.png"
                  alt="Art de la table"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gold accent block */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/20 -z-10" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="lg:pl-8">
            <ScrollReveal delay={0.1}>
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
                Notre Histoire
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mt-4 mb-6 leading-tight">
                Un lieu pensé pour{" "}
                <em className="text-gold not-italic">vos plus beaux moments</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="w-14 h-px bg-gold mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="text-warm-gray leading-relaxed mb-6 text-[15px]">
                Nichée à Montataire, à deux pas de Chantilly et à seulement 30 minutes de
                Paris Roissy, <strong className="text-charcoal font-medium">La Villa Angélie</strong> est
                une salle de réception contemporaine rénovée avec soin, alliant
                modernité architecturale et chaleur humaine.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-warm-gray leading-relaxed mb-10 text-[15px]">
                Avec ses <strong className="text-charcoal font-medium">330 m² modulables</strong>,
                ses deux terrasses dont l&apos;une couverte, et sa capacité d&apos;accueil
                jusqu&apos;à <strong className="text-charcoal font-medium">350 invités</strong>,
                elle s&apos;adapte à chaque événement — du mariage intimiste au grand
                séminaire d&apos;entreprise.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/la-villa"
                  className="group inline-flex items-center gap-3 text-charcoal text-sm tracking-wide font-medium border-b border-charcoal pb-0.5 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  Découvrir la Villa
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/pre-reservation"
                  className="inline-flex items-center gap-3 bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-all duration-300"
                >
                  Demander un Devis
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
