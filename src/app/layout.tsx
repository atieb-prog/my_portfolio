import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-var",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-var",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-var",
});

export const metadata: Metadata = {
  title: "Atieb Ur Rehman — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React.js, Next.js, Node.js, and MongoDB. MERN stack projects, RBAC systems, and real-time applications.",
  openGraph: {
    title: "Atieb Ur Rehman — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React.js, Next.js, Node.js, and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} font-body bg-base text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}