"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll up
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show navbar on scroll down
      }

      // Detect if scrolled down past a threshold
      setIsScrolledDown(currentScrollY > 50);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav
      className={`left-0 w-full z-50 transition-transform duration-300 ${
        isScrolledDown ? 'bg-white shadow-lg top-0 fixed' : 'absolute bg-transparent top-10 text-white'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold ">
              Onlybank
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className=" hover:text-gray-300">Home</Link>
            <Link href="#how-it-works" className=" hover:text-gray-300">How it works</Link>
            <Link href="#product" className=" hover:text-gray-300">Product</Link>
            <Link href="#contact" className=" hover:text-gray-300">Contact</Link>
          </div>
          <div className="hidden sm:block  hover:text-gray-300 cursor-pointer">
            Available on the App Store
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
