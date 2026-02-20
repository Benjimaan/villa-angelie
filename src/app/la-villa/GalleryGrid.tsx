"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=85",
    alt: "Grande salle principale",
    category: "Intérieur",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
    alt: "Décoration de mariage",
    category: "Mariage",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85",
    alt: "Tables dressées",
    category: "Art de la table",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=85",
    alt: "Terrasse extérieure",
    category: "Terrasses",
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=85",
    alt: "Piste de danse",
    category: "Intérieur",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=85",
    alt: "Soirée de gala",
    category: "Soirée",
  },
  {
    src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=85",
    alt: "Cocktail terrasse",
    category: "Terrasses",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=85",
    alt: "Cérémonie",
    category: "Mariage",
  },
];

const categories = ["Tout", "Intérieur", "Terrasses", "Mariage", "Soirée", "Art de la table"];

export function GalleryGrid() {
  const [filter, setFilter] = useState("Tout");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "Tout" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const nextImage = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
              filter === cat
                ? "bg-gold text-white"
                : "border border-[#E8E0D5] text-warm-gray hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <AnimatePresence>
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden cursor-pointer aspect-square"
              onClick={() => openLightbox(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/35 transition-all duration-300 flex items-end p-3">
                <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                  {img.alt}
                </span>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-gold text-white text-[9px] tracking-wider px-2 py-0.5 uppercase">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-6 text-white/70 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={filtered[lightbox].src.replace("w=800", "w=1200")}
                alt={filtered[lightbox].alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <p className="text-white/50 text-sm text-center mt-4">
                {filtered[lightbox].alt} · {lightbox + 1} / {filtered.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-6 text-white/70 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
