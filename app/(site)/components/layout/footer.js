"use client"
import Link from "next/link";
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {

    return (
        <>
            <section className="bg-dark">
                <div className="container mx-auto">
                    <div className="text-center md:py-[150px] py-20">
                        <h1 className="heading_3 text-bodyText">Need A Experienced Team For Your Project?</h1>
                        <h1 className="text-[18px] mt-4 mb-8 text-bodyText">Tell us more yourself and what you‘re get in mind. </h1>
                        <div className=" relative block max-w-[360px] mx-auto">
                            <input type="text" placeholder="Please inter you mail " className="text-[12px] outline-none border-none w-full h-[54px] rounded-xl px-[13px] py-[12px]" />
                            <button className=" absolute right-0 top-0 bottom-0 border-none  text-[#FCFEFF] text-[13px] py-[13px] px-[19px] rounded-xl bg-mainColor">Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-dark border-t py-[17px]">
                <div className="container mx-auto">
                    <div className="flex md:flex-row flex-col justify-between items-center">
                        <div className="">
                            <p className="text-[18px] text-[#FCFEFF]">C 2023 All Right Recived</p>
                        </div>
                        <div className="md:my-0 my-8">
                            <img src="/logo2.png" alt="" className="h-[44px]" />
                        </div>
                        <div className="flex ">
                            <div className=" rounded-lg h-[44px] text-2xl w-[44px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                <Link href='/'>
                                    <FaFacebookF className="!font-bold" />
                                </Link>
                            </div>
                            <div className=" rounded-lg h-[44px] text-2xl w-[44px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                <Link href='/'>
                                    <FaTwitter />
                                </Link>
                            </div>
                            <div className=" rounded-lg h-[44px] text-2xl w-[44px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                <Link href='/'>
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                            <div className=" rounded-lg h-[44px] text-2xl w-[44px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                <Link href='/'>
                                    <FaBehance />
                                </Link>
                            </div>
                            <div className=" rounded-lg h-[44px] text-2xl w-[44px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                <Link href='/'>
                                    <FaDribbble />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Footer


