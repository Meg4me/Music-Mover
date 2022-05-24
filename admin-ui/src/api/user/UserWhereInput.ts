import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SongListRelationFilter } from "../song/SongListRelationFilter";
import { PlaylistListRelationFilter } from "../playlist/PlaylistListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likedSongs?: SongListRelationFilter;
  playlists?: PlaylistListRelationFilter;
  username?: StringFilter;
};
