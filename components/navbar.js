"use client"
const Logo = "./logo.svg";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/templates/vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/NavLink";
import { useState } from "react";

const Navbar = ({ home = "", about = "", rooms = "", map = "" }) => {
  const [menu, setMenu]= useState(true)
  const ToggleMenu =()=>{setMenu((prev)=>!prev)}

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}

            <button
            onClick={ToggleMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {/* Menu open: "hidden", Menu closed: "block" */}

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="flex max-sm:mr-0 mr-auto">
              <Image
                className="h-16 w-auto items-center"
                src={Logo}
                alt="Your Company"
                width={25}
                height={25}
              ></Image>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 max-2xl:mt-3">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                <NavLink
                  href="/"
                  className={`rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${home}`}
                  aria-current=""
                >
                  Home
                </NavLink>
                <NavLink
                  href="/rooms"
                  className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${rooms}`}
                >
                  Rooms
                </NavLink>
                <NavLink
                  href="/about"
                  className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${about}`}
                >
                  About
                </NavLink>
                <NavLink
                  href="/googlemap"
                  className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${map}`}
                >
                  Google Map
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown*/}

            <div className="relative ml-3"></div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}

      <div className={`sm:hidden ${menu && 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

          <NavLink
            href="/"
            className={`block rounded-md px-3 py-2 text-base font-medium text-white ${home}`}
          >
            Home
          </NavLink>
          <NavLink
            href="/rooms"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${rooms}`}
          >
            Rooms
          </NavLink>
          <NavLink
            href="/about"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${about}`}
          >
            About
          </NavLink>
          <NavLink
            href="/googlemap"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${map}`}
          >
            Google Map
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
