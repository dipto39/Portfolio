import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='bg-dark  relative mb-11'>
            <div className="md:flex hidden h-[899px] w-full relative">
                <div className="bg-dark basis-2/3">

                </div>
                <div className=" bg-mainColor basis-1/3">

                </div>
            </div>

            <div className="container md:mx-auto md:absolute md:bottom-[165px] md:!left-1/2 md:-translate-x-1/2">
                <div className="md:flex items-center">
                    <div className=" basis-1/2 md:py-0 py-8 md:pt-0 pt-20">
                        <div className="">
                            <h1 className='md:text-[35px] text-[25px] mt-5 text-bodyText'>Hi, I’m Saifullah Kiron</h1>
                            <img src="/heroLine.png" alt="" />
                        </div>
                        <h1 className='md:heading_1 text-[50px] font-semibold text-bodyText'>Professional <span className='text-mainColor'>UI/UX</span> Designer</h1>
                        <p className='pt-[32px] pb-[70px] paragraph text-textLight'>I am from Bangladesh, working as a UI UX designer or
                            I've been working on websites, apps, dashboards, designs
                            for more than a year.
                        </p>
                        <Link href='#work'>
                        <button className='md:py-[18px] py-4 md:px-[50px] px-[30px] rounded-lg border-none bg-mainColor text-bodyText md:text-[22px] text-[18px] hover:bg-bodyText hover:text-mainColor hover:border duration-300 mr-6'>Projects</button>
                        </Link>
                        <button className='md:py-[18px] py-4 md:px-[50px] px-[30px] rounded-lg bg-transparent text-bodyText md:text-[22px] text-[18px] hover:bg-bodyText  border hover:text-mainColor border-bodyText duration-300'>Hire Me</button>
                    </div>
                    <div className=" basis-1/2 md:pb-0 pb-8">
                        <div className=" ">
                            <img src="/hero.png" className='h-[569px] w-[462px] mx-auto' alt="hero" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero