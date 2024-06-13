"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DropDwonIcon } from './Icons';

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  function showNav() {
    setNavBar(!navBar);
  }

  useEffect(() => {
    if (navBar) {
      document.body.classList.add("max-md:overflow-hidden");
    } else {
      document.body.classList.remove("max-md:overflow-hidden");
    }
  }, [navBar]);

  return (
    
    <nav className="backdrop-blur bg-white-opacity-[6%] h-[40px] sm:h-[51px] md:h-[71px] flex px-3 md:px-0 items-center shadow-[0_7px_10.9px_0_#0000002E]">
          <Image src="/assets/images/svg/logo.svg" width={372} height={71} alt='logo' className='md:mx-4 w-[200px] cursor-pointer sm:w-[250px] fixed z-20 md:hidden' />
         
      <div className="mx-auto">
        <ul
          className={`flex items-center  gap-5 z-10 relative  sm:gap-6 duration-300 max-md:fixed max-md:w-full max-md:!min-h-screen max-md:justify-center  max-md:flex-col max-md:top-0 max-md:left-[-105%] max-md:p-[30px] max-md:!bg-black ${
            navBar && "!left-0"
          }`}
        >
          <li className="flex items-center gap-1">
            <Link href="#" className="font-Poppins hover:text-orange transition-all text-lightWhite text-base leading-[150%] font-semibold">
              Games
            </Link>
            <span className="group-hover:rotate-180 duration-300">
              <DropDwonIcon />
            </span>
          </li>
          <li className='max-md:-mb-6'>
            <Link href="#" className="font-Poppins hover:text-orange transition-all text-lightWhite text-base  leading-[150%] font-semibold">
              AI-Platform
            </Link>
          </li>
          <li>
            <Link className='hidden md:block' href="#">
              <Image src="/assets/images/svg/logo.svg" width={372} height={71} alt='logo' className='w-[350px] lg:w-[372px] lg:h-[71px] md:mx-4' />
            </Link>
          </li>
          <li>
            <Link href="#" className="font-Poppins hover:text-orange transition-all text-lightWhite text-base  leading-[150%] font-semibold">
              Team
            </Link>
          </li>
          <li>
            <Link href="#" className="font-Poppins hover:text-orange transition-all text-lightWhite text-base leading-[150%] font-semibold">
              Careers
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={showNav} className="md:hidden relative z-50">
        {navBar ? (
          <div className="flex md:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer">
            <span className="bg-white min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 -translate-y-1 -bottom-[15px]"></span>
            <span className="bg-white min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-0 bottom-[11px]"></span>
          </div>
        ) : (
          <div className="flex md:hidden flex-col z-50 justify-between my-1 w-[21px] h-[15px] cursor-pointer relative">
            <span className="bg-white rounded-md w-1/2 h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
            <span className="bg-white rounded-md w-full h-[3px] relative z-50 transition-all ease-linear duration-300"></span>
            <span className="bg-white rounded-md w-1/2 h-[3px] ms-auto relative z-50 transition-all ease-linear duration-300"></span>
          </div>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
