import { Album } from "../album/Album";
import { Artist } from "../artist/Artist";
import { Origin } from "../origin/Origin";
import { Playlist } from "../playlist/Playlist";

export type Song = {
  album?: Array<Album>;
  artist?: Array<Artist>;
  createdAt: Date;
  id: string;
  origin?: Array<Origin>;
  playlist?: Playlist | null;
  title: string | null;
  updatedAt: Date;
};
