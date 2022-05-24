import { User } from "../user/User";
import { Song } from "../song/Song";

export type Playlist = {
  createdAt: Date;
  createdBy?: User | null;
  description: string | null;
  id: string;
  songs?: Array<Song>;
  title: string | null;
  updatedAt: Date;
};
