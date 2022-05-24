import { SongUpdateManyWithoutPlaylistsInput } from "./SongUpdateManyWithoutPlaylistsInput";

export type PlaylistUpdateInput = {
  description?: string | null;
  songs?: SongUpdateManyWithoutPlaylistsInput;
  title?: string | null;
};
