import { AlbumListRelationFilter } from "../album/AlbumListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SongListRelationFilter } from "../song/SongListRelationFilter";

export type ArtistWhereInput = {
  albums?: AlbumListRelationFilter;
  id?: StringFilter;
  imagePath?: StringNullableFilter;
  name?: StringNullableFilter;
  songs?: SongListRelationFilter;
};
