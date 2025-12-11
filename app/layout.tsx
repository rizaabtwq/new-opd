import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Кибербезопасность | Проект по ОПД",
  description: "Проект",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
