import React from 'react';
import { SearchIcon, BellIcon, ChatIcon, ChevronDownIcon } from './icons/Icons';
import shapeLeftDown from '../assets/img/shapeleftdown.svg';
import shapeRightUp from '../assets/img/shaperightup.svg';
import userAvatar from '../assets/img/user.jpeg';

const Header: React.FC = () => {
  return (
    <header className="relative bg-white border-b border-gray-200 h-20 flex items-center justify-between px-6 overflow-hidden">
      {/* Background Shapes */}
      <img src={shapeLeftDown} alt="" className="absolute left-0 bottom-0" />
      <img src={shapeRightUp} alt="" className="absolute right-0 top-0" />

      {/* Header Content */}
      <div className="relative z-10 w-full max-w-sm">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon className="h-5 w-5 text-slate-400" />
        </span>
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full pl-9 pr-4 py-2 bg-transparent focus:outline-none placeholder-slate-400"
        />
      </div>
      <div className="relative z-10 flex items-center space-x-5">
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-100 transition-colors" aria-label="Notifications">
          <BellIcon className="h-6 w-6 text-slate-500" />
        </button>
        <button className="relative w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-100 transition-colors" aria-label="Messages">
          <ChatIcon className="h-6 w-6 text-slate-500" />
          <span className="absolute top-0.5 right-0.5 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center space-x-3">
            <img 
                src={userAvatar}
                alt="User Avatar" 
                className="h-10 w-10 rounded-full object-cover"
            />
            <div>
                <p className="font-semibold text-sm text-slate-800">Thomas Anree</p>
                <p className="text-xs text-slate-500">Administrator</p>
            </div>
            <button aria-label="User menu">
                <ChevronDownIcon className="h-5 w-5 text-slate-400" />
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;