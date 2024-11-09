import Image from 'next/image'
import React from 'react'
import image1 from '@/assets/App-Image-1.webp'
import image2 from '@/assets/App-Image-2.webp'
import image3 from '@/assets/App-Image-3.webp'
import bg from '@/assets/HeroBG-Element-1.webp'

const FinancialNeeds = () => {
    return (
        <section>
            <div className="py-20 px-4 max-w-screen-xl m-auto">
                <h1 className='text-3xl md:text-4xl max-w-screen-md m-auto text-center text-uicore-dark leading-tight font-medium mb-8' >One app for all financial needs</h1>
                <p className='text-uicore-body max-w-screen-sm m-auto text-center font-medium md:px-16 mb-10'>All about your finances is now easy to manage with just one app one place and one hand.</p>

                <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between ">
                    <div className="md:w-[30%] rounded-md p-4 pb-0 pr-0 shadow">
                        <h3 className='text-2xl font-medium'>Money Transfer</h3>
                        <p className='text-sm text-uicore-body my-2'>Win today’s bidding war by combining the best of humans with powerful technology.</p>
                        <Image src={image1} alt='' height={300} width={400} className='float-right' />
                    </div>
                    <div className="relative md:w-[30%] rounded-md p-4 pb-0 pr-0 shadow text-white bg-uicore-primary">
                        <Image src={bg} alt='' height={200} width={200} className='absolute w-full h-full object-cover top-0 left-0' />
                        <h3 className='text-2xl font-medium relative z-10'>Connected with many banks</h3>
                        <p className='text-sm my-2 relative z-10'>Transactions to all types of banks without admin fees without exception.</p>
                        <Image src={image2} alt='' height={300} width={400} className='relative z-10 float-right' />
                    </div>
                    <div className="md:w-[30%] rounded-md p-4 pb-0 pr-0 shadow">
                        <h3 className='text-2xl font-medium'>Record all transactions</h3>
                        <p className='text-sm text-uicore-body my-2'>Record all transactions in detail without worrying about where your expenses go.</p>
                        <Image src={image3} alt='' height={300} width={400} className='float-right' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinancialNeeds