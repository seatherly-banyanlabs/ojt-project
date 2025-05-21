import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  level: HeadingLevel;
  children?: React.ReactNode;
}

const baseStyles: Record<HeadingLevel, string> = {
  h1: "text-[48px] md:text-[32px] font-bold leading-[1.1] text-[#1E293B]",
  h2: "text-[36px] md:text-[28px] font-bold leading-[1.2] text-[#1E293B]",
  h3: "text-[24px] md:text-[20px] font-semibold leading-[1.3] text-[#1E293B]",
  h4: "text-[20px] md:text-[18px] font-semibold leading-[1.4] text-[#1E293B]",
};

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  const Tag = level;
  return <Tag className={baseStyles[level]}>{children}</Tag>;
};

const HeadingSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
   
      <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl z-0" />

   
      <div className="relative px-28 py-22 bg-white rounded-sm shadow-2xl inline-block text-center">
        <Heading level="h1">Step Into Comfort & Style</Heading>
      </div>
    </div>
  );
};

export default HeadingSection;