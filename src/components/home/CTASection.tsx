"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Calendar, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
        alt="La Villa Angélie"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            Votre événement d&apos;exception
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-white mt-4 mb-6 leading-tight">
            Commençons à créer
            <br />
            <em className="text-gold not-italic">votre moment unique</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto mb-12">
            Disponibilités, tarifs, visite du lieu — notre équipe répond à
            toutes vos questions et construit avec vous un événement à votre
            image.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pre-reservation"
              className="group flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-xl hover:shadow-gold/30"
            >
              <Calendar size={15} />
              Vérifier les disponibilités
            </Link>
            <a
              href="tel:+33XXXXXXXXX"
              className="group flex items-center gap-3 border border-white/50 hover:border-white text-white px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <Phone size={15} />
              Nous appeler
            </a>
          </div>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal delay={0.5} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-60">
            {[
              "Traiteur libre",
              "Parking 50 places",
              "30 min de Paris",
              "Jusqu'à 350 invités",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gold rounded-full" />
                <span className="text-white text-xs tracking-widest uppercase">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
