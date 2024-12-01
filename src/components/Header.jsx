import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header 
      className="w-full flex items-center justify-between px-3 py-4 lg:px-16 
      lg:py-4 fixed z-20 bg-white shadow-lg">
      <NavLink 
        to="/" 
        className="text-black text-lg font-semibold hover:text-themePurple tracking-[4px] 
        uppercase"
      >
        Godspower
      </NavLink>

      <div>
        <Link 
          to="/projects" 
          className="text-black hover:text-themePurple text-16px no-underline"
        >
          Projects
        </Link>
      </div>
    </header>
  );
}

export default Header;
