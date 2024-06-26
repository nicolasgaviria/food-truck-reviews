import { useQuery } from "react-query";
import { fetchFoodTrucks } from "@/api";
import { FoodTruck } from "../types";

export const useFetchFoodTrucks = () => {
  return useQuery<FoodTruck[], Error>("foodTrucks", fetchFoodTrucks);
};
