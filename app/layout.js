import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://link.archana.co.id"),
  title: "Archana Caps | Topi Second Original",
  description: "Temukan koleksi topi second original dan semua akun resmi Archana Caps di Klaten, Jawa Tengah.",
  applicationName: "Archana Caps",
  keywords: ["Archana Caps", "topi second original", "topi original", "topi second", "topi Klaten"],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Archana Caps | Topi Second Original",
    description: "Koleksi topi second original dari Klaten, Jawa Tengah.",
    siteName: "Archana Caps",
    locale: "id_ID",
    type: "website",
    url: "/",
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Archana Caps — Topi Second Original dari Klaten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archana Caps | Topi Second Original",
    description: "Koleksi topi second original dari Klaten, Jawa Tengah.",
    images: ["/social-preview.jpg"],
  },
};

export const viewport = {
  themeColor: "#090706",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}