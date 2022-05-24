import { SortOrder } from "../../util/SortOrder";

export type AlbumOrderByInput = {
  artistId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
