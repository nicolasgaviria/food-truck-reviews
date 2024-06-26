export const formatDistance = (distanceMeters: number): string => {
  const distanceKilometers = distanceMeters / 1000;
  return `${distanceKilometers.toFixed(1)}km away`;
};
