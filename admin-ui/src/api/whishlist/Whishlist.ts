import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type Whishlist = {
  createdAt: Date;
  id: string;
  listing?: Listing;
  updatedAt: Date;
  user?: User;
};
