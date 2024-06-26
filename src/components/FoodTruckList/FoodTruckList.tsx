import React from "react";
import { MdDirections } from "react-icons/md";
import { FoodTruckWithDistance } from "@/api";
import { formatDistance } from "@/shared/distance";

interface FoodTruckListProps {
  foodTrucks: FoodTruckWithDistance[];
}

const FoodTruckList: React.FC<FoodTruckListProps> = ({ foodTrucks }) => {
  return (
    <div className="flex flex-col">
      {foodTrucks.map((truck) => (
        <div
          key={truck.locationId}
          className="flex w-full px-2 py-4 border-b border-neutral-600"
        >
          <div className="flex flex-col flex-grow">
            <p className="text-xl font-bold mb-1">{truck.applicant}</p>
            <p className="text-neutral-400 italic">{truck.address}</p>
            <p className="text-neutral-400">{formatDistance(truck.distance)}</p>
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
          <div className="flex flex-col justify-center items-center px-2">
            <a
              className="flex justify-center items-center size-8 rounded-full border border-neutral-100"
              href={`https://www.google.com/maps/search/?api=1&query=${truck.latitude}%2C${truck.longitude}`}
              target="_blank"
              rel="noopener"
            >
              <MdDirections />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodTruckList;
