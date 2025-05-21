import React from "react";
import clsx from "clsx";

type ParagraphVariant = "body" | "small" | "caption";

type ParagraphProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: ParagraphVariant;
  className?: string;
};

const variantClasses: Record<ParagraphVariant, string> = {
  body: "text-[16px] leading-[1.5] font-normal text-[#1E293B]  break-words whitespace-normal",
  small:
    "text-[14px] leading-[1.5] font-normal text-[#64748B]  break-words whitespace-normal",
  caption:
    "text-[12px] leading-[1.5] font-normal text-[#94A3B8]  break-words whitespace-normal",
};

export default function Paragraph({
  children,
  as: Component = "p",
  variant = "body",
  className,
}: ParagraphProps) {
  return (
    <Component className={clsx(variantClasses[variant], className)}>
      {children}
    </Component>
  );
}
