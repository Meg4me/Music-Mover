import { Artist } from "../artist/Artist";
import { Song } from "../song/Song";

export type Album = {
  artist?: Artist | null;
  createdAt: Date;
  description: string | null;
  id: string;
  songs?: Array<Song>;
  title: string | null;
  updatedAt: Date;
};
