import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "link";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: "w-[120px] h-[40px] text-[16px]",
  md: "w-[150px] h-[55px] text-[16px]",
  lg: "w-[200px] h-[56px] text-[16px]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  className,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-[6px] font-medium font-inter transition-colors duration-200 text-center";

  const variantClasses =
    variant === "primary"
      ? "bg-[#0D9488] text-white hover:bg-[#0C827A]"
      : "text-[#0D9488] underline hover:text-[#0C827A] bg-transparent";

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses,
        disabledClasses,
        className
      )}
      
    >
      {children}
    </button>
  );
}
