import { Album } from "../album/Album";
import { Song } from "../song/Song";

export type Artist = {
  albums?: Array<Album>;
  createdAt: Date;
  id: string;
  name: string | null;
  songs?: Array<Song>;
  updatedAt: Date;
};
