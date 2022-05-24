import { SortOrder } from "../../util/SortOrder";

export type SongOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  playlistId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
