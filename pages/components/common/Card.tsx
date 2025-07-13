import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-2 font-semibold">{title}</h2>
    </div>
  );
};

export default Card;