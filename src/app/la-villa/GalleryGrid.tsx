"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/la-villa-angelie-83.jpg", alt: "Allée florale lumière naturelle", category: "Intérieur" },
  { src: "/images/la-villa-angelie-78.jpg", alt: "Grande salle dressée", category: "Intérieur" },
  { src: "/images/la-villa-angelie-99.jpg", alt: "Grande salle colonnes", category: "Intérieur" },
  { src: "/images/la-villa-angelie-77.jpg", alt: "Salle avec mur vert déco or", category: "Intérieur" },
  { src: "/images/la-villa-angelie-74.jpg", alt: "Table close-up fleurs dorées", category: "Art de la table" },
  { src: "/images/la-villa-angelie-79.jpg", alt: "Centre de table bougie or", category: "Art de la table" },
  { src: "/images/la-villa-angelie-109.jpg", alt: "Tables dressées salle lumineuse", category: "Art de la table" },
  { src: "/images/la-villa-angelie-96.jpg", alt: "Terrasse couverte dressée", category: "Terrasses" },
  { src: "/images/la-villa-angelie-91.jpg", alt: "Terrasse extérieure mobilier blanc", category: "Terrasses" },
  { src: "/images/la-villa-angelie-113.jpg", alt: "Terrasse cocktail extérieur", category: "Terrasses" },
  { src: "/images/la-villa-angelie-87.jpg", alt: "Entrée avec arche et lions", category: "Mariage" },
  { src: "/images/la-villa-angelie-88.jpg", alt: "Arche florale roses rouges", category: "Mariage" },
  { src: "/images/la-villa-angelie-81.jpg", alt: "Allée cérémonie extérieure", category: "Mariage" },
  { src: "/images/la-villa-angelie-83 (1).jpg", alt: "Entrée décorée fleurs blanches", category: "Mariage" },
  { src: "/images/la-villa-angelie-86.jpg", alt: "Porte entrée décoration florale", category: "Mariage" },
  { src: "/images/la-villa-angelie-75.jpg", alt: "Salle vue intérieure allée", category: "Mariage" },
  { src: "/images/la-villa-angelie-102.jpg", alt: "Décoration florale verdoyante", category: "Mariage" },
  { src: "/images/la-villa-angelie-112.jpg", alt: "Mur de fleurs roses", category: "Mariage" },
  { src: "/images/la-villa-angelie-76.jpg", alt: "Composition florale colonne dorée", category: "Mariage" },
  { src: "/images/la-villa-angelie-111.jpg", alt: "Décoration intérieure", category: "Intérieur" },
  { src: "/images/la-villa-angelie-96 (1).jpg", alt: "Terrasse dressée vue large", category: "Terrasses" },
  { src: "/images/la-villa-angelie-103.jpg", alt: "Espace événementiel", category: "Intérieur" },
  { src: "/images/la-villa-angelie-104.jpg", alt: "Détail décoration", category: "Mariage" },
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
                src={filtered[lightbox].src}
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
