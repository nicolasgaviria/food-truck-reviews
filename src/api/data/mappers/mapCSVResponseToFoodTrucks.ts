import { FoodTruck } from "../types";

export const mapCSVResponseToFoodTrucks = (data: any[]): FoodTruck[] => {
  return data.map((item) => ({ ...item }));
};
