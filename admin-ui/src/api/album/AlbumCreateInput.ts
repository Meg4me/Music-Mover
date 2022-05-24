import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { SongCreateNestedManyWithoutAlbumsInput } from "./SongCreateNestedManyWithoutAlbumsInput";

export type AlbumCreateInput = {
  artist?: ArtistWhereUniqueInput | null;
  description?: string | null;
  imagePath?: string | null;
  songs?: SongCreateNestedManyWithoutAlbumsInput;
  title?: string | null;
};
