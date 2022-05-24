import { AlbumCreateNestedManyWithoutArtistsInput } from "./AlbumCreateNestedManyWithoutArtistsInput";
import { SongCreateNestedManyWithoutArtistsInput } from "./SongCreateNestedManyWithoutArtistsInput";

export type ArtistCreateInput = {
  albums?: AlbumCreateNestedManyWithoutArtistsInput;
  name?: string | null;
  songs?: SongCreateNestedManyWithoutArtistsInput;
};
