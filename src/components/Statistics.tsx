import Image from 'next/image'
import React from 'react'
import mobile1Img from '@/assets/Hero-mobile1.webp'
import mobile2Img from '@/assets/Hero-mobile2.webp'
import mobile3Img from '@/assets/Hero-mobile3.webp'
import statisImage from '@/assets/statis-img.png'


const Statistics = () => {
  return (
    <section>
      <div className="hidden md:block h-[10rem] bg-uicore-primary"></div>
      {/* Mobile Images  */}
      <div className="flex justify-center w-full my-20 gap-8 relative z-10 -mt-[5rem] md:-mt-[15rem] max-w-screen-xl m-auto">
        <Image src={mobile1Img} alt='' height={280} width={280} className='w-1/5' />
        <Image src={mobile2Img} alt='' height={280} width={280} className='w-1/5' />
        <Image src={mobile3Img} alt='' height={280} width={280} className='w-1/5' />
      </div>

      <div className="flex w-full flex-col md:flex-row items-center px-4 max-w-screen-xl m-auto">
        <div className="md:w-1/2">
          <div className="md:w-11/12 m-auto">
            <h3 className='text-3xl md:text-4xl font-medium'>
              More than 40.000 <span className='text-uicore-body'>people in the world </span>
              successfully transact <span className='text-uicore-body'> using online banks</span>
            </h3>
          </div>

          <div className="flex flex-wrap md:w-11/12 m-auto">
            <div className="w-40 pr-6 my-5">
              <p className='text-xl md:text-3xl font-semibold text-uicore-primary'>40.000+</p>
              <p className='text-uicore-body text-sm'>Successful transactions with Onlybank</p>
            </div>
            <div className="w-40 border-l px-6 my-5">
              <p className='text-xl md:text-3xl font-semibold text-uicore-primary'>35.000+</p>
              <p className='text-uicore-body text-sm'>Registered users on Onlybank</p>
            </div>
            <div className="w-40 sm:w-40 sm:border-l sm:pl-6 my-5">
              <p className='text-xl md:text-3xl font-semibold text-uicore-primary'>20 Cities</p>
              <p className='text-uicore-body text-sm'>Covered by Onlybank</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <Image src={statisImage} alt='' height={680} width={680} className='m-auto w-full' />

        </div>
      </div>

    </section>
  )
}

export default Statistics