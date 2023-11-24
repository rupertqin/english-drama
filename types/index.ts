export interface Album {
  id: number | string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  cover: string;
}
export interface Episode {
  id: string;
  albumId: string;
  title: string;
  description: string;
  date: string;
  time: string;
}
