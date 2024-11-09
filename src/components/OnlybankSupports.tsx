import Image from 'next/image'
import React from 'react'
import image from '@/assets/supports.webp'
import icon1 from '@/assets/supports-Icon-1.webp'
import icon2 from '@/assets/supports-Icon-2.webp'
import icon3 from '@/assets/supports-Icon-3.webp'

const OnlybankSupports = () => {
    return (
        <section className='bg-gray-100'>
            <div className="flex w-full flex-col-reverse gap-2 md:flex-row items-center py-10 px-4 max-w-screen-xl m-auto">

                <div className="md:w-1/2 relative">
                    <Image src={image} alt='' height={400} width={420} className='relative z-10 m-auto' />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 h-40 w-full max-w-[500px] rounded-3xl bg-uicore-primary"></div>
                </div>


                <div className="md:w-1/2">
                    <div className="w-full">
                        <h3 className='text-3xl md:text-4xl font-medium mb-2'>
                            Onlybank supports thousands of banks in US & Canada, and is actively adding more.
                        </h3>
                        <p className='text-uicore-body'>Connect up to 3 banks and track them all in one place. Onlybank is always working to support smaller institutions in US & Canada, follow Onlybank on Twitter → for updates on newly supported institutions.</p>
                    </div>

                    <div className="flex flex-wrap mt-4">
                        <div className="md:w-1/3 px-2">
                            <Image src={icon1} alt='icon' height={100} width={55} className='bg-gray-200 p-[12px] my-4 rounded-lg' />
                            <p className='text-xl font-semibold mt-2'>Link Banks</p>
                            <p className='text-uicore-body text-sm'>Connect up to 3 banks and their accounts</p>
                        </div>
                        <div className="md:w-1/3 px-2">
                            <Image src={icon2} alt='icon' height={100} width={55} className='bg-gray-200 p-[12px] my-4 rounded-lg' />
                            <p className='text-xl font-semibold mt-2'>Automatic</p>
                            <p className='text-uicore-body text-sm'>Up-to-date transactions and balances</p>
                        </div>
                        <div className="md:w-1/3 px-2">
                            <Image src={icon3} alt='icon' height={100} width={55} className='bg-gray-200 p-[12px] my-4 rounded-lg' />
                            <p className='text-xl font-semibold mt-2'>Notifications</p>
                            <p className='text-uicore-body text-sm'>Get a weekly reminder to check spending</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>)
}

export default OnlybankSupports