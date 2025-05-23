import React from "react";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

interface FooterProps {
  logo: string;
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ logo, companyName }) => {
  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200 w-full px-6 md:px-16 py-8 text-[#64748B]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-6 text-sm">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full space-y-4 md:space-y-0">
          <Heading level="h4" className="font-bold text-gray-900">
            {logo}
          </Heading>
          <div className="flex space-x-6">
            {["About", "Products", "Contact", "Support"].map((label, i) => (
              <span key={i} className="cursor-default hover:text-gray-700">
                {label}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-sm space-y-4 md:space-y-0">
          <Paragraph variant="small">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </Paragraph>
          <div className="flex space-x-6">
            <span className="cursor-default hover:text-gray-700">Privacy</span>
            <span className="cursor-default hover:text-gray-700">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
