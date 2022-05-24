import { AlbumUpdateManyWithoutSongsInput } from "./AlbumUpdateManyWithoutSongsInput";
import { ArtistUpdateManyWithoutSongsInput } from "./ArtistUpdateManyWithoutSongsInput";
import { OriginUpdateManyWithoutSongsInput } from "./OriginUpdateManyWithoutSongsInput";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";

export type SongUpdateInput = {
  album?: AlbumUpdateManyWithoutSongsInput;
  artist?: ArtistUpdateManyWithoutSongsInput;
  origin?: OriginUpdateManyWithoutSongsInput;
  playlist?: PlaylistWhereUniqueInput | null;
  title?: string | null;
};
