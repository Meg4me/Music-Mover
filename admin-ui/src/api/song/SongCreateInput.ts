import { AlbumCreateNestedManyWithoutSongsInput } from "./AlbumCreateNestedManyWithoutSongsInput";
import { ArtistCreateNestedManyWithoutSongsInput } from "./ArtistCreateNestedManyWithoutSongsInput";
import { PlaylistCreateNestedManyWithoutSongsInput } from "./PlaylistCreateNestedManyWithoutSongsInput";
import { UserCreateNestedManyWithoutSongsInput } from "./UserCreateNestedManyWithoutSongsInput";
import { OriginWhereUniqueInput } from "../origin/OriginWhereUniqueInput";

export type SongCreateInput = {
  album?: AlbumCreateNestedManyWithoutSongsInput;
  artist?: ArtistCreateNestedManyWithoutSongsInput;
  inPlaylist?: PlaylistCreateNestedManyWithoutSongsInput;
  likedBy?: UserCreateNestedManyWithoutSongsInput;
  origin?: OriginWhereUniqueInput | null;
  title?: string | null;
};
