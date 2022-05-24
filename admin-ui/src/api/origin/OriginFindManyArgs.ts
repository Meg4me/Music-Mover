import { OriginWhereInput } from "./OriginWhereInput";
import { OriginOrderByInput } from "./OriginOrderByInput";

export type OriginFindManyArgs = {
  where?: OriginWhereInput;
  orderBy?: Array<OriginOrderByInput>;
  skip?: number;
  take?: number;
};
