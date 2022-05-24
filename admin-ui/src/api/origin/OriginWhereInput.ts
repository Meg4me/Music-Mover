import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SongListRelationFilter } from "../song/SongListRelationFilter";

export type OriginWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  imagePath?: StringNullableFilter;
  name?: StringNullableFilter;
  songs?: SongListRelationFilter;
};
