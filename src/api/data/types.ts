export interface FoodTruckResponse {
  locationid: string;
  Applicant: string;
  FacilityType: string;
  Address: string;
  FoodItems: string;
  Latitude: string;
  Longitude: string;
}

export interface FoodTruck {
  locationId: string;
  applicant: string;
  facilityType: string;
  address: string;
  foodItems: string[];
  latitude: string;
  longitude: string;
}

export interface FoodTruckWithDistance extends FoodTruck {
  distance: number;
}

export interface UserLocation {
  lat: number;
  lng: number;
}
