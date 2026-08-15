import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  metadataBase: new URL("https://youragilenurse.vercel.app"),
  title: "Monisola Adejo | UGC Creator in Ontario, Canada",
  description:
    "Ontario-based UGC creator Monisola Adejo creates on-camera video, product demonstrations, voiceovers, product photography and paid social creative for consumer brands.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Monisola Adejo UGC",
    title: "Monisola Adejo | UGC Creator in Ontario, Canada",
    description: "On camera. On brief. On point.",
    images: [
      {
        url: "/og-share-v1.jpg",
        width: 1200,
        height: 630,
        alt: "Monisola Adejo — UGC Creator, Nurse and Mom.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monisola Adejo | UGC Creator in Ontario, Canada",
    description: "On camera. On brief. On point.",
    images: ["/og-share-v1.jpg"],
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
      </body>
    </html>
  );
}
