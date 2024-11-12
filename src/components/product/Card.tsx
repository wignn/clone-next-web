
import React from 'react';
import { productInterface } from '../../../types/product';

const FeatureCard:React.FC <productInterface> = ({ title, description }) => {
  return (
    <div className="bg-black border text-gray-700 border-gray-600 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
