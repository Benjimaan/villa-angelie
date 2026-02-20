"use client";

import { motion } from "framer-motion";
import { ChefHat, Music, Car } from "lucide-react";
import { StaggerContainer, fadeUpItem } from "@/components/common/ScrollReveal";

const services = [
  {
    Icon: ChefHat,
    title: "Restauration libre",
    desc: "Aucun traiteur imposé. Accueil de votre prestataire avec cuisine professionnelle équipée.",
  },
  {
    Icon: Music,
    title: "DJ & Animation",
    desc: "Accès à notre réseau de DJs et animateurs référencés. Ou amenez les vôtres — la sono est de qualité.",
  },
  {
    Icon: Car,
    title: "Stationnement",
    desc: "50 places de parking privé et sécurisé. Accès facile depuis la RN16 et l'A1.",
  },
];

export function AnimatedServicesGrid() {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <motion.div
          key={i}
          variants={fadeUpItem}
          className="border border-white/10 p-8 hover:border-gold/40 transition-all duration-300"
        >
          <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-5">
            <service.Icon size={20} className="text-gold" />
          </div>
          <h3 className="font-serif text-xl text-white font-semibold mb-3">
            {service.title}
          </h3>
          <p className="text-white/55 text-sm leading-relaxed">{service.desc}</p>
        </motion.div>
      ))}
    </StaggerContainer>
  );
}
