import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nirnaya - Empowering Nepali Voters",
    template: "%s | Nirnaya",
  },
  description:
    "Nirnaya empowers Nepali citizens to make informed voting decisions through candidate education, voting guidance, and election awareness. Your voice matters - vote wisely.",
  keywords: [
    "Nepal",
    "voting",
    "election",
    "candidates",
    "democracy",
    "voter education",
    "निर्णय",
  ],
  authors: [{ name: "Nirnaya Team" }],
  creator: "Nirnaya",
  publisher: "Nirnaya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nirnaya.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ne-NP": "/ne",
    },
  },
  openGraph: {
    title: "Nirnaya - Empowering Nepali Voters",
    description:
      "Make informed voting decisions with comprehensive candidate information and voting guidance for Nepal's elections.",
    url: "https://nirnaya.app",
    siteName: "Nirnaya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirnaya - Empowering Nepali Voters",
    description:
      "Make informed voting decisions with comprehensive candidate information and voting guidance for Nepal's elections.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
