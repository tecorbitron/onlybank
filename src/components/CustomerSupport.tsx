import React from 'react'
import { Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react';
import Link from 'next/link';

const CustomerSupport = () => {
    return (
        <section className='max-w-screen-xl m-auto py-20 px-4'>
             <h1 className='text-3xl md:text-4xl max-w-screen-md m-auto text-center text-uicore-dark leading-tight font-medium mb-8' >24/7 Customer Support</h1>
             <p className='text-uicore-body max-w-screen-sm m-auto text-center font-medium md:px-16 mb-10'>With many excellent features we are able to help you in dealing with your financial problems.</p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-24">
                {/* Map Section */}
                <div className="w-full md:w-1/2 h-96 mb-6 md:mb-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11798.415037778942!2d-2.3409384512196!3d53.22844184567861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0777a3f2c379%3A0x34cba8a2c8f5f0db!2sGoostrey%20Ln%2C%20Holmes%20Chapel%2C%20Crewe%20CW4%208AA%2C%20UK!5e0!3m2!1sen!2suk!4v1642485745854!5m2!1sen!2suk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>

                    <div className="mt-6">
                        <span className='flex items-center gap-2'> <MapPin /> Office: </span>
                        <Link href='' className='text-uicore-body underline'>4517 Washington Ave. Manchester, Kentucky 39495</Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-12">
                    <div className="">
                        <span className='flex items-center gap-2'> <MessageCircleMore /> Live Chat: </span>
                        <p className='text-uicore-body mt-2 mb-6'>(239) 555-0108</p>
                        <Link href='' className='px-4 py-2 border rounded-lg text-uicore-body'>Chat</Link>
                    </div>
                    <div className="">
                        <span className='flex items-center gap-2'> <Mail /> Email: </span>
                        <p className='text-uicore-body mt-2 mb-6'>abc@email.com</p>
                        <Link href='' className='px-4 py-2 border rounded-lg text-uicore-body'>Contact</Link>
                    </div>
                    <div className="">
                        <span className='flex items-center gap-2'><Phone /> Phone Number: </span>
                        <p className='text-uicore-body mt-2 mb-6'>(239) 555-0108)</p>
                        <Link href='' className='px-4 py-2 border rounded-lg text-uicore-body'>Call</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomerSupport