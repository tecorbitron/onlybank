import BankConnected from '@/components/BankConnected'
import Image from 'next/image'
import React from 'react'
import bgElement from '@/assets/HeroBG-Element-1.webp'


const HowItWorks = () => {
  return (
    <section>
      <div className='relative flex flex-col bg-uicore-primary h-[300px] sm:h-[400px] w-full'>
        {/* Background element  */}
        <Image src={bgElement} alt='' height={300} width={300}
          className='absolute top-[10px] sm:top-0 left-0 w-2/5 flex items-center justify-center max-w-[300px] md:h-full object-cover' />

        <Image src={bgElement} alt='' height={300} width={300}
          className='absolute top-[10px] sm:top-0 right-0 w-2/5 flex items-center justify-center max-w-[300px] md:h-full object-cover ' />

        {/*  Content  */}
        <div className=" m-auto z-10 max-w-screen-lg text-center px-4">
          <h1 className='text-3xl md:text-6xl text-white leading-tight font-medium mb-8' >How it works?</h1>
          <p className='text-uicore-accent max-w-screen-md m-auto text-center font-medium md:px-8'>With many excellent features we are able to help you in dealing with your financial problems</p>
        </div>
      </div>

      <BankConnected />
    </section >
  )
}

export default HowItWorks