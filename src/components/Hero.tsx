import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Image from "../../src/Screenshot 2025-05-19 134152.png";

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 py-12 md:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 h-full">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
          <Heading level="h1" className="text-[36px] md:text-[48px]">
            Step Into Comfort & Style
          </Heading>

          <Paragraph
            as="p"
            variant="body"
            className="text-[#4e4f50] text-base md:text-lg"
          >
            Discover our new collection of premium shoes designed for both
            comfort and style. Crafted with the finest materials and attention
            to detail.
          </Paragraph>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="primary" size="md">
              Shop Collection
            </Button>
            <Button variant="primary" size="md">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Image}
            alt="Sneakers"
            className="w-full max-w-lg rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
