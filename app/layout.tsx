import type { Metadata } from "next";
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
        <header className="text-3xl font-bold p-5 border-b-2">
          英语戏剧
          <small>English Drama</small>
        </header>

        <div>{children}</div>
      </body>
    </html>
  );
}
