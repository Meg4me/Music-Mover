import { SortOrder } from "../../util/SortOrder";

export type ArtistOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imagePath?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
