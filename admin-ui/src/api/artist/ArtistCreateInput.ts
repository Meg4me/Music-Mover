import { AlbumCreateNestedManyWithoutArtistsInput } from "./AlbumCreateNestedManyWithoutArtistsInput";
import { SongCreateNestedManyWithoutArtistsInput } from "./SongCreateNestedManyWithoutArtistsInput";

export type ArtistCreateInput = {
  albums?: AlbumCreateNestedManyWithoutArtistsInput;
  imagePath?: string | null;
  name?: string | null;
  songs?: SongCreateNestedManyWithoutArtistsInput;
};
