import React, { useState } from "react";
import Head from "next/head";
import Autocomplete from "react-google-autocomplete";
import haversineDistance from "haversine-distance";
import { FoodTruck, FoodTruckWithDistance, useFetchFoodTrucks } from "@/api";
import FoodTruckList from "@/components/FoodTruckList";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const Home: React.FC = () => {
  const { data: foodTrucks, isLoading, isError } = useFetchFoodTrucks();

  const [closestTrucks, setClosestTrucks] = useState<FoodTruckWithDistance[]>(
    []
  );

  const handleLocationSelect = (latitude: number, longitude: number) => {
    if (foodTrucks) {
      const locationCoordinates = { latitude, longitude };

      const trucksWithDistance = foodTrucks.map((truck) => {
        const truckCoordinates = {
          latitude: parseFloat(truck.latitude),
          longitude: parseFloat(truck.longitude),
        };

        return {
          ...truck,
          distance: haversineDistance(locationCoordinates, truckCoordinates),
        };
      });

      const sortedTrucks = trucksWithDistance
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

      setClosestTrucks(sortedTrucks);
    }
  };

  if (isLoading) {
    return null;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <Head>
        <title>Find a nearby food truck!</title>
      </Head>
      <div className="w-96 mx-auto my-8">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-2xl font-bold text-center">
            Find a nearby food truck in SF!
          </h1>
          <Autocomplete
            apiKey={apiKey}
            className="h-12 text-neutral-200 bg-neutral-700 px-4 rounded border border-neutral-300"
            onPlaceSelected={(place) => {
              if (place) {
                handleLocationSelect(
                  place.location.lat(),
                  place.location.lng()
                );
              }
            }}
            options={{
              types: [],
              componentRestrictions: { country: "us" },
            }}
          />
          <FoodTruckList foodTrucks={closestTrucks} />
        </div>
      </div>
    </>
  );
};

export default Home;
