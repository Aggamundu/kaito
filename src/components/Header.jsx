import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/illustration',label: 'Illustration' },
  { to: '/covers',label: 'Covers' },
  { to: '/bvlgari',label: 'BVLGARI' },
  { to: '/about',label: 'About Me' },
  { to: '/contact',label: 'Contact' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex flex-col items-center justify-center py-4 bg-white border-b border-lightgray">
      <NavLink to="/" className="text-lg">
        JESSIE XU
      </NavLink>
      <nav className="mt-[6px]">
        <ul className="flex space-x-[15px]">
          {navLinks.map(({ to,label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `hover:text-darkgray duration-300 transition-all text-base ${isActive ? 'text-darkgray' : 'text-lightgray'}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}