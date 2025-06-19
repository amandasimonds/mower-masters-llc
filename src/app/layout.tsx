import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mower Masters LLC",
  description: "Mower Masters LLC Website",
  keywords: ["small engine repair",
    "lawn mower repair",
    "mower service",
    "yard equipment repair",
    "garden equipment repair",
    "snow blower repair",
    "trimmer repair",
    "chainsaw repair",
    "leaf blower repair",
    "engine tune-up",
    "oil change",
    "blade sharpening",
    "spark plug replacement",
    "air filter replacement",
    "fuel system service",
    "equipment maintenance",
    "Knoxville small engine",
    "outdoor power equipment",
    "lawn equipment service",
    "local engine repair"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
