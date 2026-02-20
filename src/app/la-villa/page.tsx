import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { GalleryGrid } from "./GalleryGrid";

export const metadata: Metadata = {
  title: "La Villa | La Villa Angélie",
  description:
    "Découvrez les espaces de La Villa Angélie : grande salle de 230 m², terrasses couvertes et ouvertes, équipements professionnels. Un lieu unique à Montataire.",
};

const spaces = [
  {
    name: "La Grande Salle",
    surface: "230 m²",
    capacity: "200 assis / 350 debout",
    desc: "Espace principal entièrement modulable, baigné de lumière naturelle. Piste de danse intégrée, système son et lumière professionnel, décoration contemporaine et épurée.",
    features: [
      "Piste de danse dédiée",
      "Système son & vidéo",
      "Éclairage d'ambiance",
      "Mobilier inclus",
      "Climatisation / chauffage",
    ],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=85",
  },
  {
    name: "La Terrasse Couverte",
    surface: "80 m²",
    capacity: "100 personnes",
    desc: "Espace de transition idéal pour les cocktails et les pauses. Couverte et fermée, elle accueille un bar mobile sous une structure élégante.",
    features: [
      "Bar mobile intégré",
      "Espace cocktail",
      "Lumières de tente",
      "Connexion haut débit",
    ],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=85",
  },
  {
    name: "La Terrasse Extérieure",
    surface: "60 m²",
    capacity: "Espace libre",
    desc: "Terrasse à ciel ouvert pour profiter des soirées estivales. Idéale pour les photos de mariage, les pauses séminaires ou les apéritifs en plein air.",
    features: [
      "Vue dégagée",
      "Éclairage extérieur",
      "Idéale photos",
      "Accès direct salle",
    ],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85",
  },
];

export default function LaVillaPage() {
  return (
    <div className="pt-20 min-h-screen bg-ivory">
      {/* Hero */}
      <div className="relative h-80 md:h-[500px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=85"
          alt="La Villa Angélie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
            Nos espaces
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white">
            La Villa Angélie
          </h1>
          <div className="w-14 h-px bg-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <ScrollReveal>
          <p className="text-warm-gray text-lg leading-relaxed">
            Située à <strong className="text-charcoal">Montataire</strong>, entre
            Senlis et Chantilly, La Villa Angélie est une salle de réception
            contemporaine rénovée avec soin. Ses <strong className="text-charcoal">330 m²</strong> d&apos;espaces
            modulables accueillent vos événements les plus précieux, du mariage
            intime au grand séminaire d&apos;entreprise.
          </p>
        </ScrollReveal>
      </div>

      {/* Spaces */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="space-y-24">
          {spaces.map((space, i) => (
            <ScrollReveal key={i} delay={0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Surface badge */}
                  <div className="absolute bottom-4 left-4 bg-gold text-white px-4 py-2">
                    <span className="text-lg font-serif font-semibold">
                      {space.surface}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className={i % 2 === 1 ? "lg:pr-0" : ""}>
                  <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                    {space.capacity}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mt-3 mb-5">
                    {space.name}
                  </h2>
                  <div className="w-10 h-px bg-gold mb-6" />
                  <p className="text-warm-gray leading-relaxed mb-8">
                    {space.desc}
                  </p>
                  <ul className="space-y-2">
                    {space.features.map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm text-charcoal"
                      >
                        <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-ivory-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-12">
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
              Galerie complète
            </span>
            <h2 className="font-serif text-3xl font-semibold text-charcoal mt-3">
              Explorez chaque espace
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mt-5" />
          </ScrollReveal>
          <GalleryGrid />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-charcoal py-20 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-semibold text-white mb-6">
            Ce lieu vous correspond ?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Vérifiez nos disponibilités et obtenez un devis personnalisé en
            quelques minutes.
          </p>
          <Link
            href="/pre-reservation"
            className="inline-block bg-gold hover:bg-gold-dark text-white px-12 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300"
          >
            Demander un Devis
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
