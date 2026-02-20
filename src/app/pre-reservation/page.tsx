import { Metadata } from "next";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { MapPin, Clock, Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pré-réservation | La Villa Angélie",
  description:
    "Demandez votre devis pour un mariage, séminaire ou événement privé à La Villa Angélie. Vérifiez les disponibilités et obtenez une réponse sous 24h.",
};

const infos = [
  {
    icon: Clock,
    title: "Réponse rapide",
    desc: "Sous 24h ouvrées, notre équipe vous contacte.",
  },
  {
    icon: Phone,
    title: "Accompagnement",
    desc: "Un interlocuteur dédié pour votre événement.",
  },
  {
    icon: MapPin,
    title: "Visite possible",
    desc: "Sur rendez-vous, venez découvrir nos espaces.",
  },
];

const inclus = [
  "Location de la salle principale (230 m²)",
  "Terrasse couverte (80 m²) en option",
  "Matériel audio et vidéo inclus",
  "Parking privé sécurisé (50 places)",
  "Espace vestiaire et sanitaires privatisés",
  "Accès aux services partenaires",
];

export default function PreReservationPage() {
  return (
    <div className="pt-20 min-h-screen bg-ivory">
      {/* Page header */}
      <div className="bg-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal/80" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            Étape 1
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mt-3 mb-4">
            Pré-réservation
          </h1>
          <div className="w-14 h-px bg-gold mx-auto mt-4 mb-6" />
          <p className="text-white/60 text-lg font-light max-w-xl mx-auto">
            Complétez ce formulaire pour vérifier nos disponibilités et recevoir
            une proposition personnalisée.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Sidebar info */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                {infos.map((info, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                      <info.icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal text-sm mb-1">
                        {info.title}
                      </h4>
                      <p className="text-warm-gray text-sm">{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15}>
              <div className="h-px bg-gradient-to-r from-gold/40 to-transparent" />
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <h3 className="font-serif text-lg text-charcoal mb-5">
                  Inclus dans chaque réservation
                </h3>
                <ul className="space-y-3">
                  {inclus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-warm-gray">
                      <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Mini gallery */}
            <ScrollReveal direction="left" delay={0.25}>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/clearpix_1771610222883.png"
                  alt="Art de la table"
                  className="w-full h-32 object-cover"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/clearpix_1771609408920.png"
                  alt="Centre de table"
                  className="w-full h-32 object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <div className="bg-white p-8 md:p-12 shadow-sm border border-[#E8E0D5]">
                <ReservationForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
