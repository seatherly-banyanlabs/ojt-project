import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
}

const styles: Record<HeadingLevel, string> = {
  h1: "text-[48px] md:text-[32px] font-bold leading-[1.1] text-[#1E293B]",
  h2: "text-[36px] md:text-[28px] font-bold leading-[1.2] text-[#1E293B]",
  h3: "text-[24px] md:text-[20px] font-semibold leading-[1.3] text-[#1E293B]",
  h4: "text-[20px] md:text-[18px] font-semibold leading-[1.4] text-[#1E293B]",
};

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  const Tag = level;
  return <Tag className={styles[level]}>{children}</Tag>;
};

export default Heading;
