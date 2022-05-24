import { Song } from "../song/Song";

export type Origin = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  songs?: Array<Song>;
  updatedAt: Date;
};
