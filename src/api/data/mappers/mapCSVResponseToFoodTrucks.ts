import { FoodTruck, FoodTruckResponse } from "../types";

export const mapCSVResponseToFoodTrucks = (
  data: FoodTruckResponse[]
): FoodTruck[] => {
  return data.map((foodTruck) => ({
    locationId: foodTruck.locationid,
    applicant: foodTruck.Applicant,
    facilityType: foodTruck.FacilityType,
    address: foodTruck.Address,
    foodItems: foodTruck.FoodItems
      ? foodTruck.FoodItems.split(":").map((type) => type.trim())
      : [],
    latitude: foodTruck.Latitude,
    longitude: foodTruck.Longitude,
  }));
};
