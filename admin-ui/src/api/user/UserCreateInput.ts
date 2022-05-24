import { SongCreateNestedManyWithoutUsersInput } from "./SongCreateNestedManyWithoutUsersInput";
import { PlaylistCreateNestedManyWithoutUsersInput } from "./PlaylistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  likedSongs?: SongCreateNestedManyWithoutUsersInput;
  password: string;
  playlists?: PlaylistCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
