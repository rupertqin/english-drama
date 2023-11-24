import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "英语戏剧 - English Drama",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="max-w-7xl mx-auto text-3xl font-bold py-5 border-b-2 text-amber-500 mb-5">
          <Link href={"/"}>
            英语戏剧
            <small className="ml-2 text-base">English Drama</small>
          </Link>
        </header>

        <div className="max-w-7xl mx-auto ">{children}</div>
      </body>
    </html>
  );
}
