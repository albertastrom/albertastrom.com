import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";


// const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Albert Astrom",
  description: "personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://emojicdn.elk.sh/🚅" />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
