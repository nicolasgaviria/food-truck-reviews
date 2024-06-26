import React, { useState } from "react";
import Head from "next/head";
import Autocomplete from "react-google-autocomplete";
import haversineDistance from "haversine-distance";
import { FoodTruck, useFetchFoodTrucks } from "@/api";
import FoodTruckList from "@/components/FoodTruckList";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const Home: React.FC = () => {
  const { data: foodTrucks, isLoading, error } = useFetchFoodTrucks();

  const [closestTrucks, setClosestTrucks] = useState<FoodTruck[]>([]);

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <Head>
        <title>Find a nearby food truck!</title>
      </Head>
      <div>
        <h1>Find Closest Food Trucks</h1>
        <Autocomplete
          apiKey={apiKey}
          style={{ width: "90%" }}
          onPlaceSelected={({ geometry: { location } }) =>
            handleLocationSelect(location.lat(), location.lng())
          }
          options={{
            types: [],
            componentRestrictions: { country: "us" },
          }}
        />
        <FoodTruckList foodTrucks={closestTrucks} />
      </div>
    </>
  );
};

export default Home;
