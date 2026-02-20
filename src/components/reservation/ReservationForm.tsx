"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2, Calendar, Users, Mail, Phone } from "lucide-react";

const reservationSchema = z.object({
  firstName: z.string().min(2, "Prénom requis (min. 2 caractères)"),
  lastName: z.string().min(2, "Nom requis (min. 2 caractères)"),
  email: z.string().email("Adresse email invalide"),
  phone: z
    .string()
    .regex(
      /^(\+33|0)[0-9]{9}$/,
      "Numéro de téléphone invalide (ex: 0612345678)"
    ),
  eventType: z.string().min(1, "Veuillez sélectionner un type d'événement"),
  eventDate: z.string().min(1, "Date requise"),
  guestCount: z.coerce
    .number()
    .min(10, "Minimum 10 invités")
    .max(350, "Maximum 350 invités"),
  message: z.string().optional(),
});

type ReservationData = z.input<typeof reservationSchema>;

const eventTypes = [
  { value: "mariage", label: "Mariage" },
  { value: "anniversaire", label: "Anniversaire" },
  { value: "seminaire", label: "Séminaire / Congrès" },
  { value: "bapteme", label: "Baptême / Communion" },
  { value: "cocktail", label: "Cocktail / Soirée d'entreprise" },
  { value: "autre", label: "Autre événement" },
];

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ReservationData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationData) => {
    setSubmitting(true);
    // Simulate API call / email send
    await new Promise((resolve) => setTimeout(resolve, 1800));
    console.log("Reservation data:", data);
    setSubmitting(false);
    setSubmitted(true);
  };

  // Get tomorrow as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gold/10 flex items-center justify-center mb-8"
        >
          <CheckCircle size={40} className="text-gold" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-3xl font-semibold text-charcoal mb-4"
        >
          Demande envoyée avec succès
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-warm-gray max-w-md leading-relaxed mb-8"
        >
          Merci pour votre intérêt pour La Villa Angélie. Notre équipe
          examinera votre demande et vous recontactera dans les{" "}
          <strong className="text-charcoal">24 heures ouvrées</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-3 text-sm text-warm-gray"
        >
          <p>Un email de confirmation a été envoyé à votre adresse.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-gold hover:text-gold-dark underline underline-offset-4 transition-colors"
          >
            Envoyer une autre demande
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal info */}
      <div>
        <h3 className="font-serif text-lg text-charcoal mb-5 flex items-center gap-2">
          <span className="w-6 h-6 bg-gold text-white text-xs flex items-center justify-center font-sans font-medium">
            1
          </span>
          Vos coordonnées
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First name */}
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-xs tracking-wide text-warm-gray uppercase">
              Prénom *
            </Label>
            <Input
              id="firstName"
              placeholder="Marie"
              {...register("firstName")}
              className={`border-[#E8E0D5] focus:border-gold focus-visible:ring-gold/30 bg-white placeholder:text-warm-gray/50 ${
                errors.firstName ? "border-red-400" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last name */}
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-xs tracking-wide text-warm-gray uppercase">
              Nom *
            </Label>
            <Input
              id="lastName"
              placeholder="Dupont"
              {...register("lastName")}
              className={`border-[#E8E0D5] focus:border-gold focus-visible:ring-gold/30 bg-white placeholder:text-warm-gray/50 ${
                errors.lastName ? "border-red-400" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs tracking-wide text-warm-gray uppercase">
              <Mail size={10} className="inline mr-1" />
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="marie@exemple.fr"
              {...register("email")}
              className={`border-[#E8E0D5] focus:border-gold focus-visible:ring-gold/30 bg-white placeholder:text-warm-gray/50 ${
                errors.email ? "border-red-400" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs tracking-wide text-warm-gray uppercase">
              <Phone size={10} className="inline mr-1" />
              Téléphone *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              {...register("phone")}
              className={`border-[#E8E0D5] focus:border-gold focus-visible:ring-gold/30 bg-white placeholder:text-warm-gray/50 ${
                errors.phone ? "border-red-400" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Event details */}
      <div>
        <h3 className="font-serif text-lg text-charcoal mb-5 flex items-center gap-2">
          <span className="w-6 h-6 bg-gold text-white text-xs flex items-center justify-center font-sans font-medium">
            2
          </span>
          Votre événement
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Event type */}
          <div className="space-y-2 sm:col-span-3 md:col-span-1">
            <Label className="text-xs tracking-wide text-warm-gray uppercase">
              Type d&apos;événement *
            </Label>
            <Select onValueChange={(val) => setValue("eventType", val)}>
              <SelectTrigger className="border-[#E8E0D5] focus:ring-gold/30 bg-white text-charcoal">
                <SelectValue placeholder="Sélectionner..." />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.eventType && (
              <p className="text-red-500 text-xs">{errors.eventType.message}</p>
            )}
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="eventDate" className="text-xs tracking-wide text-warm-gray uppercase">
              <Calendar size={10} className="inline mr-1" />
              Date souhaitée *
            </Label>
            <Input
              id="eventDate"
              type="date"
              min={minDate}
              {...register("eventDate")}
              className={`border-[#E8E0D5] focus:border-gold focus-visible:ring-gold/30 bg-white text-charcoal ${
                errors.eventDate ? "border-red-400" : ""
              }`}
            />
            {errors.eventDate && (
              <p className="text-red-500 text-xs">{errors.eventDate.message}</p>
            )}
          </div>

          {/* Guest count */}
          <div className="space-y-2">
            <Label htmlFor="guestCount" className="text-xs tracking-wide text-warm-gray uppercase">
              <Users size={10} className="inline mr-1" />
              Nombre d&apos;invités *
            </Label>
            <Input
              id="guestCount"
              type="number"
              min={10}
              max={350}
              placeholder="ex: 120"
              {...register("guestCount")}
              className={`border-[#E8E0D5] focus:border-gold focus-visible:ring-gold/30 bg-white placeholder:text-warm-gray/50 ${
                errors.guestCount ? "border-red-400" : ""
              }`}
            />
            {errors.guestCount && (
              <p className="text-red-500 text-xs">{String(errors.guestCount.message)}</p>
            )}
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs tracking-wide text-warm-gray uppercase">
          Message / Précisions (optionnel)
        </Label>
        <Textarea
          id="message"
          placeholder="Décrivez votre projet : thème, besoins spécifiques, questions sur les prestations..."
          rows={4}
          {...register("message")}
          className="border-[#E8E0D5] focus:border-gold focus-visible:ring-gold/30 bg-white placeholder:text-warm-gray/50 resize-none"
        />
      </div>

      {/* GDPR note */}
      <p className="text-xs text-warm-gray/70 leading-relaxed">
        Vos données sont utilisées uniquement pour traiter votre demande et ne
        seront jamais cédées à des tiers. Conformément au RGPD, vous disposez
        d&apos;un droit d&apos;accès et de rectification à tout moment.
      </p>

      {/* Submit */}
      <Button
        type="submit"
        disabled={submitting}
        className="w-full bg-gold hover:bg-gold-dark text-white py-6 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 rounded-none"
      >
        {submitting ? (
          <span className="flex items-center gap-3">
            <Loader2 size={16} className="animate-spin" />
            Envoi en cours...
          </span>
        ) : (
          "Envoyer ma demande de devis"
        )}
      </Button>
    </form>
  );
}
