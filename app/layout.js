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
  title: "Archana Caps | Topi Second Original",
  description: "Temukan koleksi topi second original dan semua akun resmi Archana Caps di Klaten, Jawa Tengah.",
  applicationName: "Archana Caps",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Archana Caps | Topi Second Original",
    description: "Koleksi topi second original dari Klaten, Jawa Tengah.",
    siteName: "Archana Caps",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Archana Caps | Topi Second Original",
    description: "Koleksi topi second original dari Klaten, Jawa Tengah.",
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