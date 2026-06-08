import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Sabores do Brasil Cuiabá - Autêntica Culinária Brasileira',
  description: 'Descubra o Restaurante Sabores do Brasil em Cuiabá. Pratos autênticos, ambiente acolhedor e entrega sem contato. Experimente a verdadeira comida brasileira.',
  openGraph: {
    "title": "Sabores do Brasil Cuiabá",
    "description": "Sabor e Tradição da Culinária Brasileira em Cuiabá.",
    "url": "/",
    "siteName": "Sabores do Brasil Cuiabá",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/medium-shot-happy-friends-taking-selfie_23-2149212129.jpg",
        "alt": "Delicious Brazilian Feijoada"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Sabores do Brasil Cuiabá",
    "description": "Sabor e Tradição da Culinária Brasileira em Cuiabá.",
    "images": [
      "http://img.b2bpic.net/free-photo/medium-shot-happy-friends-taking-selfie_23-2149212129.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
