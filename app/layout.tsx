import type { Metadata } from "next";
import { Caveat, Geist, Inter } from "next/font/google";
import { ChatWidget } from "@/src/components/chat/ChatWidget";
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

export const metadata: Metadata = {
  title: "Mohit Walia | Full Stack Developer",
  description:
    "I design and develop modern web applications, AI-powered solutions, and automation systems that help businesses grow faster and work smarter.",
  icons: {
    icon: [{ url: "/websiteassets/favicon.ico" }],
    apple: "/websiteassets/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} ${handwritten.variable} h-full`}
    >
      <body className="min-h-full bg-background font-sans font-medium text-foreground antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
