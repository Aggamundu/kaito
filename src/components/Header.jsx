import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/illustration",label: "Illustration" },
  { to: "/covers",label: "Covers" },
  { to: "/bvlgari",label: "BVLGARI" },
  { to: "/about",label: "About Me" },
  { to: "/contact",label: "Contact" },
];

export default function Header() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `hover:text-darkgray duration-300 transition-all text-base block py-2 ${isActive ? "text-darkgray" : "text-lightgray"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-10 border-b border-lightgray bg-white">
      <div className="flex flex-row items-center justify-between w-full px-4 py-4 sm:flex-col sm:justify-center">
        <NavLink to="/" className="text-lg">
          JESSIE XU
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden sm:block mt-[6px] sm:order-2">
          <ul className="flex space-x-[15px]">
            {navLinks.map(({ to,label }) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) =>
                  `hover:text-darkgray duration-300 transition-all text-base ${isActive ? "text-darkgray" : "text-lightgray"}`
                }>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger / X button - mobile only */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="sm:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative w-5 h-3 block">
            <span
              className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-current rounded-full -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-out ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="px-4 pb-4 pt-2 bg-white border-t border-lightgray">
          <ul className="flex flex-col space-y-0">
            {navLinks.map(({ to,label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={linkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
