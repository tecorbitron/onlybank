import Image from 'next/image'
import React from 'react'
import image from '@/assets/Advantages.webp'
import bg from '@/assets/HeroBG-Element-1.webp'

const Advantages = () => {
    return (
        <section className='relative'>
                <Image src={bg} alt='' height={400} width={400} className='absolute top-0 left-0 w-2/5 opacity-10 z-0  max-w-[400px]' />
            <div className="py-20 px-4 max-w-screen-xl m-auto relative z-10">
                <h1 className='text-3xl md:text-4xl max-w-screen-md m-auto text-center text-uicore-dark leading-tight font-medium mb-8' >Find out more about our advantages</h1>
                <p className='text-uicore-body max-w-screen-sm m-auto text-center font-medium md:px-16 mb-10'>With many excellent features we are able to help you in dealing with your financial problems</p>

                <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between">

                    <div className="flex justify-between md:w-[50%] rounded-md shadow bg-gray-100">
                        <div className="flex flex-col justify-between w-1/2 p-4">
                            <p className='text-sm text-uicore-body relative z-10'>The smart way to see your recent expenses in detail without missing a beat</p>
                            <h3 className='text-xl md:text-3xl font-semibold relative z-10 mt-4'>Spending</h3>
                        </div>
                        <div className="w-1/2 relative">
                            <Image src={bg} alt='' height={200} width={200} className='absolute w-full h-full object-cover top-0 left-0 opacity-20' />
                            <Image src={image} alt='' height={300} width={300} className='relative z-10 h-full w-full object-contain float-right' />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between md:w-[20%] rounded-md p-4 min-h-40 shadow">
                        <p className='text-sm text-uicore-body my-2'>Keep info secure with Touch ID or Face ID</p>
                        <h3 className='text-xl md:text-3xl font-semibold'>Private</h3>
                    </div>
                    <div className="flex flex-col justify-between md:w-[20%] rounded-md p-4 min-h-40 shadow">
                        <p className='text-sm text-uicore-body my-2'>Manually add spending for things like cash</p>
                        <h3 className='text-xl md:text-3xl font-semibold'>Manual</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages