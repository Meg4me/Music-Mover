import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SongListRelationFilter } from "../song/SongListRelationFilter";

export type PlaylistWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  songs?: SongListRelationFilter;
  title?: StringNullableFilter;
};
