import "./globals.css";
import { Playfair_Display, Noto_Sans_JP } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata = {
  title: "LYNO CAFE",
  description: "light your new ordinary",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${playfair.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
