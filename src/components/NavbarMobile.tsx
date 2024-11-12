import { SearchIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { userInterface } from "../../types/user";

const NavbarMobile: React.FC<userInterface> = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-black w-full text-white px-4 py-3 flex items-center justify-between">
      <span className="font-bold text-lg">Wignn</span>

      <button onClick={toggleMenu} className="text-gray-400 hover:text-white" title="Toggle Menu">
        {isMenuOpen ? (
          <XIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-black text-white px-4 py-4 shadow-lg z-10">
          <nav className="flex flex-col space-y-3">
            <Link href="#">
              <p className="text-gray-400 hover:text-white">Docs</p>
            </Link>
            <Link href="#">
              <p className="text-gray-400 hover:text-white">Components</p>
            </Link>
            <Link href="#">
              <p className="text-gray-400 hover:text-white">Blocks</p>
            </Link>
            <Link href="#">
              <p className="text-gray-400 hover:text-white">Charts</p>
            </Link>
            <Link href="#">
              <p className="text-gray-400 hover:text-white">Themes</p>
            </Link>
            <Link href="#">
              <p className="text-gray-400 hover:text-white">Examples</p>
            </Link>
            <Link href="#">
              <p className="text-gray-400 hover:text-white">Colors</p>
            </Link>
          </nav>

          <div className="mt-4 flex items-center space-x-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-gray-300 rounded px-3 py-1 w-full outline-none focus:ring focus:ring-gray-600"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-4 w-4 text-gray-400" />
              </span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="text-gray-400 hover:text-white"
              title="Toggle Dark Mode"
            >
              <SunIcon className="h-6 w-6" />
            </button>
          </div>

          {user ? (
            <div className="mt-4">
              <button
                className="w-full text-gray-400 hover:text-white py-2"
                title="login"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="mt-4">
              <button
                className="w-full text-gray-400 hover:text-white py-2"
                title="login"
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
