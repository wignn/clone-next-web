import React from "react";
import { XIcon } from "lucide-react";
import Image from "next/image";

interface user{
    name: string
    email: string
    role: string
    id: string
    image: string
    username: string
    profilePicture: string
    backgroundPicture: string
}

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: user
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[600px] shadow-lg relative p-6">

        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" title="Close">
          <XIcon className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="border-b pb-4 mb-4">
          <h2 className="text-lg text-black font-semibold">Account</h2>
          <p className="text-black">Manage your account info.</p>
        </div>

        {/* Profile Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image
                src={user.profilePicture }
                width={180}
                height={180}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-xl font-semibold text-black">{user.name}</p>
                <p className="text-sm text-blue-600 cursor-pointer">Update profile</p>
              </div>
            </div>
          </div>

          {/* Username */}
          <div className="flex justify-between items-center border-t pt-4">
            <p className="text-gray-600">Name</p>

            <label htmlFor="name" className="sr-only">Name</label>
            <p className="text-black w-1/2" >
            {user.name}</p>
            <button className="text-blue-600 cursor-pointer">Set Name</button>
            
          </div>

          {/* Email Addresses */}
          <div className="flex flex-col border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="bg-gray-200 text-gray-500 text-xs rounded px-2 py-1">{user.role}</span>
            </div>
          </div>

          <div className="flex flex-col border-t pt-4">
            <p className="text-gray-600 mb-2">Email addresses</p>
            <div className="flex justify-between items-center">
              <p className="text-black">{user.email }</p>
              <span className="bg-gray-200 text-gray-500 text-xs rounded px-2 py-1">Primary</span>
            </div>
            <p className="text-blue-600 mt-2 cursor-pointer">+ Add email address</p>
          </div>

          <div className="flex flex-col border-t pt-4">
            <p className="text-gray-600 mb-2">Connected accounts</p>
            <div className="flex items-center space-x-2">
              <img src={user.profilePicture} alt="Google Icon" className="w-5 h-5 rounded-lg" />
              <p className="text-black">{user.email}</p>
            </div>
          </div>

          <div className="border-t pt-4 text-xs text-gray-500 text-center">
            Secured by <span className="text-blue-600 font-medium">clerk</span>
            <br />
            <span className="text-orange-600">Development mode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
