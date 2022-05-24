import { SortOrder } from "../../util/SortOrder";

export type AlbumOrderByInput = {
  artistId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imagePath?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
