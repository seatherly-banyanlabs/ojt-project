import { useState } from 'react';
import Button from '../components/Button';
import { Menu, X } from 'lucide-react'; // swap if you're using a different icon lib
import { Link as ScrollLink } from 'react-scroll';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: 'About', to: 'hero' },
    { label: 'Product', to: 'features' },
    { label: 'Contact', to: 'footer' },
    { label: 'Sign Up', to: 'footer' } // can be empty or footer
  ];

  return (
    <header className="w-full border-b shadow-sm sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-slate-700">Logo</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.label}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <Button
                variant="link"
                className="font-medium text-base leading-none text-slate-500 hover:text-teal-600 hover:underline underline-offset-4 transition-colors"
              >
                {link.label}
              </Button>
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-500 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.label}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                <Button
                  variant="link"
                  className="text-slate-500 hover:text-teal-600 hover:underline underline-offset-4 transition-colors w-full text-left"
                >
                  {link.label}
                </Button>
              </ScrollLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
