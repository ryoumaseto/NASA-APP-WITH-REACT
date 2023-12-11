import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header className="mt-5">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Let's look into space
          </span>
          <div
            className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 mx-auto"
            id="mobile-menu-2"
          >
            <input
              type="checkbox"
              className="hidden"
              id="menu-toggle"
            />
            <label
              htmlFor="menu-toggle"
              className="block lg:hidden cursor-pointer"
            >
              <svg
                className="w-6 h-6 fill-current text-gray-700 dark:text-gray-400"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="lg:hidden">
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li className="lg:hidden">
                <Link
                  to="/apod"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  APOD
                </Link>
              </li>
              <li className="lg:hidden">
                <Link
                  to="/mars"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  MARS ROVER
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link
                  to="/"
                  className="py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link
                  to="/apod"
                  className="py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  APOD
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link
                  to="/mars"
                  className="py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  MARS ROVER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
