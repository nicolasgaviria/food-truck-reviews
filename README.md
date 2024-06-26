# Food Truck Locator

## Description

This project provides a web application that allows users to find the closest food trucks in San Francisco based on their current location. Users can enter their address, and the app will display the nearest food trucks on a map.

## Features

- Address autocomplete using Google Places API
- Display nearest food trucks with their details
- Show distance from the user's location to the food trucks
- Link to Google Maps for directions

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/food-truck-locator.git
   cd food-truck-locator
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Create Environment Variables**
   Create a .env.local file in the root directory and add your Google API key:

   ```bash
   NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key
   ```

4. **Run the Application**

   ```bash
   yarn dev
   ```

5. **Run Tests**
   ```bash
   yarn test
   ```

## Deployment

The application is deployed on Vercel. You can access it [here](https://food-truck-reviews.vercel.app/).

## Design Decisions and Trade-offs

- **Google Places API:** Chosen for address autocomplete due to its reliability and ease of integration.
- **React Query** Used for data fetching and caching to simplify data management.
- **Tailwind CSS:** Utilized for quick and responsive styling.
- **Environmental Variables:** The Google API key is currently exposed in the client side code, which can lead to security issues. This decision was made to save some time.

## Potential Improvements

- Add filtering options for food trucks (e.g., by cuisine type).
- Implement a more detailed food truck profile page.
- Optimize performance for larger datasets.
- Store the keys in a secure way.

## Future Work

- Integrate user reviews and ratings for food trucks.
- Add a feature to save favorite food trucks.

## License

This project is licensed under the MIT License.
