import type { Metadata } from "next";

export const ogImagePath = "/me/opengraph.png";

export const ogImage = {
  url: ogImagePath,
  width: 1672,
  height: 941,
  alt: "Mohit Walia, Top Rated Plus full stack developer",
};

export function siteMetadataBase() {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (!host) return new URL("http://localhost:3000");
  return new URL(host.startsWith("http") ? host : `https://${host}`);
}

export function socialMetadata({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url?: string;
}): Metadata {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: "Mohit Walia",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImagePath],
    },
  };
}
