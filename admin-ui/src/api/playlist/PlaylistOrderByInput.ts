import { SortOrder } from "../../util/SortOrder";

export type PlaylistOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
