import { Metadata } from "next";
import { albums, episodes } from "@/constant";
import AudioPlayerWrapper from "./AudioPlayerWrapper";
import { Episode } from "@/types";

export const metadata: Metadata = {
  title: "英语戏剧 - English Drama-ddddddd",
};

function getData(id: string): Episode {
  let episode = episodes.find((episode) => episode.id === id);
  if (episode) return episode;
  episode = episodes.find((episode) => episode.albumId === id);
  return episode as Episode;
}

export default function PlayPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const episode = getData(id);
  return (
    <>
      <AudioPlayerWrapper {...episode} />
    </>
  );
}
