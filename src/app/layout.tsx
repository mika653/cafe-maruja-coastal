import type { Metadata } from "next";
import { Manrope, Cormorant } from "next/font/google";
import "./globals.css";

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const heading = Cormorant({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cafe Maruja — A Beachfront Sanctuary in Boracay",
  description:
    "An intimate beachfront cafe and lounge at Casa Pilar Resort, Station 3 of Boracay. Slow brunch, considered cocktails, and a sunset that does not need a filter.",
  keywords: [
    "Boracay luxury cafe",
    "Casa Pilar Boracay",
    "Boracay sunset cocktails",
    "Boracay beachfront restaurant",
    "Boracay honeymoon",
    "best Boracay date night",
  ],
  openGraph: {
    title: "Cafe Maruja — A Beachfront Sanctuary in Boracay",
    description:
      "Slow brunch, considered cocktails, and an unfiltered sunset on Boracay's quieter beach.",
    type: "website",
    locale: "en_PH",
    siteName: "Cafe Maruja",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${heading.variable} antialiased`}
    >
      <body className="min-h-screen bg-ivory text-slate">{children}</body>
    </html>
  );
}
