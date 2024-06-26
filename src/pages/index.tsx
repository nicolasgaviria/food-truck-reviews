import React, { useState } from "react";
import Head from "next/head";
import { useFetchFoodTrucks } from "@/api";

const Home: React.FC = () => {
  const { data: _foodTrucks, isLoading, error } = useFetchFoodTrucks();

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
      </div>
    </>
  );
};

export default Home;
