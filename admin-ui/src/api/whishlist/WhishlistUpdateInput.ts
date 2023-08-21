import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhishlistUpdateInput = {
  listing?: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
