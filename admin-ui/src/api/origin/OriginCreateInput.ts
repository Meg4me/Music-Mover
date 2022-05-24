import { SongCreateNestedManyWithoutOriginsInput } from "./SongCreateNestedManyWithoutOriginsInput";

export type OriginCreateInput = {
  description?: string | null;
  imagePath?: string | null;
  name?: string | null;
  songs?: SongCreateNestedManyWithoutOriginsInput;
};
