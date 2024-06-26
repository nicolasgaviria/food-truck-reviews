import mockAxios from "jest-mock-axios";
import { fetchFoodTrucks } from "./fetchFoodTrucks";
import { FoodTruck } from "../types";

jest.mock("axios");

describe("fetchFoodTrucks", () => {
  it("fetches food trucks and maps the response correctly", async () => {
    const csvData = `
locationid,Applicant,FacilityType,Address,FoodItems,Latitude,Longitude
1234,Best Food Truck,Truck,123 Food St, San Francisco, CA,Burgers, Fries,37.7749,-122.4194
5678,Yummy Food Cart,Push Cart,456 Snack Ave, San Francisco, CA,Hot Dogs, Pretzels,37.7750,-122.4185
`;

    const expectedResult: FoodTruck[] = [
      {
        locationid: "1234",
        Applicant: "Best Food Truck",
        FacilityType: "Truck",
        Address: "123 Food St, San Francisco, CA",
        FoodItems: "Burgers, Fries",
        Latitude: "37.7749",
        Longitude: "-122.4194",
      },
      {
        locationid: "5678",
        Applicant: "Yummy Food Cart",
        FacilityType: "Push Cart",
        Address: "456 Snack Ave, San Francisco, CA",
        FoodItems: "Hot Dogs, Pretzels",
        Latitude: "37.7750",
        Longitude: "-122.4185",
      },
    ];

    mockAxios.get.mockResolvedValue({ data: csvData });

    const result = await fetchFoodTrucks();

    expect(result).toEqual(expectedResult);
  });
});
