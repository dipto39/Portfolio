import React from 'react'
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineMobile } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
const Service = () => {
    return (
        <section className='mb-[140px]' id='services'>
            <div className="container mx-auto">
                <div className="">
                    <div className="">
                        <h1 className='sm:heading_2 heading_3 text-dark'>My Awesome Services</h1>
                        <img src="/serviceLine.png" alt="" />
                    </div>
                    <p className='paragraph text-textLight max-w-[520px] pt-6 pb-[32px]'>Client always get exceptional works from me and they’re
                        happy, new yours.</p>
                </div>
                <div className=" grid gap-6 lg:grid-cols-3 md:grid-cols-12 grid-cols-1">
                    <div className="rounded-xl border py-[36px] px-[26px] group hover:bg-mainColor duration-300 text-center">
                        <div className='text-5xl text-mainColor  group-hover:text-bodyText duration-300'><RiComputerLine className='text-center mx-auto' /></div>
                        <h1 className='heading_3 text-dark py-6 group-hover:text-bodyText duration-300'>Webstie Design</h1>
                        <h1 className='text-[24px] text-textLight group-hover:text-bodyText duration-300 mb-6'>15 Projects</h1>
                        <p className='paragarph text-textLight group-hover:text-bodyText duration-300 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                    </div>
                    <div className="rounded-xl border py-[36px] px-[26px] group hover:bg-mainColor duration-300 text-center">
                        <div className='text-5xl text-mainColor  group-hover:text-bodyText duration-300'><AiOutlineMobile className='text-center mx-auto' /></div>
                        <h1 className='text-[24px] text-textLight group-hover:text-bodyText duration-300 my-6'>15 Projects</h1>
                        <h1 className='heading_3 text-dark mb-6 group-hover:text-bodyText duration-300'>Application Design</h1>
                        
                        <p className='paragarph text-textLight group-hover:text-bodyText duration-300 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                    </div>
                    <div className="rounded-xl border py-[36px] px-[26px] group hover:bg-mainColor duration-300 text-center">
                        <div className='text-5xl text-mainColor  group-hover:text-bodyText duration-300'><FaRegEdit className='text-center mx-auto' /></div>
                         <h1 className='text-[24px] text-textLight group-hover:text-bodyText duration-300 my-6'>15 Projects</h1>
                        <h1 className='heading_3 text-dark pb-6 group-hover:text-bodyText duration-300'>Brand Identity</h1>
                        <p className='paragarph text-textLight group-hover:text-bodyText duration-300 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service