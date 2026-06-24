import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nass Auto Keys | Автоключар Стара Загора",
  description:
    "Nass Auto Keys – изработка и програмиране на автомобилни ключове, аварийно отключване, имобилайзери, диагностика и софтуерни решения в Стара Загора и региона.",
  keywords: [
    "автоключар Стара Загора",
    "изработка на автомобилни ключове",
    "програмиране на ключове",
    "аварийно отключване",
    "имобилайзер",
    "Nass Auto Keys",
    "ключове Mercedes",
    "ключове BMW",
    "ключове Audi",
    "ключове Volkswagen"
  ],
  openGraph: {
    title: "Nass Auto Keys | Автоключар Стара Загора",
    description:
      "Професионални автоключарски услуги, имобилайзери, диагностика и автомобилна електроника.",
    locale: "bg_BG",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nass Auto Keys",
    description: "Автоключарски услуги, автомобилни ключове, имобилайзери и диагностика.",
    telephone: "+359878441442",
    email: "autokeys.stz@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Стара Загора",
      addressCountry: "BG"
    },
    areaServed: ["Стара Загора", "Казанлък", "Раднево", "Чирпан", "Нова Загора", "България"],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nass-auto-keys.vercel.app",
    priceRange: "$$"
  };

  return (
    <html lang="bg">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
