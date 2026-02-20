"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/clearpix_1771609179109.png",
    alt: "Allée florale cérémonie",
    span: "col-span-2 row-span-2",
    caption: "Cérémonie — Allée florale",
  },
  {
    src: "/images/clearpix_1771609848058.png",
    alt: "Façade lions arche fleurie",
    span: "col-span-1 row-span-1",
    caption: "La Villa Angélie",
  },
  {
    src: "/images/clearpix_1771609408920.png",
    alt: "Centre de table floral doré",
    span: "col-span-1 row-span-1",
    caption: "Art de la table",
  },
  {
    src: "/images/clearpix_1771609791319.png",
    alt: "Hall d'entrée colonnes arche",
    span: "col-span-1 row-span-1",
    caption: "Hall d'entrée",
  },
  {
    src: "/images/clearpix_1771610025546.png",
    alt: "Terrasse couverte dressée",
    span: "col-span-2 row-span-1",
    caption: "Terrasse couverte — 80 m²",
  },
];

export function GallerySection() {
  return (
    <section className="py-28 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            Nos Espaces
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mt-4 mb-4">
            La Villa en Images
          </h2>
          <div className="w-14 h-px bg-gold mx-auto mt-6" />
        </ScrollReveal>

        {/* Asymmetric gallery grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px] md:h-[700px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={`${img.span} relative overflow-hidden group cursor-pointer`}
                whileHover={{ zIndex: 10 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-charcoal/40 flex items-end p-5"
                >
                  <span className="text-white text-sm font-light tracking-wide border-b border-gold/60 pb-1">
                    {img.caption}
                  </span>
                </motion.div>

                {/* Gold corner on hover */}
                <div className="absolute top-3 right-3 w-0 h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-5 h-px bg-gold mb-1" />
                  <div className="w-px h-5 bg-gold ml-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <Link
            href="/la-villa"
            className="group inline-flex items-center gap-3 text-charcoal text-sm tracking-wide font-medium border-b border-charcoal pb-0.5 hover:border-gold hover:text-gold transition-all duration-300"
          >
            Voir toute la galerie
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1.5"
            />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
