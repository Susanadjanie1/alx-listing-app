// components/common/Card.tsx

import React from 'react';
import { CardProps } from '../../interfaces'; // Adjust path if necessary based on your actual structure

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded" />}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {price && <p className="text-lg font-bold text-blue-600">GH₵{price}</p>}
     
    </div>
  );
};

export default Card;