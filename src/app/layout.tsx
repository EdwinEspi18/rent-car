import type {Metadata} from "next";

import "./globals.css";
import {Inter as FontSans} from "next/font/google";

import {HeaderMain} from "@/components/header-main";
import PatternBg from "@/components/ui/patter-bg";
import {Toaster} from "@/components/ui/sonner";
import {cn} from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    template: "Rent Car | %s",
    default: "Rent Car - Bookings",
  },
  description:
    "Descubre la libertad de viajar a tu manera con [Nombre de la Empresa]. Ofrecemos una amplia gama de vehículos de calidad para satisfacer todas tus necesidades de transporte. Tarifas transparentes, reservas sencillas y servicio al cliente excepcional. ¡Haz tu reserva hoy y vive la experiencia de explorar con confianza y estilo!",
  keywords: ["rent a car", "rent car", "Rent car", "Rent a car"],
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark container relative m-auto grid min-h-screen grid-rows-[auto,1fr,auto] overflow-x-hiddenw bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <PatternBg />
        <HeaderMain />
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} rent_car
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
