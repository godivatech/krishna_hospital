import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Krishna Hospital | Advanced Surgery, Safe Motherhood",
  description: "Specialized healthcare provider in Ramanathapuram offering expert surgical and maternity services. Equipped with advanced operation theatre facilities, ICU, and NICU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
