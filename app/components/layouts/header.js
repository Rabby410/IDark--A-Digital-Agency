import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/images/idark-logo.png"
              alt="Logo"
              className=" h-auto hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex justify-end items-center space-x-5">
          <ul className="hidden md:flex flex-1 justify-center items-center space-x-5">
            <li>
              <Link
                href="/"
                className="text-lg font-medium hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-lg font-medium hover:text-blue-500 transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-blue-500 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className="text-lg font-medium hover:text-blue-500 transition-colors duration-300"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/blocks"
                className="text-lg font-medium hover:text-blue-500 transition-colors duration-300"
              >
                Blocks
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-blue-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu (hidden by default, toggled with menu button) */}
          <div className="md:hidden">
            {/* Replace with your mobile menu toggle button */}
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
