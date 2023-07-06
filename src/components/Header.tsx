"use client"
import { useState } from 'react';
import Drawer from './Drawer';
import Logo from "../../public/assets/logo.svg";

import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './Dropdown';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
       <div className="mt-6 text-left">
                <nav className="grid gap-y-3 ">
                  <Link href="home" className="hover:font-semibold">Home</Link>
                  <Link href="categories" className="hover:font-semibold">Categories</Link>
                </nav>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2 w-full">
                <Link href="register" className="hover:font-semibold w-full max-w-sm bg-secondary text-white text-center rounded-md py-2">Sign Up</Link>
                <Link href="login" className="border-secondary bg-white  border-2  max-w-sm text-secondary w-full  hover:font-semibold text-center rounded-md py-2">Sign In</Link>
              </div>
      </Drawer>
      <div
        className="container mx-auto flex items-center md:px-5 py-2   px-2  h-24 "
      >
      <Image src={Logo} alt="Logo" />
      <div className="grow">
        <div className="hidden md:flex items-center justify-center  md:gap-8">
          <Link href="home" className="hover:font-semibold">Home</Link>
            <Dropdown 
              title="Categories"
            />
        </div>
      </div>
      <div className=" flex row items-center justify-center">
        <div className="flex px-4 gap-2">
          <AiOutlineSearch size={25} className="hover:text-green-500" />
          <AiOutlineShoppingCart size={25} className="hover:text-green-500"/>
        </div>
        <div className="hidden md:block ">
        <Link className="mr-2 hover:font-semibold bg-secondary text-white border-2 border-secondary px-3 py-2 rounded-md" href="register">
          Sign Up
        </Link>
        <Link href="login" className="hover:font-semibold border-secondary border-2 text-secondary px-3 py-2 rounded-md">Sign In</Link>
      </div>
        <div className="flex grow items-center justify-end md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center  hover:text-green-500 focus:outline-none  "> 
            <AiOutlineMenu size={25} />
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
