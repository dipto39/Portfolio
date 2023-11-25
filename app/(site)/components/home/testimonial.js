'use client';
import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const Testimonial = () => {
  const slider = React.useRef(null);

    return (
        <section className='mb-[140px]' id='testimonial'>
            <div className="container mx-auto">
            <div className="relative w-full">
                 <Slider ref={slider} {...settings}>
            <div className="relative w-full">
                 <div className="lg:flex items-center gap-10">
                    <div className=" basis-1/2">
                        <div className="">
                            <h1 className='sm:heading_2 heading_3 text-dark'>What My Client Say</h1>
                            <img src="/tline.svg" alt="" />
                        </div>
                        <p className='paragraph text-textLight  pt-6 py-[32px]'>Let me know your original opinion.</p>
                        <p className='paragraph text-textLight  pb-[40px] pt-[48px]'>Lorem ipsum dolor sit amet consectetur. Ante adipiscing luctus tellus bibendum urna lorem pharetra. Enim diam ultrices eu at porta. Et adipiscing risus sed habitant elementum. Turpis elementum viverra habitasse quam.</p>
                        <div className="flex items-center gap-5 mb-[50px]">
                            <div className="">
                                <img src="/google.png" alt="" />
                            </div>
                            <div className="">
                                <h1 className='text-[20px] text-dark pb-3'>Cameron Williamson</h1>
                                <h1 className='text-[14px] text-textLight'>Founder at Goolge</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div onClick={() => slider?.current?.slickPrev()} className="h-[50px] cursor-pointer w-[50px] rounded-full flex items-center justify-center text-2xl text-dark bg-[#ECF3FF] hover:bg-mainColor hover:text-white duration-300">
                                <FaArrowLeft />
                            </div>
                            <div onClick={() => slider?.current?.slickNext()} className="h-[50px] cursor-pointer w-[50px] rounded-full flex items-center justify-center text-2xl text-dark bg-[#ECF3FF] hover:bg-mainColor hover:text-white duration-300">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 relative lg:min-h-[630px]  md:mt-0 mt-10">
                        <div className="w-[315px] h-full bg-mainColor lg:absolute top-0 right-0 bottom-0 rounded-xl  ">
                            
                        </div>
                        <div className=" lg:absolute lg:top-1/2 top-auto lg:left-1/2 left-auto   lg:-translate-y-1/2 lg:-translate-x-1/2 ">
                                <img src="/t1.png" className='lg:mx-0 mx-auto'  alt="" />
                            </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full">
                 <div className="lg:flex items-center gap-10">
                    <div className=" basis-1/2">
                        <div className="">
                            {/* <h1 className='sm:heading_2 heading_3 text-dark'>What My Client Say</h1> */}
                            <img src="/tline.svg" alt="" />
                        </div>
                        <p className='paragraph text-textLight  pt-6 py-[32px]'>Let me know your original opinion.</p>
                        <p className='paragraph text-textLight  pb-[40px] pt-[48px]'>Lorem ipsum dolor sit amet consectetur. Ante adipiscing luctus tellus bibendum urna lorem pharetra. Enim diam ultrices eu at porta. Et adipiscing risus sed habitant elementum. Turpis elementum viverra habitasse quam.</p>
                        <div className="flex items-center gap-5 mb-[50px]">
                            <div className="">
                                <img src="/google.png" alt="" />
                            </div>
                            <div className="">
                                <h1 className='text-[20px] text-dark pb-3'>Cameron Williamson</h1>
                                <h1 className='text-[14px] text-textLight'>Founder at Goolge</h1>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div onClick={() => slider?.current?.slickPrev()} className="h-[50px] cursor-pointer w-[50px] rounded-full flex items-center justify-center text-2xl text-dark bg-[#ECF3FF] hover:bg-mainColor hover:text-white duration-300">
                                <FaArrowLeft />
                            </div>
                            <div onClick={() => slider?.current?.slickNext()} className="h-[50px] cursor-pointer w-[50px] rounded-full flex items-center justify-center text-2xl text-dark bg-[#ECF3FF] hover:bg-mainColor hover:text-white duration-300">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 relative lg:min-h-[630px]  md:mt-0 mt-10">
                        <div className="w-[315px] h-full bg-mainColor lg:absolute top-0 right-0 bottom-0 rounded-xl  ">
                            
                        </div>
                        <div className=" lg:absolute lg:top-1/2 top-auto lg:left-1/2 left-auto   lg:-translate-y-1/2 lg:-translate-x-1/2 ">
                                <img src="/t1.png" className='lg:mx-0 mx-auto'  alt="" />
                            </div>
                    </div>
                </div>
            </div>
            </Slider>
            </div>
           
            </div>
        </section>
    )
}

export default Testimonial