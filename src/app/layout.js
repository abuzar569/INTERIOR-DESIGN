import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFonts from "next/font/local"

const Gilroy = localFonts({
  src: "./fonts/Gilroy-Medium.e7e7c091.ttf",
  variable: "--font-Gilroy",
  weight: "100-900",
});

const Rimons = localFonts({
  src:"./fonts/RIMONS.otf",
  variable: "--font-Rimons",
  weight:"100-900",
});

const Aghita = localFonts({
  src:"./fonts/Aghita.ttf",
  variable: "--font-Aghita",
  weight:"100-900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${Gilroy.variable} ${Aghita.variable} ${Rimons.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
