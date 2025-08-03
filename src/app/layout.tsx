import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mower Masters Small Engine Repair Knoxville TN Lawn Mower Service",
  description: "Mower Masters Small Engine Repair Knoxville TN Lawn Mower Service",
  keywords: ["small engine repair",
    "engine",
    "knoxville",
    "repair",
    "lawn mower",
    "lawn",
    "local",
    "mobile",
    "mobile service",
    "small engine",
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
