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
    <footer className="bg-[#F8FAFC] py-12 px-16 w-full flex justify-center items-center fixed bottom-0 h-[50px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo & Company Name using Heading (H4) */}
        <Heading level="h4">{logo}</Heading>
        <div className="flex flex-row items-center md:items-start">
          {/* Copyright using Paragraph with Medium 500 */}
          <Paragraph variant="small" className="font-medium">
            {companyName}
          </Paragraph>
          <Paragraph variant="small">
            &copy; {new Date().getFullYear()} All rights reserved.
          </Paragraph>
        </div>

        {/* Navigation Links using Paragraph with Medium 500 */}
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          {links.map((link, index) => (
            <Paragraph
              key={index}
              variant="small"
              className="font-medium text-[#64748B]"
            >
              <a href={link.href} className="hover:text-gray-700">
                {link.label}
              </a>
            </Paragraph>
          ))}
        </nav>

        {/* Optional Buttons for Newsletter or Links */}
        {showButtons && (
          <Button variant="primary" size="sm">
            Subscribe to Newsletter
          </Button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
