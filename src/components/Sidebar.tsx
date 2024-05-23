'use client'

import { Fragment, useState } from 'react';
import { Menu, MenuItem } from '@headlessui/react';
import { HiOutlineMenu } from 'react-icons/hi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed inset-y-0 z-50 flex items-center justify-center bg-gray-900 text-white w-12 h-12 rounded-r-full focus:outline-none transform ${isOpen ? 'translate-x-0' : 'translate-x-50'} transition-transform duration-300 ease-in-out`}
      >
        <HiOutlineMenu className="w-6 h-6" />
      </button>
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white py-6 px-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-64'} transition-transform duration-300 ease-in-out`}>
        {/* Sidebar content */}
        <Menu as="div" className="mt-5">
        <MenuItem>
            <button className="btn btn-primary w-full hover:bg-gray-700 text-white my-2 ">Button 1</button>
        </MenuItem>
        <MenuItem>
            <button className="btn btn-primary w-full hover:bg-gray-700 text-white my-2 ">Button 1</button>
        </MenuItem>
        <MenuItem>
            <button className="btn btn-primary w-full hover:bg-gray-700 text-white my-2 ">Button 1</button>
        </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
