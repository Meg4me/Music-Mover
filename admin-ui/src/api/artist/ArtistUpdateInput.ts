import { AlbumUpdateManyWithoutArtistsInput } from "./AlbumUpdateManyWithoutArtistsInput";
import { SongUpdateManyWithoutArtistsInput } from "./SongUpdateManyWithoutArtistsInput";

export type ArtistUpdateInput = {
  albums?: AlbumUpdateManyWithoutArtistsInput;
  name?: string | null;
  songs?: SongUpdateManyWithoutArtistsInput;
};
