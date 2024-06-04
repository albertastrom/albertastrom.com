// Importing React and Tailwind CSS
import React from 'react';



// Define the component
const RandomCityVoyageBanner: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Random City</h1>
        <p className="bg-cyan-600 border-2 border-white shadow text-white text-sm font-bold px-2 py-0.5 rounded-md">
            Voyage in Summer 2022
        </p>
    </div>
  );
};

// Export the component
export default RandomCityVoyageBanner;
