import Image from 'next/image'
import React from 'react'
import Image1 from '@/assets/BK-Image-1.webp'
import Image2 from '@/assets/BK-Image-2.webp'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const BankConnected = () => {
    return (
        <section className='relative'>
            <div className="flex w-full flex-col gap-10 items-center md:flex-row px-4 max-w-screen-xl m-auto">
                <div className="md:w-1/3 space-y-6 w-fit m-auto z-10">
                    <h3 className='text-3xl md:text-4xl font-medium'>Bank connected spending tracker</h3>
                    <p className='text-uicore-body text-sm'>With many excellent features we are able to help you in dealing with your financial problems</p>
                    <br />
                    <Button className='flex justify-center gap-2 text-lg font-semibold p-6 bg-gray-100 text-uicore-primary hover:bg-uicore-primary hover:text-white ' >
                        Available on the App Store <ArrowRight strokeWidth={3} />
                    </Button>
                </div>

                <div className="flex md:w-1/2 items-end gap-2 z-10">
                    <Image src={Image1} alt='' height={280} width={350} className='object-contain w-1/2' />
                    <Image src={Image2} alt='' height={280} width={350} className='object-contain w-1/2' />
                </div>
            </div>
            <div className="bg-uicore-primary absolute bottom-0 h-12 w-full z-0"></div>
        </section>
    )
}

export default BankConnected