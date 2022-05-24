import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SongListRelationFilter } from "../song/SongListRelationFilter";

export type AlbumWhereInput = {
  artist?: ArtistWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  imagePath?: StringNullableFilter;
  songs?: SongListRelationFilter;
  title?: StringNullableFilter;
};
