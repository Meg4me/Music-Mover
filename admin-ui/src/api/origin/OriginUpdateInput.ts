import { SongUpdateManyWithoutOriginsInput } from "./SongUpdateManyWithoutOriginsInput";

export type OriginUpdateInput = {
  description?: string | null;
  imagePath?: string | null;
  name?: string | null;
  songs?: SongUpdateManyWithoutOriginsInput;
};
