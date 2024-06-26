import axios from "axios";
import { APIFunction, APIFunctionNoParams } from "@/api";
import { FoodTruck, FoodTruckResponse } from "../types";
import { mapCSVResponseToFoodTrucks } from "../mappers";
import Papa from "papaparse";

export const fetchFoodTrucks: APIFunctionNoParams<FoodTruck[]> = async () => {
  const response = await axios.get<string>(
    "https://data.sfgov.org/api/views/rqzj-sfat/rows.csv"
  );

  const parsedData = Papa.parse<FoodTruckResponse>(response.data, {
    header: true,
  });

  return mapCSVResponseToFoodTrucks(parsedData.data);
};
