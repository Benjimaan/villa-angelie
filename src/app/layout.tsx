import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "La Villa Angélie | Salle de Mariage & Réception de Prestige",
  description:
    "La Villa Angélie, lieu de réception d'exception à Montataire (60). Mariages, séminaires et événements privés jusqu'à 350 invités. Cadre élégant, terrasses et services haut de gamme. Demandez votre devis.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "location salle mariage prestige",
    "villa événementielle Oise",
    "salle de réception Montataire",
    "mariage Chantilly",
    "séminaire haut de gamme Oise",
    "lieu de réception 350 personnes",
    "villa angélie",
  ],
  openGraph: {
    title: "La Villa Angélie | Lieu de Réception d'Exception",
    description:
      "Célébrez vos moments précieux dans un cadre de prestige. Mariages, séminaires et fêtes privées à 30 min de Paris.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-ivory antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
