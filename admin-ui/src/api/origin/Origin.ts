import { Song } from "../song/Song";

export type Origin = {
  createdAt: Date;
  description: string | null;
  id: string;
  imagePath: string | null;
  name: string | null;
  songs?: Array<Song>;
  updatedAt: Date;
};
