import Image from 'next/image'
import React from 'react'
import bgElement from '@/assets/HeroBG-Element-1.webp'
import fblogo from '@/assets/logos/fb.svg'
import inlogo from '@/assets/logos/insta.svg'
import twlogo from '@/assets/logos/twitterx.svg'
import mobile1Img from '@/assets/Hero-mobile1.webp'
import mobile2Img from '@/assets/Hero-mobile2.webp'
import mobile3Img from '@/assets/Hero-mobile3.webp'
import { ArrowRight, Mail, MoveRight, Phone } from 'lucide-react'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div className='relative bg-uicore-primary h-[160vh] w-full'>

            {/* small Nav  */}
            <nav className='py-1 bg-uicore-secondary'>
                <div className="flex justify-between max-w-screen-xl m-auto">
                    <div className="flex items-center gap-5 list-none">
                        <li><Image src={fblogo} alt='fb icon' height={20} width={20} /></li>
                        <li><Image src={twlogo} alt='twiter icon' height={18} width={18} /></li>
                        <li><Image src={inlogo} alt='instagram icon' height={20} width={20} /></li>
                    </div>
                    <div className="flex items-center text-white text-sm gap-10">
                        <p className='flex items-center gap-2'> <Phone size={16} /> 0987654321</p>
                        <p className='flex items-center gap-2'> <Mail size={16} /> abc@gmail.com</p>
                    </div>
                </div>
            </nav>

            {/* Background element  */}
            <Image src={bgElement} alt='' height={480} width={480}
                className='absolute top-10 left-0' />

            <Image src={bgElement} alt='' height={480} width={480}
                className='absolute bottom-40 right-0' />

            {/* Hero Content  */}
            <div className="relative z-10 max-w-screen-lg m-auto mt-[25vh] text-center">
                <h1 className='text-6xl text-white leading-tight font-medium mb-8' >The simpler way to check your spending and balances</h1>
                <p className='text-uicore-accent max-w-screen-md m-auto text-center font-medium px-8'>We want more people to have knowledge of their finances, with easy access, and without getting involved with budgeting or putting in the manual work of sorting.</p>

                <div className="flex gap-5 py-4 border-white text-white w-fit m-auto mt-10 border-b">
                    <input type="text" placeholder='Enter your email' className='bg-transparent outline-none placeholder-white' />
                    <Button className='flex justify-center gap-2 text-lg font-semibold p-6' >
                        Get Started <ArrowRight strokeWidth={3} />
                    </Button>
                </div>

                {/* Mobile Images  */}
                <div className="flex justify-center my-20 gap-8">
                    <Image src={mobile1Img} alt='' height={280} width={280} />
                    <Image src={mobile2Img} alt='' height={280} width={280} />
                    <Image src={mobile3Img} alt='' height={280} width={280} />
                </div>

            </div>
        </div>
    )
}

export default HeroSection