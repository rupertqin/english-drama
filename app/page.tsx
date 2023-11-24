import { Metadata } from "next";
import Link from "next/link";
import { Album } from "@/components";
import { albums } from "@/constant";

export const metadata: Metadata = {
  title: "英语戏剧 - English Drama",
};

export default function Home() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
      {albums.map((album, i) => (
        <Link key={i} href={`/drama/play/${album.id}`}>
          <Album {...album}></Album>
        </Link>
      ))}
    </div>
  );
}
