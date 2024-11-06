import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Only Bank",
  description: "THis is a bank website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
