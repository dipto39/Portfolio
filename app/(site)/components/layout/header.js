"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
const [active,setActive] =useState(true)
  return (
    <section className=" absolute z-10 right-0 left-0 bg-transparent" >
      <div className="container mx-auto ">
        <div className="flex justify-between  relative">
          <div className="p-5">
            <img src="/logo1.png" className="md:max-h-[64px] h-[40px]" alt="" />
          </div>
          <div className="">
          <div onClick={()=> setActive(!active)} className="md:hidden block text-2xl text-bodyText cursor-pointer">
            <FaBars/>
          </div>
          
            <ul className="md:flex hidden md:relative absolute md:top-auto top-[100px] left-0 right-0 md:py-0 py-5 z-20 md:bg-transparent bg-dark ">
            <li className=""><a className="!pt-5 inline-block px-3 paragraph !font-medium pb-4 hover:bg-white duration-300 rounded-b-2xl text-white hover:text-mainColor group relative"  href='/'> <span className={`h-2 w-2  group-hover:block hidden rounded-full bg-mainColor absolute bottom-2 left-1/2 -translate-x-1/2`}></span>Home</a></li>
            <li className=""><a className="!pt-5 inline-block px-3 paragraph !font-medium pb-4 hover:bg-white duration-300 rounded-b-2xl text-white hover:text-mainColor group relative"  href='#about'> <span className={`h-2 w-2  group-hover:block hidden rounded-full bg-mainColor absolute bottom-2 left-1/2 -translate-x-1/2`}></span>About</a></li>
            <li className=""><a className="!pt-5 inline-block px-3 paragraph !font-medium pb-4 hover:bg-white duration-300 rounded-b-2xl text-white hover:text-mainColor group relative"  href='#services'> <span className={`h-2 w-2  group-hover:block hidden rounded-full bg-mainColor absolute bottom-2 left-1/2 -translate-x-1/2`}></span>Project</a></li>
            <li className=""><a className="!pt-5 inline-block px-3 paragraph !font-medium pb-4 hover:bg-white duration-300 rounded-b-2xl text-white hover:text-mainColor group relative"  href='#testimonial'> <span className={`h-2 w-2 group-hover:block hidden rounded-full bg-mainColor absolute bottom-2 left-1/2 -translate-x-1/2`}></span>Testimonial</a></li>
            <li className=""><a className="!pt-5 inline-block px-3 paragraph !font-medium pb-4 hover:bg-white duration-300 rounded-b-2xl text-white hover:text-mainColor group relative"  href='#work'> <span className={`h-2 w-2  group-hover:block hidden rounded-full bg-mainColor absolute bottom-2 left-1/2 -translate-x-1/2`}></span>Experience</a></li>
            <li className=""><a className="!pt-5 inline-block px-3 paragraph !font-medium pb-4 hover:bg-white duration-300 rounded-b-2xl text-white hover:text-mainColor group relative"  href='#contact'> <span className={`h-2 w-2 group-hover:block hidden rounded-full bg-mainColor absolute bottom-2 left-1/2 -translate-x-1/2`}></span>Contact Me</a></li>
              {/* <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium  hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href=''></Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium  hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href=''></Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium  hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href=''>Testimonial</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium  hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href=''>Experience</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium  hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href=''>Contact Me</Link></li> */}
            </ul>
            {
            active === true ? 
            <ul className="md:hidden md:relative absolute md:top-auto top-[100px] left-0 right-0 md:py-0 py-5 z-20 md:bg-transparent bg-dark ">
              <li className="md:py-0 py-3"><Link className="paragraph text-mainColor !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-mainColor"  href='/'>Home</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#about'>About</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#project'>Project</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#testimonial'>Testimonial</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#experience'>Experience</Link></li>
              <li className="md:py-0 py-3"><Link className="paragraph text-bodyText !font-medium ms-[33px] hover:text-mainColor duration-300 hover:border-mainColor border-b-2 border-transparent"  href='#contact'>Contact Me</Link></li>
            </ul> : ""
          }
           
          </div>
        </div>

      </div>
    </section>

  );
};

export default Header;
