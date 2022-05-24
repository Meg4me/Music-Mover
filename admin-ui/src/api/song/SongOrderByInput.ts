import { SortOrder } from "../../util/SortOrder";

export type SongOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  originId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
