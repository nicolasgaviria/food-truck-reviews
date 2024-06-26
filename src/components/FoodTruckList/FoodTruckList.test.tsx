import React from "react";
import { render, screen } from "@testing-library/react";
import FoodTruckList from "./FoodTruckList";
import { FoodTruckWithDistance } from "@/api";

describe("FoodTruckList", () => {
  const mockFoodTrucks: FoodTruckWithDistance[] = [
    {
      locationId: "1234",
      applicant: "Best Food Truck",
      address: "123 Food St, San Francisco, CA",
      foodItems: ["Burgers", "Fries", "Soda"],
      facilityType: "Truck",
      latitude: "37.7749",
      longitude: "-122.4194",
      distance: 4176.809218161696,
    },
    {
      locationId: "5678",
      applicant: "Yummy Food Cart",
      address: "456 Snack Ave, San Francisco, CA",
      foodItems: ["Hot Dogs", "Pretzels", "Soda"],
      facilityType: "Truck",
      latitude: "37.7750",
      longitude: "-122.4185",
      distance: 12345.6789,
    },
  ];

  it("renders the list of food trucks", () => {
    render(<FoodTruckList foodTrucks={mockFoodTrucks} />);

    // Check if the food truck names are rendered
    expect(screen.getByText("Best Food Truck")).toBeInTheDocument();
    expect(screen.getByText("Yummy Food Cart")).toBeInTheDocument();

    // Check if the addresses are rendered
    expect(
      screen.getByText("123 Food St, San Francisco, CA")
    ).toBeInTheDocument();
    expect(
      screen.getByText("456 Snack Ave, San Francisco, CA")
    ).toBeInTheDocument();

    // Check if the distances are rendered
    expect(screen.getByText("4.2km away")).toBeInTheDocument();
    expect(screen.getByText("12.3km away")).toBeInTheDocument();

    // Check if the food items are rendered
    expect(screen.getByText("Burgers")).toBeInTheDocument();
    expect(screen.getByText("Hot Dogs")).toBeInTheDocument();
  });

  it("renders the Google Maps link with correct URL", () => {
    render(<FoodTruckList foodTrucks={mockFoodTrucks} />);

    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute(
      "href",
      "https://www.google.com/maps/search/?api=1&query=37.7749%2C-122.4194"
    );
    expect(links[1]).toHaveAttribute(
      "href",
      "https://www.google.com/maps/search/?api=1&query=37.7750%2C-122.4185"
    );
  });
});
