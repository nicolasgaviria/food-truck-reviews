import React from "react";
import { FoodTruck } from "@/api";

interface FoodTruckListProps {
  foodTrucks: FoodTruck[];
}

const FoodTruckList: React.FC<FoodTruckListProps> = ({ foodTrucks }) => {
  return (
    <ul>
      {foodTrucks.map((truck) => (
        <li key={truck.locationId}>
          <h3>{truck.applicant}</h3>
          <p>{truck.facilityType}</p>
          <p>{truck.address}</p>
          <p>{truck.foodItems}</p>
        </li>
      ))}
    </ul>
  );
};

export default FoodTruckList;
