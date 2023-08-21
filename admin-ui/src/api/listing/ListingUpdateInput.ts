import { InputJsonValue } from "../../types";

export type ListingUpdateInput = {
  listingCreatedBy?: string;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeAmeneties?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
};
