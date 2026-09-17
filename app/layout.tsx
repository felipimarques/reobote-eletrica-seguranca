import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REOBOTE | Elétrica & Segurança — Santo André | 5.0★ no Google",
  description:
    "Reobote Elétrica & Segurança em Santo André. Nota 5.0 no Google com 33 avaliações. CFTV, elétrica NBR 5410, fechaduras digitais, manutenção preventiva. Chame no WhatsApp (11) 94344-3190.",
  keywords: [
    "eletricista Santo André",
    "CFTV",
    "segurança eletrônica",
    "quadro elétrico",
    "fechadura digital",
    "Reobote",
  ],
  openGraph: {
    title: "REOBOTE Elétrica & Segurança — Proteção e energia",
    description:
      "Soluções completas em elétrica e segurança eletrônica. 5.0★ no Google (33 avaliações).",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
