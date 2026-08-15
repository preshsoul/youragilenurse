import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monisola Adejo | UGC Creator in Ontario, Canada",
  description:
    "Ontario-based UGC creator Monisola Adejo creates on-camera video, product demonstrations, voiceovers, product photography and paid social creative for consumer brands.",
  openGraph: {
    title: "Monisola Adejo | UGC Creator in Ontario, Canada",
    description: "On camera. On brief. On point.",
    images: [{ url: "/og-v2.png", width: 1680, height: 945, alt: "Monisola Adejo — UGC Creator, Nurse and Mom." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monisola Adejo | UGC Creator in Ontario, Canada",
    description: "On camera. On brief. On point.",
    images: ["/og-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
