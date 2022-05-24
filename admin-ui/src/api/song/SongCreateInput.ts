import { AlbumCreateNestedManyWithoutSongsInput } from "./AlbumCreateNestedManyWithoutSongsInput";
import { ArtistCreateNestedManyWithoutSongsInput } from "./ArtistCreateNestedManyWithoutSongsInput";
import { OriginCreateNestedManyWithoutSongsInput } from "./OriginCreateNestedManyWithoutSongsInput";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";

export type SongCreateInput = {
  album?: AlbumCreateNestedManyWithoutSongsInput;
  artist?: ArtistCreateNestedManyWithoutSongsInput;
  origin?: OriginCreateNestedManyWithoutSongsInput;
  playlist?: PlaylistWhereUniqueInput | null;
  title?: string | null;
};
