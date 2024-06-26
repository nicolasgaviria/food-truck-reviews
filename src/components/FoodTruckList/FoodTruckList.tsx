import React from "react";
import { FoodTruckWithDistance } from "@/api";
import { formatDistance } from "@/shared";

interface FoodTruckListProps {
  foodTrucks: FoodTruckWithDistance[];
}

const FoodTruckList: React.FC<FoodTruckListProps> = ({ foodTrucks }) => {
  return (
    <div className="flex flex-col">
      {foodTrucks.map((truck) => (
        <div key={truck.locationId} className="flex px-2 py-4">
          <div className="flex flex-col">
            <p className="text-xl font-bold">{truck.applicant}</p>
            <p className="text-neutral-400 italic">{truck.address}</p>
            <p className="text-neutral-400">
              {formatDistance(truck.distance)}
            </p>
            <div className="flex flex-col gap-1 mt-2">
              {truck.foodItems.slice(0, 3).map((type) => (
                <span
                  key={type}
                  className="text-xs text-neutral-300 capitalize"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodTruckList;
