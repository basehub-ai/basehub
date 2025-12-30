import { Toolbar } from "basehub/next-toolbar";
import "./global.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "BaseHub SDK Playground",
  description: "The first AI-native headless cms.",
};

async function SuspendedDraftMode({ children }: { children: React.ReactNode }) {
  const draftModeInstance = await draftMode();
  if (draftModeInstance.isEnabled) {
    return <Suspense>{children}</Suspense>;
  }
  return children;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SuspendedDraftMode>
        <Suspense>
          <Toolbar />
        </Suspense>
        <body>{children}</body>
      </SuspendedDraftMode>
    </html>
  );
}
