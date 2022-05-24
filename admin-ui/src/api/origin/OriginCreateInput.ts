import { SongCreateNestedManyWithoutOriginsInput } from "./SongCreateNestedManyWithoutOriginsInput";

export type OriginCreateInput = {
  description?: string | null;
  name?: string | null;
  songs?: SongCreateNestedManyWithoutOriginsInput;
};
