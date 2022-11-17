import React from "react";
import ToggleTheme from "../components/ToggleTheme";
import { ThemeProvider } from "../context/ThemeContext";
import Link from 'next/link'

//can not comment inside of tailwind 
//TODO give all objects and text a dark theme 
function NavBar() {
  return (
    <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <h1 href="https://flowbite.com" className="flex items-center">

              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Portefolio
              </span>
            </h1>
            <div className="flex items-center">
              <p
                href="tel:45407589"
                className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
              >
                +47 454 07 589
              </p>
            </div>
          </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700 sticky top-0">
          <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div className="flex items-center">
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                  <Link
                    href="/"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Hjem
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Om meg
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="Projects"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Prosjekter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>

  );
}

export default NavBar;
