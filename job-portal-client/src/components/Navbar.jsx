import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {path: "/", title: "𝐒𝐓𝐀𝐑𝐓 𝐀 𝐒𝐄𝐀𝐑𝐂𝐇"},
    {path: "/my-job", title: "𝐌𝐘 𝐉𝐎𝐁"},
    {path: "salary", title: "𝐒𝐀𝐋𝐀𝐑𝐘 𝐄𝐒𝐓𝐈𝐌𝐀𝐓𝐄"},
    {path: "/post-job", title: "𝐏𝐎𝐒𝐓 𝐀 𝐉𝐎𝐁"},

  ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text font-bold text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30"
          fill="none">
          <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4" />
          <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
        </svg> <span>𝗝𝗼𝗯 𝗝𝘂𝗻𝗰𝘁𝗶𝗼𝗻</span></a>

        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {
            navItems.map(({path, title}) => (
              <li key={path} className="text-lg text-bold">
                <NavLink
                    to={path}
                    className={({ isActive }) => isActive ? "active": ""}
                  >
                    {title}
                  </NavLink>
              </li>

            ))
          }
        </ul>

        {/* signup and login button */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
  <Link to="/login" className="py-2 px-5 border rounded">Log in</Link>
  <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign up</Link>
</div>

{/* mobile menu */}
<div className="md:hidden block">
  <button onClick={handleMenuToggler}>
      {
        isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/>: <FaBarsStaggered className="w-5 
        h-5 text-primary "/>
      }
  </button>
</div>

      </nav>
      {/*navitems for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
  <ul>
    {navItems.map(({ path, title }) => (
      <li key={path} className="text-base text-white first:text-white py-1">
        <NavLink
          to={path}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          {title}
        </NavLink>
      </li>
    ))}

    <li className="text-white py-1"><Link to="/login">Log in</Link></li>
  </ul>
</div>

    </header>
  );
};

export default Navbar;