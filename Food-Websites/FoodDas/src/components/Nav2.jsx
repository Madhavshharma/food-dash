import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../img/logo1.png';

function Nav2() {
  return (
    <div>
      <nav className="p-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img src={logoImage} alt="logo" className="w-24 md:w-40" />
        </div>
        <ul className="flex flex-wrap gap-5 mt-4 md:mt-0">
          <li className="text-gray-400 font-bold hover:text-orange-500">
            <NavLink to="/" activeClassName="text-orange-500" exact>
              Home
            </NavLink>
          </li>
          <li className="text-gray-400 font-bold hover:text-orange-500">
            <NavLink to="/menu" activeClassName="text-orange-500">
              Menu
            </NavLink>
          </li>
          <li className="text-gray-400 font-bold hover:text-orange-500">
            <NavLink to="/offers" activeClassName="text-orange-500">
              Offers
            </NavLink>
          </li>
          <li className="text-gray-400 font-bold hover:text-orange-500">
            <NavLink to="/service" activeClassName="text-orange-500">
              Service
            </NavLink>
          </li>
          <li className="text-gray-400 font-bold hover:text-orange-500">
            <NavLink to="/login" activeClassName="text-orange-500">
              Login
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center mt-4 md:mt-0">
          <div className="bg-orange-500 p-4 rounded-full">
            <i className="h-8 w-8 text-white" />
          </div>
          <img
            src="profile-icon.png"
            alt="Profile"
            className="w-8 h-8 rounded-full ml-2"
          />
        </div>
      </nav>
    </div>
  );
}

export default Nav2;
