"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
const [active,setActive] =useState(true)
  return (
    <section className=" absolute z-10 right-0 left-0 bg-transparent" >
      <div className="container mx-auto ">
        <div className="flex justify-between items-center py-8  relative">
          <div className="">
            <img src="/logo1.png" className="md:max-h-[64px] h-[40px]" alt="" />
          </div>
          <div className="re">
          <div onClick={()=> setActive(!active)} className="md:hidden block text-2xl text-bodyText cursor-pointer">
            <FaBars/>
          </div>
          
            <ul className="md:flex hidden md:relative absolute md:top-auto top-[100px] left-0 right-0 md:py-0 py-5 z-20 md:bg-transparent bg-dark ">
              <li className="md:py-0 py-3"><Link className="paragraph text-mainColor !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-mainColor"  href='/'>Home</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#about'>About</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#services'>Project</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#testimonial'>Testimonial</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#work'>Experience</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#contact'>Contact Me</Link></li>
            </ul>
            {
            active === true ? 
            <ul className="md:hidden md:relative absolute md:top-auto top-[100px] left-0 right-0 md:py-0 py-5 z-20 md:bg-transparent bg-dark ">
              <li className="md:py-0 py-3"><Link className="paragraph text-mainColor !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-mainColor"  href='/'>Home</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='/'>About</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='/'>Project</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='/'>Testimonial</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='/'>Experience</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='/'>Contact Me</Link></li>
            </ul> : ""
          }
           
          </div>
        </div>

      </div>
    </section>

  );
};

export default Header;
