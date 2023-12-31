import React, { useState } from 'react';
import logo from '../img/logo.png';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import SlideMenu from './SlideMenu';
import BtnPrimary from './BtnPrimary';

const NavBar = ({ setTheme, checked}) => {
  const [menuClass, setMenuClass] = useState('hidden');
  const openMenu = () => {
    if (menuClass !== 'slide-in') {
      setMenuClass('slide-in');
    } else {
      setMenuClass('slide-out');
    }
  };
  const onClickOutsideListener = () => {
    setMenuClass('slide-out');
    document.removeEventListener('click', onClickOutsideListener);
  };
  return (
    <nav className="backdrop-blur-2xl backdrop-brightness-150 dark:backdrop-brightness-50 shadow-sm border-1 px-2 sm:px-4 py-2.5 sticky top-0 left-0 right-0 z-10">
      <div className="container flex flex-wrap flex-row-reverse justify-between items-center mx-auto">
        <div className="flex items-center">
          <button
            type="button"
            className="mx-2 hover:cursor-pointer rounded-xl border p-1 border-gray-300 dark:border-gray-600"
            onClick={setTheme}>
            {checked ? (
              <SunIcon className="h-6 w-6 active:animate-spin text-gray-700 dark:text-gray-300" />
            ) : (
              <MoonIcon className="h-6 w-6 active:animate-spin text-gray-700 dark:text-gray-300" />
            )}
          </button>

          <BtnPrimary>Get started</BtnPrimary>
        </div>
        <div className="flex md:order-2  items-center">
          <button
            type="button"
            onClick={openMenu}
            className=" md:hidden hover:cursor-pointer">
            {menuClass == 'slide-in' ? (
              <XIcon className="h-8 w-8 active:animate-spin text-gray-700 dark:text-gray-300" />
            ) : (
              <MenuIcon className="h-8 w-8 active:animate-spin text-gray-700 dark:text-gray-300" />
            )}
          </button>
          <a href="#">
            <img src={logo} className=" ml-3 h-6 sm:h-9" alt="Logo" />
          </a>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SlideMenu
        menuClass={menuClass}
        openMenu={openMenu}
        onClickOutsideListener={onClickOutsideListener}
      />
    </nav>
  );
};

export default NavBar;