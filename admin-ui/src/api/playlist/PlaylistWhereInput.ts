import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SongListRelationFilter } from "../song/SongListRelationFilter";

export type PlaylistWhereInput = {
  createdBy?: UserWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  songs?: SongListRelationFilter;
  title?: StringNullableFilter;
};
