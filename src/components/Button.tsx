import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "link";
  size?: "sm" | "md" | "lg";
  width?: string; // e.g. 'w-40', 'w-auto', etc.
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const baseStyles =
  "rounded-lg font-medium text-[16px] font-['Inter'] transition-colors";

const variantStyles = {
  primary: "bg-[#0D9488] text-white hover:bg-[#0C827A]",
  link: "bg-transparent text-[#0D9488] hover:text-[#0C827A] underline hover:no-underline",
};

const sizeStyles = {
  sm: "px-4 py-3 text-sm", // taller, less wide
  md: "px-5 py-3.5 text-base",
  lg: "px-6 py-4 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  width = "w-auto",
  onClick,
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        width,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
