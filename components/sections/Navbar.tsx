'use client'
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, socialLinks } from "../data";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  
  return (
    <nav className="w-full fixed md:top-2 z-10">
      <div className={`w-full max-w-[1440px] mx-auto md:rounded-[150px] md:border border-[#566265]  px-5 py-6  flex md:h-auto flex-col gap-y-14 md:flex-row items-center md:justify-between md:bg-transparent md:backdrop-blur-md ${isOpen? "bg-[#0C0E0E] h-screen": ""} `}>
        <div className={`w-full flex items-center justify-between py-4 md:hidden bg-transparent backdrop-blur-sm rounded-[150px] ${isOpen? "px-0": "px-5"}`}>
          <Link href ="/" className= "text-3xl md:text-2xl">
            CMU
          </Link>
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose className="text-4xl cursor-pointer" />
            ) : (
              <RxHamburgerMenu className="text-3xl  cursor-pointer" />
            )}
          </div>
        </div>

        {/* navigation */}
        <div
          className={`w-full flex flex-col md:flex-row gap-14 md:items-center  md:justify-between  ${
            isOpen ? "" : "hidden md:flex "
          }`}
        >
          <div className="hidden md:block">
            <Link href ="/" className="text-4xl md:text-2xl ">
              CMU
            </Link>
          </div>
          <ul className="  flex flex-col md:flex-row  gap-y-4 gap-x-8 md:items-center ">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`text-3xl md:text-base hover:text-[#FEB273] ${pathname === link.path ? "text-[#FEB273]" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center  gap-5 md:gap-4 lg:gap-5">
             {socialLinks.map((profile) => (
            <li key={profile.link} className="text-3xl md:text-base">
              <a
                href={`https://${profile.link}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${profile.medium} profile`}
                className="flex items-center"
              >
                <profile.icon aria-hidden="true" />
                <span className="sr-only">
                  Visit my {profile.medium} profile
                </span>
              </a>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
