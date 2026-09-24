import type { Metadata } from "next";
import { Caveat, Geist, Inter } from "next/font/google";
import { ChatWidget } from "@/src/components/chat/ChatWidget";
import { ScrollToTop } from "@/src/components/layout/ScrollToTop";
import { siteMetadataBase, socialMetadata } from "@/src/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const handwritten = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const title = "Mohit Walia | Full Stack Developer";
const description =
  "Official portfolio of Mohit Walia, a Top Rated Plus full stack developer. Next.js, React, Node.js, AI, automation, cloud, and scalable web applications.";

export const metadata: Metadata = {
  metadataBase: siteMetadataBase(),
  title,
  description,
  ...socialMetadata({ title, description }),
  icons: {
    icon: [{ url: "/websiteassets/favicon.ico" }],
    apple: "/websiteassets/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${inter.variable} ${handwritten.variable} h-full`}
    >
      <body className="min-h-full bg-background font-sans font-medium text-foreground antialiased">
        <ScrollToTop />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
