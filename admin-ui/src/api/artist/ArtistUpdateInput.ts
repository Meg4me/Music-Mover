import { AlbumUpdateManyWithoutArtistsInput } from "./AlbumUpdateManyWithoutArtistsInput";
import { SongUpdateManyWithoutArtistsInput } from "./SongUpdateManyWithoutArtistsInput";

export type ArtistUpdateInput = {
  albums?: AlbumUpdateManyWithoutArtistsInput;
  imagePath?: string | null;
  name?: string | null;
  songs?: SongUpdateManyWithoutArtistsInput;
};
