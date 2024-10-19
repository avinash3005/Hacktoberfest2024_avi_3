import { useState } from 'react';

// Reusable Link component
const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm sm:text-base text-white hover:text-gray-400 uppercase">
    {children}
  </a>
);

// Navbar component
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Links data with text and corresponding URLs
  const links = [
    { text: "portfolio", href: "/portfolio" },
    { text: "about me", href: "/about" },
    { text: "price", href: "/price" },
    { text: "contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white bg-opacity-5 py-2 sm:py-4 md:py-6 lg:py-7 xl:py-7">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Brand Name */}
        <a
          href="#"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold font-lato text-white"
        >
          GRAPHER SHOT.
        </a>

        {/* Navigation Links for larger screens */}
        <div className="hidden sm:flex items-center space-x-10 font-lato">
          {links.map((link) => (
            <NavLink key={link.text} href={link.href}>
              {link.text}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu Button for mobile */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            id="menu-btn"
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-10 space-y-4 mt-4">
          {links.map((link) => (
            <NavLink key={link.text} href={link.href}>
              {link.text}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
