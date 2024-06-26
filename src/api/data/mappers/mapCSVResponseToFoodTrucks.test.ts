import { mapCSVResponseToFoodTrucks } from "./mapCSVResponseToFoodTrucks";
import { FoodTruck } from "../types";

describe("mapCSVResponseToFoodTrucks", () => {
  it("maps CSV response to FoodTruck objects correctly", () => {
    const csvData = [
      {
        locationid: "1234",
        Applicant: "Best Food Truck",
        FacilityType: "Truck",
        Address: "123 Food St, San Francisco, CA",
        FoodItems: "Burgers:Fries",
        Latitude: "37.7749",
        Longitude: "-122.4194",
      },
      {
        locationid: "5678",
        Applicant: "Yummy Food Cart",
        FacilityType: "Push Cart",
        Address: "456 Snack Ave, San Francisco, CA",
        FoodItems: "Hot Dogs:Pretzels",
        Latitude: "37.7750",
        Longitude: "-122.4185",
      },
    ];

    const expectedResult: FoodTruck[] = [
      {
        locationId: "1234",
        applicant: "Best Food Truck",
        facilityType: "Truck",
        address: "123 Food St, San Francisco, CA",
        foodItems: ["Burgers", "Fries"],
        latitude: "37.7749",
        longitude: "-122.4194",
      },
      {
        locationId: "5678",
        applicant: "Yummy Food Cart",
        facilityType: "Push Cart",
        address: "456 Snack Ave, San Francisco, CA",
        foodItems: ["Hot Dogs", "Pretzels"],
        latitude: "37.7750",
        longitude: "-122.4185",
      },
    ];

    const result = mapCSVResponseToFoodTrucks(csvData);

    expect(result).toEqual(expectedResult);
  });
});
