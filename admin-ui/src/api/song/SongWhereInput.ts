import { AlbumListRelationFilter } from "../album/AlbumListRelationFilter";
import { ArtistListRelationFilter } from "../artist/ArtistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaylistListRelationFilter } from "../playlist/PlaylistListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { OriginWhereUniqueInput } from "../origin/OriginWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SongWhereInput = {
  album?: AlbumListRelationFilter;
  artist?: ArtistListRelationFilter;
  id?: StringFilter;
  inPlaylist?: PlaylistListRelationFilter;
  likedBy?: UserListRelationFilter;
  origin?: OriginWhereUniqueInput;
  title?: StringNullableFilter;
};
