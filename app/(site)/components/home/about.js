"use client"
import { Progress } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'

const About = () => {
const [active,setActive] = useState('skill')
    return (
        <section className='my-[140px] pt-10' id='about'>
            <div className="container mx-auto">
                <div className="lg:flex items-end ">
                    <div className="basis-1/2 lg:mr-[80px] relative md:flex hidden items-end ju">
                        <div className="md:h-[626px] md:w-[536px] relative rounded-xl "  style={{ background: "linear-gradient(180deg, #67A2FF 0%, rgba(103, 162, 255, 0.00) 100%)" }}>
                            <img src="/about.png" className=' absolute bottom-0' alt="" />
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div className="">
                            <h1 className='sm:heading_2 heading_3 text-dark'>About Me</h1>
                            <img src="/aboutLine.png" alt="line" />
                        </div>
                        <p className='paragraph text-textLight mt-[24px] mb-10'>Passionate UI/UX Designer with a keen eye for detail and a commitment to
                            delivering exceptional design solutions. </p>
                        <div className="">
                            <div className="flex">
                                <button className={`md:text-[24px] text-lg md:mr-[98px] mr-3 cursor-pointer border-b-2  hover:text-mainColor hover:border-mainColor duration-300  ${active === "skill" ? "text-mainColor border-mainColor" : "text-textLight border-transparent"}`} onClick={() => setActive('skill')} >Skills</button>
                                <button className={`md:text-[24px] text-lg md:mr-[98px] mr-3 cursor-pointer border-b-2  hover:text-mainColor hover:border-mainColor duration-300  ${active === "experience" ? "text-mainColor border-mainColor" : "text-textLight border-transparent"}`} disabled={true}>Experience</button>
                                <button className={`md:text-[24px] text-lg md:mr-[98px] mr-3 cursor-pointer border-b-2  hover:text-mainColor hover:border-mainColor duration-300  ${active === "education" ? "text-mainColor border-mainColor" : "text-textLight border-transparent"}`}  disabled>Education</button>
                            </div>
                            <div className="mt-[38px]">
                                <div className="">
                                    <h1 className='text-[20px] text-dark'>Adobe Figma</h1>
                                    <Progress percent={90} showInfo={false} strokeColor='#67A2FF' />
                                </div>
                                <div className="mt-[20px]">
                                    <h1 className='text-[20px] text-dark'>Adobe XD</h1>
                                    <Progress percent={80} showInfo={false} strokeColor='#67A2FF' />
                                </div>
                                <div className="mt-[20px]">
                                    <h1 className='text-[20px] text-dark'>Adobe Photoshop</h1>
                                    <Progress percent={85} showInfo={false} strokeColor='#67A2FF' />
                                </div>
                                <div className="mt-[20px]">
                                    <h1 className='text-[20px] text-dark'>Adobe Illustrator</h1>
                                    <Progress percent={75} showInfo={false} strokeColor='#67A2FF' />
                                </div>
                            </div>
                            <Link href="https://drive.usercontent.google.com/download?id=1m0J6zezw8EirXhcLe2rpBDcc_sHMxZHC&export=download&authuser=0&confirm=t&uuid=dfeea477-6acc-4b20-a74c-1652871ef90b&at=APZUnTUEEDmgkITCOFXRsjKO1No4:1700907445125">
                                <button className='bg-mainColor mt-10  text-white px-8 py-3 rounded-lg hover:border-mainColor border duration-300 hover:text-mainColor border-transparent hover:bg-transparent'>Download CV</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About