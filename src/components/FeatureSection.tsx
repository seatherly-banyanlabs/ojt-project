import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Card from "./Card";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconPosition?: "top" | "left";
}

const features: Feature[] = [
  {
    id: 1,
    title: "Nike Air Max 90",
    description: "Classic cushioning and style for everyday wear.",
    icon: (
      <img
        src="/images/nike1.png"
        alt="Nike Air Max 90"
        className="w-20 h-auto mx-auto"
      />
    ),
    iconPosition: "top",
  },
  {
    id: 2,
    title: "Nike Air Force 1",
    description: "Timeless design meets all-day comfort.",
    icon: (
      <img
        src="/images/nike2.png"
        alt="Nike Air Force 1"
        className="w-20 h-auto mx-auto"
      />
    ),
    iconPosition: "top",
  },
  {
    id: 3,
    title: "Nike React Infinity",
    description: "Responsive and stable for your daily runs.",
    icon: (
      <img
        src="/images/nike3.png"
        alt="Nike React Infinity"
        className="w-20 h-auto mx-auto"
      />
    ),
    iconPosition: "top",
  },
  {
    id: 4,
    title: "Nike Pegasus Trail",
    description: "Trail-ready durability and comfort.",
    icon: (
      <img
        src="/images/nike4.png"
        alt="Nike Pegasus Trail"
        className="w-20 h-auto mx-auto"
      />
    ),
    iconPosition: "top",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <Heading level="h2" className="mb-10 text-center text-[#1E293B]">
        &nbsp;
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{features.map(({ id, title, description, icon, iconPosition }) => (
  <Card key={id} icon={icon} iconPosition={iconPosition}>
    <Heading
      level="h3"
      className="mb-2 text-[#1E293B] text-2xl"
    >
      {title}
    </Heading>
    <Paragraph
      variant="body"
      className="text-[#1E293B] text-base"
    >
      {description}
    </Paragraph>
  </Card>
))}
      </div>
    </section>
  );
};

export default FeatureSection;
