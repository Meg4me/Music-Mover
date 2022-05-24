import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SongUpdateManyWithoutPlaylistsInput } from "./SongUpdateManyWithoutPlaylistsInput";

export type PlaylistUpdateInput = {
  createdBy?: UserWhereUniqueInput | null;
  description?: string | null;
  songs?: SongUpdateManyWithoutPlaylistsInput;
  title?: string | null;
};
