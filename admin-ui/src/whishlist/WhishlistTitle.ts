import { Whishlist as TWhishlist } from "../api/whishlist/Whishlist";

export const WHISHLIST_TITLE_FIELD = "id";

export const WhishlistTitle = (record: TWhishlist): string => {
  return record.id || String(record.id);
};
