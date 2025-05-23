import React from "react";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

interface FooterProps {
  logo: string;
  companyName: string;
  links: { label: string; href: string }[];
  showButtons?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  logo,
  companyName,
  links = [],
  showButtons,
}) => {
  return (
    <footer className="bg-[#F8FAFC] !shadow-2xl w-full md:py-8 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        
        {/* Logo and Copyright side-by-side on md+ */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-6 order-2 md:order-1 w-full md:w-auto justify-center md:justify-start">
          <Heading className="!font-extrabold" level="h4">
            {logo}
          </Heading>
          <div className="flex items-center md:items-start text-center md:text-left">
            <Paragraph variant="small" className="font-medium">
              {companyName}
            </Paragraph>
            <Paragraph variant="small">
              &copy; {new Date().getFullYear()} All rights reserved.
            </Paragraph>
          </div>
        </div>

        {/* Links come first on mobile, second on md+ */}
        <nav className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 order-1 md:order-2 w-full md:w-auto justify-center md:justify-start">
          {links.map((link, index) => (
            <Paragraph
              key={index}
              variant="small"
              className="!font-semibold text-[#64748B] w-full text-center"
            >
              <a href={link.href} className="hover:text-gray-700">
                {link.label}
              </a>
            </Paragraph>
          ))}
        </nav>

        {/* Optional Buttons */}
        {showButtons && (
          <div className="flex justify-center md:justify-start order-3 w-full md:w-auto">
            <Button variant="primary" size="sm">
              Subscribe to Newsletter
            </Button>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
