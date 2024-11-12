import { LogOutIcon, SearchIcon, SettingsIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { userInterface } from "../../types/user";
import ProfileModal from "./Modal";
import Image from "next/image";

const NavbarDesktop: React.FC<userInterface> = ({ user }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  console.log(user);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`bg-black w-full text-white px-4 py-4 flex items-center`}>
      <span className="font-bold text-lg px-4">Wignn</span>
      <nav className="ml-4 flex space-x-4">
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
      <div className="ml-auto flex items-center space-x-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search...."
            className="bg-gray-800 text-gray-300 rounded px-3 py-1 outline-none focus:ring focus:ring-gray-600"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
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

        {user ? (
          <button
            onClick={toggleModal}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            <span>Welcome Back</span>
            <span className="ml-2 font-bold">Othinus</span>
          </button>
        ) : (
          <button className="text-gray-400 hover:text-white" title="Login">
            Login
          </button>
        )}
        {isOpen && (
          <div className="absolute top-14 right-5 overflow-hidden mt-2 w-80 bg-white shadow-lg rounded-lg p-4 text-gray-800 z-50">
            <div className="flex items-center space-x-3 mb-4">
              <Image
              width={180}
              height={180}
                src={user.profilePicture}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.username}</p>
                <p className="text-gray-500 text-sm">{user.id}</p>
              </div>
            </div>

            <div className="border-t border-gray-200">
              <button
                className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsModalOpen(true)}
              >
                <SettingsIcon className="w-5 h-5 mr-2" />
                Manage account
              </button>
              <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                <LogOutIcon className="w-5 h-5 mr-2" />
                Sign out
              </button>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500 border-t border-gray-200 pt-2">
              Secured by{" "}
              <span className="text-blue-500 font-medium">clerk</span>
              <br />
              <span className="text-orange-500">Development mode</span>
            </div>
          </div>
        )}
      </div>
      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={user}
      />
    </div>
  );
};

export default NavbarDesktop;
