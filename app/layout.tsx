import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abboud Electric & HVAC | Licensed HVAC & Electrical Services",
  description: "Expert HVAC and electrical services. Licensed, insured technicians. Same/next-day service. Free estimates. Call now for AC repair, heating, and electrical work.",
  keywords: "HVAC repair, AC repair, heating repair, electrical services, licensed electrician, HVAC installation, emergency HVAC, air conditioning",
  openGraph: {
    title: "Abboud Electric & HVAC | Licensed HVAC & Electrical Services",
    description: "Expert HVAC and electrical services with same/next-day appointments. Licensed & insured. Get your free estimate today!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
