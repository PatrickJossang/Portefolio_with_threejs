import React from "react";
import ToggleTheme from "../components/ToggleTheme";
import { ThemeProvider } from "../context/ThemeContext";

//can not comment inside of tailwind 
//TODO give all objects and text a dark theme 
function NavBar() {
  return (
    <div>
      <div className="flex flex-row justify-between w-full bg-white border-r">
        <div>
          <div className="flex w-16 ">

          </div>
          <div className="border-t border-gray-100">
            <nav className="flex flex-col p-2">
              <div className="py-4">
                <a
                  href="/"
                  className="flex justify-left px-2 py-1 t text-blue-700 rounded bg-blue-50 group relative"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>


                  <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                    Home
                  </span>
                </a>
              </div>

              <ul className="pt-4 border-t border-gray-100 space-y-1" >
                <li>
                  <ToggleTheme />
                  <span className="absolute text-xs font-medium text-white bg-gray-900 left ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                    ToggleTheme
                  </span>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="flex relative group justify-left px-2 py-3 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>


                    <span className="absolute text-xs font-medium text-white bg-gray-900 left ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                      Contact Me
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    className="flex justify-left px-2 py-3 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="absolute text-xs font-medium text-white bg-gray-900 left ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                      about me
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
