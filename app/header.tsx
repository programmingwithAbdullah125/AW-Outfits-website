// "use client"
// import Link from "next/link"
// import Image from "next/image"
// import { useState } from "react"


// export default function Header() {
//     const [isOpen, setIsOpen] = useState(false)

//     return (
//         <header className="bg-black text-white">
//             <div className="flex justify-between items-center h-24 px-4 md:px-8">
//                 {/* Logo */}
//                 <div className="flex items-center">
//                     <Link href="/">
//                         <Image src="/logo.jpg" alt="Logo" width={60} height={60} className="rounded-full  border-white" />
//                     </Link>
//                     <h2 className="text-2xl font-semibold pl-4">AW Outfits</h2>
//                 </div>

// {/* hamburger for mobile */}
//                 <button 
//                     onClick={() => setIsOpen(!isOpen)} 
//                     className="text-white md:hidden focus:outline-none"
//                 >
//                     ☰
//                 </button>

//                 {/* Navigation Links */}
//                 <nav className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
//                     <Link href="/" className="hover:text-gray-300">Home</Link>
//                     <Link href="/about" className="hover:text-gray-300">About</Link>
//                     <Link href="/product" className="hover:text-gray-300">Products</Link>
//                     <Link href="/contact" className="hover:text-gray-300">Contact</Link>
//                 </nav>
//             </div>
//         </header>
//     )
// }
// components/Header.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        
        {/* Brand Logo and Name */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.jpg" alt="AW Outfits Logo"width={55} height={55} className="rounded-full" /> {/* Adjust this path to your logo */}
          <h1 className="text-2xl font-bold">
            <Link href="/">AW Outfits</Link>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-lg hover:text-blue-300">
            Home
          </Link>
          <Link href="/product" className="text-lg hover:text-blue-300">
            Products
          </Link>
          <Link href="/about" className="text-lg hover:text-blue-300">
            About Us
          </Link>
          <Link href="/contact" className="text-lg hover:text-blue-300">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link href="/" className="block text-lg hover:text-blue-300">
            Home
          </Link>
          <Link href="/product" className="block text-lg hover:text-blue-300">
            Products
          </Link>
          <Link href="/about" className="block text-lg hover:text-blue-300">
            About Us
          </Link>
          <Link href="/contact" className="block text-lg hover:text-blue-300">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
