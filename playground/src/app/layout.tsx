import "./global.css";
import type { Metadata } from "next";
import { Toolbar } from "basehub/next-toolbar";

export const metadata: Metadata = {
  title: "BaseHub SDK Playground",
  description: "The first AI-native headless cms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Toolbar />
      <body>{children}</body>
    </html>
  );
}
