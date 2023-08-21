import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhishlistWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
