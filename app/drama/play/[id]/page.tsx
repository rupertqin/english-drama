import { Metadata } from "next";
import { albums, episodes } from "@/constant";
import AudioPlayerWrapper from "./AudioPlayerWrapper";

export const metadata: Metadata = {
  title: "英语戏剧 - English Drama-ddddddd",
};

function getData(id) {
  let episode = episodes.find((episode) => episode.id === id);
  if (episode) return episode;
  episode = episodes.find((episode) => episode.albumId === id);
  return episode;
}

export default function PlayPage({ params: { id } }) {
  const episode = getData(id);
  return (
    <>
      <AudioPlayerWrapper {...episode} />
    </>
  );
}
