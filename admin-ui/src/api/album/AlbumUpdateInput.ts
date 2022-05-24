import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { SongUpdateManyWithoutAlbumsInput } from "./SongUpdateManyWithoutAlbumsInput";

export type AlbumUpdateInput = {
  artist?: ArtistWhereUniqueInput | null;
  description?: string | null;
  imagePath?: string | null;
  songs?: SongUpdateManyWithoutAlbumsInput;
  title?: string | null;
};
