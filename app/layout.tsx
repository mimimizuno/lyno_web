import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Sawarabi_Mincho } from "next/font/google";
import { Oswald } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

const sawarabiMincho = Sawarabi_Mincho({
  variable: "--font-sawarabi-mincho",
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lyno-web.vercel.app"),
  title: {
    default: "Lyno Cafe | Specialty Coffee in Kojiya",
    template: "%s | Lyno Cafe",
  },
  description: "Specialty coffee stand near Kojiya Station.",
  openGraph: {
    title: "Lyno Cafe",
    description: "Specialty coffee from Kojiya.",
    images: ["/ogp.jpg"],
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={[
        oswald.variable,
        libre.variable,
        notoSansJP.variable,
        sawarabiMincho.variable,
      ].join(" ")}
    >
      <body className="font-body bg-base text-white antialiased">
        {children}
      </body>
    </html>
  );
}