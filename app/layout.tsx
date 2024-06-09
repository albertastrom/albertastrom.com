import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import { Lexend } from "next/font/google";
import { Poppins } from "next/font/google";


import "./globals.css";



// const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const crimson = Crimson_Pro({ weight: "400", subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Albert Astrom",
  description: "Albert Astrom's personal website.",
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
        <link rel="preload" href="/Mona-Sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* prevents website from being indexed by search engines */}
        <meta name="robots" content="noindex"></meta>
      </head>
      <body className="">{children}</body>
    </html>
  );
}
