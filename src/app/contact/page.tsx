"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-ivory">
      {/* Header */}
      <div className="bg-charcoal py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
            On vous répond
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mt-3">
            Contact
          </h1>
          <div className="w-14 h-px bg-gold mx-auto mt-4 mb-5" />
          <p className="text-white/60 font-light">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Info side */}
          <div className="lg:col-span-2 space-y-10">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-charcoal mb-6">
                  La Villa Angélie
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <MapPin size={16} className="text-gold mt-1 shrink-0" />
                    <div>
                      <p className="text-charcoal font-medium text-sm mb-1">Adresse</p>
                      <p className="text-warm-gray text-sm leading-relaxed">
                        Montataire (60160), Oise
                        <br />
                        Entre Senlis et Chantilly
                        <br />
                        30 min de Paris Roissy (CDG)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={16} className="text-gold mt-1 shrink-0" />
                    <div>
                      <p className="text-charcoal font-medium text-sm mb-1">Téléphone</p>
                      <a
                        href="tel:+33XXXXXXXXX"
                        className="text-warm-gray text-sm hover:text-gold transition-colors"
                      >
                        +33 (0)X XX XX XX XX
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={16} className="text-gold mt-1 shrink-0" />
                    <div>
                      <p className="text-charcoal font-medium text-sm mb-1">Email</p>
                      <a
                        href="mailto:contact@villaangelie.fr"
                        className="text-warm-gray text-sm hover:text-gold transition-colors"
                      >
                        contact@villaangelie.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock size={16} className="text-gold mt-1 shrink-0" />
                    <div>
                      <p className="text-charcoal font-medium text-sm mb-1">Disponibilités</p>
                      <p className="text-warm-gray text-sm leading-relaxed">
                        Lun – Ven : 9h – 19h
                        <br />
                        Sam : 10h – 17h (sur RDV)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-gold/40 to-transparent" />

            {/* Social */}
            <ScrollReveal direction="left" delay={0.1}>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-warm-gray mb-4">
                  Suivez-nous
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 border border-[#E8E0D5] px-4 py-2.5 text-sm text-warm-gray hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <Instagram size={14} />
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 border border-[#E8E0D5] px-4 py-2.5 text-sm text-warm-gray hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <Facebook size={14} />
                    Facebook
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Map placeholder */}
            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-[#E8E0D5] h-48 flex items-center justify-center relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70"
                  alt="Carte localisation"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 px-6 py-3 text-center">
                    <MapPin size={16} className="text-gold mx-auto mb-1" />
                    <p className="text-xs text-charcoal font-medium tracking-wide">
                      Montataire, Oise (60160)
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <div className="bg-white p-8 md:p-12 border border-[#E8E0D5]">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <Send size={28} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal mb-3">
                      Message envoyé !
                    </h3>
                    <p className="text-warm-gray">
                      Nous vous répondrons dans les meilleurs délais.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-6 text-gold text-sm underline underline-offset-4 hover:text-gold-dark transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-semibold text-charcoal mb-2">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-warm-gray text-sm mb-8">
                      Pour toute question sur nos disponibilités, tarifs ou prestations.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs tracking-wide text-warm-gray uppercase">
                            Prénom *
                          </Label>
                          <Input
                            required
                            placeholder="Marie"
                            className="border-[#E8E0D5] focus:border-gold bg-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs tracking-wide text-warm-gray uppercase">
                            Nom *
                          </Label>
                          <Input
                            required
                            placeholder="Dupont"
                            className="border-[#E8E0D5] focus:border-gold bg-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs tracking-wide text-warm-gray uppercase">
                          Email *
                        </Label>
                        <Input
                          required
                          type="email"
                          placeholder="marie@exemple.fr"
                          className="border-[#E8E0D5] focus:border-gold bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs tracking-wide text-warm-gray uppercase">
                          Sujet *
                        </Label>
                        <Input
                          required
                          placeholder="Question sur les disponibilités..."
                          className="border-[#E8E0D5] focus:border-gold bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs tracking-wide text-warm-gray uppercase">
                          Message *
                        </Label>
                        <Textarea
                          required
                          rows={5}
                          placeholder="Votre message..."
                          className="border-[#E8E0D5] focus:border-gold bg-white resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-gold hover:bg-gold-dark text-white py-6 text-sm tracking-widest uppercase font-medium rounded-none"
                      >
                        {sending ? "Envoi…" : "Envoyer le message"}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
