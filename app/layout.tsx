import type { Metadata } from "next";
import "./globals.css";

// Remove the local font imports and use CSS instead
export const metadata: Metadata = {
  title: "Aidan Vyas | Quantitative Research & Artificial Alpha",
  description:
    "Quantitative researcher and founder of Artificial Alpha, building AI-powered financial analysts.",
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
