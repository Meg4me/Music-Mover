import { Origin as TOrigin } from "../api/origin/Origin";

export const ORIGIN_TITLE_FIELD = "name";

export const OriginTitle = (record: TOrigin): string => {
  return record.name || record.id;
};
