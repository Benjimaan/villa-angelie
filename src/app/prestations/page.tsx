import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Heart,
  Briefcase,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { AnimatedServicesGrid } from "./AnimatedServicesGrid";

export const metadata: Metadata = {
  title: "Prestations | La Villa Angélie",
  description:
    "Découvrez toutes les prestations de La Villa Angélie : mariages, séminaires, fêtes privées, traiteur libre, animation et stationnement. Devis sur mesure.",
};

const mainServices = [
  {
    icon: Heart,
    title: "Mariages",
    subtitle: "Le jour le plus beau de votre vie",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
    desc: "La Villa Angélie est le cadre idéal pour un mariage d'exception. Espace pour la cérémonie laïque, grande salle décorée, piste de danse et terrasse pour le cocktail — tout est pensé pour que votre journée soit parfaite.",
    features: [
      "Cérémonie laïque possible",
      "Salle jusqu'à 200 assis",
      "Terrasse cocktail",
      "Piste de danse professionnelle",
      "Wedding planner partenaire",
      "Nuit de noces conseillée en hôtels proches",
    ],
    color: "from-rose-50 to-ivory",
  },
  {
    icon: Briefcase,
    title: "Séminaires & Congrès",
    subtitle: "L'excellence au service du professionnel",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85",
    desc: "Un environnement inspirant pour vos réunions de direction, formations, et journées d'études. La modularité de nos espaces s'adapte à vos formats : amphithéâtre, îlots de travail, tables rondes.",
    features: [
      "Vidéo-projection & écran géant",
      "Micro et sonorisation",
      "WiFi haut débit",
      "Pauses catering organisées",
      "Cocktail de clôture",
      "Devis groupe sur mesure",
    ],
    color: "from-slate-50 to-ivory",
  },
  {
    icon: Users,
    title: "Fêtes Privées",
    subtitle: "Anniversaires, baptêmes et galas",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=85",
    desc: "Anniversaires mémorables, soirées d'entreprise, baptêmes et communions : la Villa Angélie se transforme selon vos envies. Notre espace de 350 m² total offre des configurations infiniment variées.",
    features: [
      "Décoration personnalisée",
      "Buffets et cocktails dînatoires",
      "Animations enfants disponibles",
      "Accès traiteur extérieur",
      "Éclairage d'ambiance",
      "Espace vestiaire dédié",
    ],
    color: "from-amber-50 to-ivory",
  },
];


export default function PrestationsPage() {
  return (
    <div className="pt-20 min-h-screen bg-ivory">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=85"
          alt="Prestations La Villa Angélie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium mb-4">
            Ce que nous proposons
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white">
            Nos Prestations
          </h1>
          <div className="w-14 h-px bg-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Main services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 space-y-28">
        {mainServices.map((service, i) => (
          <ScrollReveal key={i} delay={0.05}>
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gold text-white px-4 py-2 flex items-center gap-2">
                  <service.icon size={14} />
                  <span className="text-xs tracking-widest uppercase font-medium">
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                  {service.subtitle}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mt-3 mb-5">
                  {service.title}
                </h2>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-warm-gray leading-relaxed mb-8">{service.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {service.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-charcoal">
                      <CheckCircle size={13} className="text-gold shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pre-reservation"
                  className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300"
                >
                  Demander un Devis
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Additional services */}
      <div className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-14">
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
              Services inclus
            </span>
            <h2 className="font-serif text-3xl font-semibold text-white mt-3">
              Et aussi…
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mt-5" />
          </ScrollReveal>

          <AnimatedServicesGrid />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-ivory py-20 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-semibold text-charcoal mb-4">
            Votre projet est unique
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto mb-8">
            Parlez-nous de votre événement et nous construirons ensemble une
            proposition sur-mesure adaptée à vos envies et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pre-reservation"
              className="bg-gold hover:bg-gold-dark text-white px-10 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300"
            >
              Demander un Devis
            </Link>
            <Link
              href="/contact"
              className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-10 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300"
            >
              Nous Contacter
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
