import { SongCreateNestedManyWithoutPlaylistsInput } from "./SongCreateNestedManyWithoutPlaylistsInput";

export type PlaylistCreateInput = {
  description?: string | null;
  songs?: SongCreateNestedManyWithoutPlaylistsInput;
  title?: string | null;
};
