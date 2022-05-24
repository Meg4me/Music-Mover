import { SongUpdateManyWithoutUsersInput } from "./SongUpdateManyWithoutUsersInput";
import { PlaylistUpdateManyWithoutUsersInput } from "./PlaylistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  likedSongs?: SongUpdateManyWithoutUsersInput;
  password?: string;
  playlists?: PlaylistUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
