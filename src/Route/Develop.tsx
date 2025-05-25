import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Styles/component.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `block px-2.5 py-2 rounded-sm font-medium transition-all duration-200 transform hover:scale-105 hover:bg-gray-200 hover:text-black hover:shadow-sm hover:shadow-blue-300 ${
    isActive ? "bg-white text-black" : "text-white"
  }`;

  return (
    <div>
      
      <header className="w-full bg-black p-5 sticky top-0 z-50 flex flex-row items-center justify-between">
        
        <div className="group">
          <h1 className="text-white text-2xl hover:cursor-pointer transition-all duration-300 group-hover:font-bold">
            <span className="transition-all duration-300 group-hover:text-blue-500">D</span>
            ebesh <span className="transition-all duration-300 group-hover:text-blue-500">J</span>ha
          </h1>
        </div>

        
        <div className="hidden xl:flex flex-row gap-8 text-md">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/publication" className={navLinkClasses}>Publications</NavLink>
          <NavLink to="/workshop" className={navLinkClasses}>Workshops & Talks</NavLink>
          <NavLink to="/professional" className={navLinkClasses}>Professional Career</NavLink>
          <NavLink to="/dataset" className={navLinkClasses}>DataSet</NavLink>
          <NavLink to="/myworks" className={navLinkClasses}>MyWorks</NavLink>
          <NavLink to="/blogs" className={navLinkClasses}>Blogs</NavLink>
          <NavLink to="/contact" className="bg-white px-2.5 py-2 rounded-sm font-medium hover:scale-105 hover:bg-gray-200 hover:shadow-blue-300">Contact Me</NavLink>
        </div>

        
        <div className="xl:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-black z-40 transform transition-transform duration-300 ease-in-out xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 text-white text-md p-6 pt-[80px]">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/publications" className={navLinkClasses}>Publications</NavLink>
          <NavLink to="/workshops" className={navLinkClasses}>Workshops & Talks</NavLink>
          <NavLink to="/career" className={navLinkClasses}>Professional Career</NavLink>
          <NavLink to="/dataset" className={navLinkClasses}>DataSet</NavLink>
          <NavLink to="/myworks" className={navLinkClasses}>MyWorks</NavLink>
          <NavLink to="/blogs" className={navLinkClasses}>Blogs</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact Me</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
