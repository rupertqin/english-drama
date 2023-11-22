import { Album } from "@/types";

export default function Album(album: Album) {
  return (
    <div className="flex-col p-2">
      <img
        className="sm:w-auto sm:h-auto"
        src={album.cover || `/img/album/${album.id}.jpeg`}
        alt=""
      />
      <div>
        <h4>{album.title}</h4>
        <p>{album.subtitle}</p>
        <p>
          {album.time}|{album.date}
        </p>
      </div>
    </div>
  );
}
