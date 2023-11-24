import { Album } from "@/types";

export default function Album(album: Album) {
  return (
    <div className="flex-col">
      <img
        className="sm:w-auto sm:h-auto"
        src={album.cover || `/img/album/${album.id}.jpeg`}
        alt=""
      />
      <div>
        <h4>{album.title}</h4>
        <p>{album.subtitle}</p>
        <p className="text-xs">
          {album.time} | {album.date}
        </p>
      </div>
    </div>
  );
}
