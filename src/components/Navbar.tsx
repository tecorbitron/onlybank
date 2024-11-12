"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react'
import fblogo from '@/assets/logos/fb.svg'
import inlogo from '@/assets/logos/insta.svg'
import twlogo from '@/assets/logos/twitterx.svg'
import Image from 'next/image';


const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenu, setIsMenu] = useState(false);


  useEffect(() => {
    let lastScrollY = 0;
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

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenu]);


  return (
    <nav>

      {/* small Nav  */}
      <nav className='hidden md:block py-1 bg-uicore-secondary'>
        <div className="flex justify-between px-4 max-w-screen-xl m-auto">
          <div className="flex items-center gap-5 list-none">
            <li><Image src={fblogo} alt='fb icon' height={20} width={20} /></li>
            <li><Image src={twlogo} alt='twiter icon' height={18} width={18} /></li>
            <li><Image src={inlogo} alt='instagram icon' height={20} width={20} /></li>
          </div>
          <div className="flex items-center text-white text-sm gap-10">
            <p className='flex items-center gap-2'> <Phone size={16} /> 0987654321</p>
            <p className='flex items-center gap-2'> <Mail size={16} /> abc@gmail.com</p>
          </div>
        </div>
      </nav>

      {/* Main Nav  */}
      <nav className={`left-0 w-full z-50 transition-transform duration-300 ${isScrolledDown ? ' md:bg-white shadow-lg top-0 md:fixed' : 'absolute bg-transparent md:top-10 text-white'} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold ">
                Onlybank
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className=" hover:text-gray-300">Home</Link>
              <Link href="how-it-works" className=" hover:text-gray-300">How it works</Link>
              <Link href="product" className=" hover:text-gray-300">Product</Link>
              <Link href="contact" className=" hover:text-gray-300">Contact</Link>
            </div>
            <div className="hidden md:block  hover:text-gray-300 cursor-pointer">
              Available on the App Store
            </div>
            <div onClick={() => setIsMenu(!isMenu)} className="md:hidden hover:text-gray-300 cursor-pointer">
              <Menu />
            </div>
          </div>
        </div>
      </nav>

      {/* for mobile screen  */}
      {isMenu && <nav className='fixed top-0 z-50 md:hidden h-screen w-full bg-white px-4 font-semibold '>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold ">
              Onlybank
            </Link>
          </div>
          <div onClick={() => setIsMenu(!isMenu)} className="md:hidden hover:text-gray-300 cursor-pointer">
            <X />
          </div>
        </div>
        {/* Nav items  */}
        <div className="flex flex-col items-center space-y-5 mt-5">
          <Link href="/" className=" hover:text-gray-300">Home</Link>
          <Link href="how-it-works" className=" hover:text-gray-300">How it works</Link>
          <Link href="product" className=" hover:text-gray-300">Product</Link>
          <Link href="contact" className=" hover:text-gray-300">Contact</Link>
        </div>
        <div className="absolute bottom-10 w-full text-center hover:text-gray-300 cursor-pointer">
          Available on the App Store
        </div>
      </nav>}

    </nav>
  );
};

export default Navbar;
