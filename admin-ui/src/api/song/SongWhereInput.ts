import { AlbumListRelationFilter } from "../album/AlbumListRelationFilter";
import { ArtistListRelationFilter } from "../artist/ArtistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OriginListRelationFilter } from "../origin/OriginListRelationFilter";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SongWhereInput = {
  album?: AlbumListRelationFilter;
  artist?: ArtistListRelationFilter;
  id?: StringFilter;
  origin?: OriginListRelationFilter;
  playlist?: PlaylistWhereUniqueInput;
  title?: StringNullableFilter;
};
