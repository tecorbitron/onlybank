import Image from 'next/image'
import React from 'react'
import mobile1Img from '@/assets/Hero-mobile1.webp'
import mobile2Img from '@/assets/Hero-mobile2.webp'
import mobile3Img from '@/assets/Hero-mobile3.webp'


const Statistics = () => {
  return (
    <section>
      {/* Mobile Images  */}
      <div className="hidden md:block h-[10rem] bg-uicore-primary"></div>
      <div className="flex justify-center w-full my-20 gap-8 relative z-10 -mt-[5rem] md:-mt-[15rem]">
        <Image src={mobile1Img} alt='' height={280} width={280} className='w-1/5' />
        <Image src={mobile2Img} alt='' height={280} width={280} className='w-1/5' />
        <Image src={mobile3Img} alt='' height={280} width={280} className='w-1/5' />
      </div>

    </section>
  )
}

export default Statistics