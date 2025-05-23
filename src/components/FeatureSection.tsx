import React from "react";
import Card from "./Card";
import Heading from "./Heading";

const features = [
  {
    id: 1,
    image: "/images/nike1.png",
    title: "Nike Air Max 90",
    price: "$120",
    description: "Classic cushioning and style for everyday wear.",
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: 2,
    image: "/images/nike2.png",
    title: "Nike Air Force 1",
    price: "$110",
    description: "Timeless design meets all-day comfort.",
    sizes: ["6", "7", "8", "9"],
  },
  {
    id: 3,
    image: "/images/nike3.png",
    title: "Nike React Infinity",
    price: "$130",
    description: "Responsive and stable for your daily runs.",
    sizes: ["8", "9", "10", "11"],
  },
  {
    id: 4,
    image: "/images/nike4.png",
    title: "Nike Pegasus Trail",
    price: "$125",
    description: "Trail-ready durability and comfort.",
    sizes: ["7", "8", "9", "10", "12"],
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <Heading level="h2" className="mb-10 text-center text-[#1E293B]">
        Featured Shoes
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map(({ id, image, title, price, description, sizes }) => (
          <Card
            key={id}
            image={image}
            title={title}
            price={price}
            description={description}
            sizes={sizes}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
