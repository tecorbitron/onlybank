import BankConnected from '@/components/BankConnected'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import bgElement from '@/assets/HeroBG-Element-1.webp'
import productPageImg from '@/assets/PP-Img.png'
import { ArrowRight } from 'lucide-react'
import UnlockingFuture from '@/components/UnlockingFuture'
import WhyChoose from '@/components/WhyChoose'
import TestimonialScroller from '@/components/TestimonialScroller'

const Product = () => {
  return (
    <section>
      {/* ProductPage header  */}
      <div className='relative flex items-end bg-uicore-primary w-full'>
        {/* Background element  */}
        <Image src={bgElement} alt='' height={400} width={400}
          className='absolute top-0 left-0 w-2/5  max-w-[400px]' />

        <Image src={bgElement} alt='' height={400} width={400}
          className='absolute bottom-0 right-0 w-2/5 max-w-[400px] ' />

        {/* Hero Content  */}
        <div className="flex flex-col md:flex-row items-end z-10 px-4 mt-20 relative max-w-screen-xl m-auto">
          <div className="w-full">
            <h1 className='text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-medium mb-8' >Welcome to OnlyBank: Where Your Financial Dreams Take Flight</h1>
            <p className='text-uicore-accent max-w-screen-md m-auto font-medium'>At OnlyBank, we redefine the essence of banking by placing your financial aspirations at the forefront.</p>
            <Button className='flex w-fit justify-center gap-2 text-lg font-semibold p-6 my-8' >
              Get Started <ArrowRight strokeWidth={3} />
            </Button>
          </div>

          <div className="w-full">
            <Image src={productPageImg} alt='' height={400} width={400} className='lg:pl-10 w-full h-full object-contain' />
          </div>
        </div>
      </div>

      {/* Other components sections of product page  */}
      <UnlockingFuture />
      <WhyChoose />
      <TestimonialScroller />
      <BankConnected />
    </section>
  )
}

export default Product