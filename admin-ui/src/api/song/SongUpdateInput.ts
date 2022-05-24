import { AlbumUpdateManyWithoutSongsInput } from "./AlbumUpdateManyWithoutSongsInput";
import { ArtistUpdateManyWithoutSongsInput } from "./ArtistUpdateManyWithoutSongsInput";
import { PlaylistUpdateManyWithoutSongsInput } from "./PlaylistUpdateManyWithoutSongsInput";
import { UserUpdateManyWithoutSongsInput } from "./UserUpdateManyWithoutSongsInput";
import { OriginWhereUniqueInput } from "../origin/OriginWhereUniqueInput";

export type SongUpdateInput = {
  album?: AlbumUpdateManyWithoutSongsInput;
  artist?: ArtistUpdateManyWithoutSongsInput;
  inPlaylist?: PlaylistUpdateManyWithoutSongsInput;
  likedBy?: UserUpdateManyWithoutSongsInput;
  origin?: OriginWhereUniqueInput | null;
  title?: string | null;
};
