import Image from 'next/image'
import React from 'react'
import bgElement from '@/assets/HeroBG-Element-1.webp'
import fblogo from '@/assets/logos/fb.svg'
import inlogo from '@/assets/logos/insta.svg'
import twlogo from '@/assets/logos/twitterx.svg'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div className='relative flex flex-col bg-uicore-primary h-screen w-full'>

            {/* small Nav  */}
            <nav className='hidden md:block py-1 bg-uicore-secondary'>
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
            <Image src={bgElement} alt='' height={400} width={400}
                className='absolute top-10 left-0 w-2/5  max-w-[400px]' />

            <Image src={bgElement} alt='' height={400} width={400}
                className='absolute bottom-40 md:bottom-[-150px] right-0 w-2/5 max-w-[400px] ' />

            {/* Hero Content  */}
            <div className=" m-auto z-10 max-w-screen-lg text-center px-4">
                <h1 className='text-3xl md:text-6xl text-white leading-tight font-medium mb-8' >The simpler way to check your spending and balances</h1>
                <p className='text-uicore-accent max-w-screen-md m-auto text-center font-medium md:px-8'>We want more people to have knowledge of their finances, with easy access, and without getting involved with budgeting or putting in the manual work of sorting.</p>

                <div className="flex flex-col md:flex-row justify-between gap-5 p-4 border-white text-white md:w-1/2 m-auto mt-10 md:border-b">
                    <input type="text" placeholder='Enter your email' className='bg-transparent outline-none placeholder-white text-center md:text-left py-5 border-b md:border-none' />
                    <Button className='flex justify-center gap-2 text-lg font-semibold p-6' >
                        Get Started <ArrowRight strokeWidth={3} />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default HeroSection