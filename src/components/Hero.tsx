import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="w-full bg-white !px-8 !py-20 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl px-4 mx-4 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-y-20 gap-x-16">
        
        {/* Left: Text Content */}
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left space-y-10">
          <Heading
            level="h3"
            className="text-[36px] !my-2 sm:text-[42px] md:text-[52px] !font-bold leading-tight"
          >
            Step Into Comfort & Style
          </Heading>

          <Paragraph
            as="p"
            variant="body"
            className="text-[#4e4f50] text-base sm:text-lg md:text-xl max-w-2xl"
          >
            Discover our new collection of premium shoes designed for both comfort and style. Crafted with the finest materials and attention to detail.
          </Paragraph>

          <div className="flex !mt-6 flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
            <Button variant="primary" size="md">
              Shop Collection
            </Button>
            <Button variant="secondary" size="md">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/images/sneakers.png"
            alt="Premium sneakers product shot"
            className="size-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
