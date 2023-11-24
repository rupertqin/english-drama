"use client";
import { AudioPlayer } from "@/components";
import { Episode } from "@/types";

export default function AudioPlayerWrapper(episode: Episode) {
  const src = `/sounds/${episode.id}.m4a`;
  const cover = `/img/album/${episode.albumId}.jpeg`;
  return (
    <>
      <AudioPlayer
        key={1}
        currentSong={{ title: episode.title, src }}
        cover={cover}
        songCount={1}
        songIndex={1}
        onNext={() => 1}
        onPrev={() => 1}
      />
    </>
  );
}
