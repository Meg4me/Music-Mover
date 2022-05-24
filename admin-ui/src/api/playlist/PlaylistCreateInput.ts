import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SongCreateNestedManyWithoutPlaylistsInput } from "./SongCreateNestedManyWithoutPlaylistsInput";

export type PlaylistCreateInput = {
  createdBy?: UserWhereUniqueInput | null;
  description?: string | null;
  songs?: SongCreateNestedManyWithoutPlaylistsInput;
  title?: string | null;
};
