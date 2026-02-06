import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quotation Maker",
  description: "Generate a clean, printable quotation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
