import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: 'Men', to: 'men' },
    { label: 'Women', to: 'women' },
    { label: 'Kids', to: 'kids' },
    { label: 'Collections', to: 'collections' },
  ];

  return (
    <header className="w-full h-24 shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-slate-900">ShoeStyle</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-lg font-semibold text-slate-600">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.label}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-teal-600 transition-colors"
            >
              {link.label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="signin"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-teal-600 hover:text-teal-700 transition-colors"
          >
            Sign In
          </ScrollLink>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-500 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
  {menuOpen && (
  <div className="md:hidden px-6 pb-4 bg-white shadow-md rounded-b-md">
    <nav className="flex flex-col gap-6 text-lg font-semibold text-slate-600">
      {navLinks.map((link) => (
        <ScrollLink
          key={link.label}
          to={link.to}
          smooth={true}
          duration={500}
          offset={-80}
          onClick={() => setMenuOpen(false)}
          className="hover:text-teal-600 transition-colors cursor-pointer"
        >
          {link.label}
        </ScrollLink>
      ))}
      <ScrollLink
        to="signin"
        smooth={true}
        duration={500}
        offset={-80}
        onClick={() => setMenuOpen(false)}
        className="text-teal-600 hover:text-teal-700 transition-colors cursor-pointer"
      >
        Sign In
      </ScrollLink>
    </nav>
  </div>
)}

    </header>
  );
};

export default Header;
