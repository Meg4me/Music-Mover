import { Song } from "../song/Song";
import { Playlist } from "../playlist/Playlist";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likedSongs?: Array<Song>;
  playlists?: Array<Playlist>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
