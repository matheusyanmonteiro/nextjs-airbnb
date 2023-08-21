import { JsonValue } from "type-fest";

export type Listing = {
  createdAt: Date;
  id: string;
  listingCreatedBy: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  updatedAt: Date;
};
