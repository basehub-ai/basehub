import { Toolbar } from "basehub/next-toolbar";
import "./global.css";
import type { Metadata } from "next";
import { Suspense } from "react";

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
      <Suspense>
        <Toolbar />
      </Suspense>
      <body>{children}</body>
    </html>
  );
}
