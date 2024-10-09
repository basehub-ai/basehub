import "./global.css";
import type { Metadata } from "next";
import { Toolbar } from "basehub/next-toolbar";

export const metadata: Metadata = {
  title: "BaseHub SDK Playground",
  description: "The first AI-native headless cms.",
  viewport: {
    height: "device-height",
    initialScale: 1,
    width: "device-width",
  },
  icons: {
    icon: "/next.svg",
    shortcut: "/next.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toolbar />
    </html>
  );
}
