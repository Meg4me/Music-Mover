import { Album } from "../album/Album";
import { Artist } from "../artist/Artist";
import { Playlist } from "../playlist/Playlist";
import { User } from "../user/User";
import { Origin } from "../origin/Origin";

export type Song = {
  album?: Array<Album>;
  artist?: Array<Artist>;
  createdAt: Date;
  id: string;
  inPlaylist?: Array<Playlist>;
  likedBy?: Array<User>;
  origin?: Origin | null;
  title: string | null;
  updatedAt: Date;
};
