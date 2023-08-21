import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhishlistCreateInput = {
  listing: ListingWhereUniqueInput;
  user: UserWhereUniqueInput;
};
