import Image from 'next/image'
import React from 'react'
import image from '@/assets/Product-Future-Image.webp'
import { Check } from 'lucide-react'

const UnlockingFuture = () => {
    return (
        <section className=''>
            <div className="flex w-full flex-col-reverse gap-2 md:flex-row items-center py-10 md:py-20 px-4 max-w-screen-xl m-auto">
                <div className="md:w-1/2 relative">
                    <Image src={image} alt='' height={400} width={420} className='relative z-10 m-auto' />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 h-40 w-full max-w-[500px] rounded-3xl bg-uicore-primary"></div>
                </div>

                <div className="md:w-1/2 px-4">
                    <h3 className='text-3xl md:text-4xl font-medium mb-2'>Unlocking the <span className='text-uicore-body'><span className='text-uicore-body'> using online banks</span></span> Dive into the Distinctive <span className='text-uicore-body'> Features of OnlyBank</span></h3>
                    <p className='text-uicore-body'>OnlyBank goes beyond traditional banking, offering you a suite of innovative features designed to elevate your financial experience.</p>
                    <ul className='mt-4 space-y-4'>
                        <li className='flex items-center gap-3' >
                            <Check strokeWidth={3} className='h-6 w-6 text-uicore-primary bg-gray-200 rounded-full p-1' />
                            Intuitive Dashboard                        </li>
                        <li className='flex items-center gap-3' >
                            <Check strokeWidth={3} className='h-6 w-6 text-uicore-primary bg-gray-200 rounded-full p-1' />
                            Secure Transactions                        </li>
                        <li className='flex items-center gap-3' >
                            <Check strokeWidth={3} className='h-6 w-6 text-uicore-primary bg-gray-200 rounded-full p-1' />
                            Seamless Account Management                        </li>
                        <li className='flex items-center gap-3' >
                            <Check strokeWidth={3} className='h-6 w-6 text-uicore-primary bg-gray-200 rounded-full p-1' />
                            Budgeting Made Easy                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default UnlockingFuture