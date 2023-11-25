import { Form } from 'antd'
import Link from 'next/link'
import React from 'react'
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const Contact = () => {
    return (
        <section className='mb-[140px]' id='contact'>
            <div className="container mx-auto">
                <div className="lg:flex gap-10">
                    <div className=" basis-1/2 bg-mainColor rounded-lg">
                        <div className=" grid  md:py-20 p-5 gap-8">
                            <div className="flex justify-evenly items-center">
                                <div className="">
                                    <div className=" text-4xl rounded-lg h-[90px] w-[90px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                        <Link href='https://www.facebook.com/profile.php?id=100094606275744&mibextid=ZbWKwL' className=''>
                                            <FaFacebookF className="!font-bold" />
                                        </Link>
                                    </div>
                                    <h1 className='text-center text-white'>Facebook</h1>
                                </div>

                                 <div className="">
                                    <div className=" text-4xl rounded-lg h-[90px] w-[90px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                        <Link href='tel:01611965352' className=''>
                                            <FaWhatsapp className="!font-bold" />
                                        </Link>
                                    </div>
                                    <h1 className='text-center text-white'>Whatsapp</h1>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center">
                            <div className="">
                                    <div className=" text-4xl rounded-lg h-[90px] w-[90px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                        <Link href='https://www.behance.net/saifullahkitron1' className='' >
                                            <FaBehance className="!font-bold" />
                                        </Link>
                                    </div>
                                    <h1 className='text-center text-white'>Behance</h1>
                                </div>
                                <div className="">
                                    <div className=" text-4xl rounded-lg h-[90px] w-[90px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                        <Link href='https://dribbble.com/dannalismith' className=''>
                                            <FaDribbble className="!font-bold" />
                                        </Link>
                                    </div>
                                    <h1 className='text-center text-white'>Dribble</h1>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center">
                            <div className="">
                                    <div className=" text-4xl rounded-lg h-[90px] w-[90px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                        <Link href='https://www.linkedin.com/in/saifullah-kiron-324ab2277/' className=''>
                                            <FaLinkedinIn className="!font-bold" />
                                        </Link>
                                    </div>
                                    <h1 className='text-center text-white'>Linkdin</h1>
                                </div>
                                <div className="">
                                    <div className=" text-4xl rounded-lg h-[90px] w-[90px] flex justify-center items-center text-dark bg-bodyText mx-2 !font-bold">
                                        <Link href='https://twitter.com/saifullahcse18' className=''>
                                            <FaTwitter className="!font-bold" />
                                        </Link>
                                    </div>
                                    <h1 className='text-center text-white'>Twitter</h1>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="basis-1/2 lg:mt-0 mt-10">
                        <div className="">
                            <h1 className='sm:heading_2 heading_3 text-dark'>Feel Free to Reach out</h1>
                            <img src="/tline.svg" alt="" />
                        </div>
                        <p className='paragraph text-textLight  pt-6 py-[32px]'>True professional turning ideas into beautiful and functional design, A pleasure work with </p>
                        <div className="">
                            <Form>
                                <div className="">
                                    <input type="text" placeholder='Name' className='w-full rounded-lg text-[18px] py-3 px-5 border outline-none focus:border-mainColor' />
                                    <input type="text" placeholder='Email' className='w-full rounded-lg text-[18px] py-3 px-5 border outline-none my-6 focus:border-mainColor' />
                                    <textarea className='w-full rounded-lg text-[18px] py-3 px-5 border outline-none focus:border-mainColor' placeholder='Message' ></textarea>
                                    <button className='rounded-lg text-[18px] py-3 px-5 border outline-none my-6 hover:bg-white hover:text-mainColor hover:border-mainColor bg-mainColor text-white border-transparent'>Send Message</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact