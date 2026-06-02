import Link from "next/link";

export default async function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        fontFamily: "sans-serif",
      }}
    >
      <Link href="/client">Client</Link>
      <Link href="/pump">Pump</Link>
    </div>
  );
}
