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
