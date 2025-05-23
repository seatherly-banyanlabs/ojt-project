// Card.tsx
import React from "react";
import Button from "./Button";

interface CardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  sizes: string[];
}

const Card: React.FC<CardProps> = ({ image, title, price, description, sizes }) => {
  return (
    <div className="bg-white border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-md transition w-full max-w-sm flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4 rounded-md" />

      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-teal-600 font-bold">{price}</span>
      </div>

      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {sizes.map((size) => (
          <span
            key={size}
            className="text-sm px-3 py-1 rounded-full border border-gray-300 bg-gray-50"
          >
            {size}
          </span>
        ))}
      </div>

      <Button className="mt-auto w-full">Add to Cart</Button>
    </div>
  );
};

export default Card;