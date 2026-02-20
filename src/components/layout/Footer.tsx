import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-white font-semibold mb-2">
              La Villa Angélie
            </h3>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-light">
              Lieu de réception d&apos;exception
            </p>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              Un espace de prestige contemporain pour sublimer chaque instant de
              votre vie. Mariages, séminaires et événements privés accueillis
              avec raffinement.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs tracking-[0.25em] uppercase mb-6 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/la-villa", label: "La Villa" },
                { href: "/prestations", label: "Prestations" },
                { href: "/pre-reservation", label: "Pré-réservation" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs tracking-[0.25em] uppercase mb-6 font-medium">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/55 leading-relaxed">
                  Montataire (60160)
                  <br />
                  Oise — entre Senlis et Chantilly
                  <br />
                  30 min de Paris Roissy
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+33XXXXXXXXX"
                  className="text-sm text-white/55 hover:text-gold transition-colors"
                >
                  +33 (0)X XX XX XX XX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold shrink-0" />
                <a
                  href="mailto:contact@villaangelie.fr"
                  className="text-sm text-white/55 hover:text-gold transition-colors"
                >
                  contact@villaangelie.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} La Villa Angélie. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/35 hover:text-gold transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-xs text-white/35 hover:text-gold transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
