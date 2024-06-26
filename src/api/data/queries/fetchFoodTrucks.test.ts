import mockAxios from "jest-mock-axios";
import { fetchFoodTrucks } from "./fetchFoodTrucks";
import { FoodTruck } from "../types";

jest.mock("axios");

describe("fetchFoodTrucks", () => {
  it("fetches food trucks and maps the response correctly", async () => {
    const csvData = `locationid,Applicant,FacilityType,Address,FoodItems,Latitude,Longitude
1234,Best Food Truck,Truck,123 Food St,Burgers,37.7749,-122.4194
5678,Yummy Food Cart,Push Cart,456 Snack Ave,Hot Dogs,37.7750,-122.4185`;

    const expectedResult: FoodTruck[] = [
      {
        locationId: "1234",
        applicant: "Best Food Truck",
        facilityType: "Truck",
        address: "123 Food St",
        foodItems: "Burgers",
        latitude: "37.7749",
        longitude: "-122.4194",
      },
      {
        locationId: "5678",
        applicant: "Yummy Food Cart",
        facilityType: "Push Cart",
        address: "456 Snack Ave",
        foodItems: "Hot Dogs",
        latitude: "37.7750",
        longitude: "-122.4185",
      },
    ];

    mockAxios.get.mockResolvedValue({ data: csvData });

    const result = await fetchFoodTrucks();

    expect(result).toEqual(expectedResult);
  });
});
