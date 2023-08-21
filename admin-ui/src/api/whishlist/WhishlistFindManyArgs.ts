import { WhishlistWhereInput } from "./WhishlistWhereInput";
import { WhishlistOrderByInput } from "./WhishlistOrderByInput";

export type WhishlistFindManyArgs = {
  where?: WhishlistWhereInput;
  orderBy?: Array<WhishlistOrderByInput>;
  skip?: number;
  take?: number;
};
