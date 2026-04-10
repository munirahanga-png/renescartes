import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | Renés-Cartes Energy & Management Consulting",
  description: "Meet the specialized leadership team at Renés-Cartes, bridging international expertise with regional insight.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
