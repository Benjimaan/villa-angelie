"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  fadeUpItem,
} from "@/components/common/ScrollReveal";
import { Heart, Briefcase, Users, Music, ChefHat, Car } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Mariages",
    description:
      "Vivez le mariage de vos rêves dans un cadre d'exception. Grande salle, terrasses fleuries, piste de danse. Jusqu'à 200 convives assis.",
    tag: "200 invités assis",
  },
  {
    icon: Briefcase,
    title: "Séminaires & Congrès",
    description:
      "Des espaces modulables équipés pour vos réunions, conférences et team-buildings. Sonorisation et vidéo projection incluses.",
    tag: "Matériel AV fourni",
  },
  {
    icon: Users,
    title: "Fêtes Privées",
    description:
      "Anniversaires, baptêmes, galas et soirées d'entreprise. Un lieu unique où chaque détail est maîtrisé pour vos célébrations.",
    tag: "350 personnes debout",
  },
  {
    icon: ChefHat,
    title: "Traiteur Libre",
    description:
      "Aucun traiteur imposé. Venez avec le chef de votre choix ou sélectionnez parmi nos partenaires référencés et vérifiés.",
    tag: "Cuisine professionnelle",
  },
  {
    icon: Music,
    title: "Animation & DJ",
    description:
      "Profitez de notre réseau de DJs, animateurs et orchestres. Une piste de danse dédiée pour des soirées qui durent jusqu'à l'aube.",
    tag: "Partenaires référencés",
  },
  {
    icon: Car,
    title: "Parking & Accès",
    description:
      "50 places de parking sécurisées sur site. Accessible depuis la RN16, à 30 min de Paris CDG. Taxi et navettes partenaires disponibles.",
    tag: "50 places gratuites",
  },
];

export function ServicesSection() {
  return (
    <section className="py-28 bg-ivory-dark relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C2C2C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            Ce que nous offrons
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mt-4 mb-4">
            Des Prestations Sur-Mesure
          </h2>
          <div className="w-14 h-px bg-gold mx-auto mt-6" />
        </ScrollReveal>

        {/* Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className="group bg-white p-8 hover:shadow-xl hover:shadow-charcoal/8 transition-all duration-500 border border-transparent hover:border-gold/20 relative overflow-hidden"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-gold/0 group-hover:border-t-gold/15 transition-all duration-500" />

              {/* Icon */}
              <div className="w-12 h-12 bg-ivory flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                <service.icon
                  size={20}
                  className="text-gold transition-all duration-300"
                />
              </div>

              {/* Tag */}
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold/80 font-medium mb-3 block">
                {service.tag}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-warm-gray text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-14">
          <Link
            href="/prestations"
            className="inline-flex items-center gap-3 border border-charcoal text-charcoal px-10 py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            Toutes nos prestations
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
