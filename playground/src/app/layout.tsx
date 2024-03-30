import "./global.css";
import type { Metadata } from "next";
import { siteOrigin } from "../lib/constants";

export const metadata: Metadata = {
  title: "BaseHub SDK Playground",
  description: "The first AI-native headless cms.",
  viewport: {
    height: "device-height",
    initialScale: 1,
    width: "device-width",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  twitter: {
    card: "summary_large_image",
    creator: "@basehub-ai",
    description: "BaseHub SDK Playground",
    images: [{ width: 1200, height: 630, url: `${siteOrigin}/og.jpg` }],
    site: "@basementstudio",
    title: "BaseHub SDK Playground",
  },
  openGraph: {
    description: "BaseHub SDK Playground",
    images: [{ width: 1200, height: 630, url: `${siteOrigin}/og.jpg` }],
    locale: "en-US",
    siteName: "BaseHub SDK Playground",
    title: "BaseHub SDK Playground",
    type: "website",
    url: siteOrigin,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
