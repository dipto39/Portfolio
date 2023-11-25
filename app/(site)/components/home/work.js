import Link from 'next/link'
import React from 'react'

const Work = () => {
    return (
        <section className='mb-[140px]' id='work'>
            <div className="container mx-auto">
                <div className="">
                    <div className="">
                        <h1 className='sm:heading_2 heading_3 text-dark'>Checkout My Work</h1>
                        <img src="/serviceLine.png" alt="" />
                    </div>
                    <p className='paragraph text-textLight max-w-[520px] pt-6 pb-[32px]'>A Collection of my favorites project I’ve designed resend recently.
                        Feeling great while sharing here</p>
                </div>
                <div className=" ">
                    <div className="flex md:flex-row flex-col gap-8">
                        <div className="basis-2/3">
                        <Link href={'https://www.behance.net/saifullahkitron1'}>
                            <img src="/w1.png" className='h-full w-full rounded-lg' alt="" />
                        </Link>
                        </div>
                        <div className="basis-1/3">
                        <Link href={'https://www.behance.net/saifullahkitron1'}>
                            <img src="/w2.png" alt="" className='h-full w-full rounded-lg' />
                        </Link>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-8 mt-6">

                        <div className="basis-1/3">
                        <Link href={'https://www.behance.net/saifullahkitron1'}>
                        <img src="/w3.png" className='h-full w-full rounded-lg' alt="" />
                        </Link>
                        </div>
                        <div className="basis-1/3">
                        <Link href={'https://www.behance.net/saifullahkitron1'}>
                            <img src="/w4.png" alt="" className='h-full w-full rounded-lg' />
                        </Link>
                        </div>
                        <div className="basis-1/3">
                        <Link href={'https://www.behance.net/saifullahkitron1'}>
                            <img src="/w5.png" alt="" className='h-full w-full rounded-lg' />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work