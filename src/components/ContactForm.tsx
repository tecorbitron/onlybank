import React from 'react'
import { Button } from './ui/button';
import { Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react';
import Link from 'next/link';

const ContactForm = () => {
    return (
        <section className='max-w-screen-xl m-auto px-4'>
            <div className="flex flex-col md:flex-row justify-between items-center py-12 gap-24 bg-gray-50">
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

                {/* Form Section */}
                <div className="w-full md:w-1/2 md:pl-8">
                    <form className="flex flex-col space-y-4">
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <div className="flex flex-col gap-2 w-full">
                                <label>First Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label>Last Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Email:</label>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Message:</label>
                            <textarea
                                placeholder="Enter your message"
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                                rows={4}
                            ></textarea>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-sm text-gray-500">
                                I agree with the <a href="#" className="text-blue-500">Terms and Conditions</a>.
                            </label>
                        </div>
                        <Button className='flex justify-center gap-2 text-lg font-semibold p-6' >
                            Send
                        </Button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col gap-12 md:flex-row md:py-20">
                <div className="w-1/3">
                    <span className='flex items-center gap-2'> <MessageCircleMore /> Live Chat: </span>
                    <p className='text-uicore-body mt-2 mb-6'>(239) 555-0108</p>
                    <Link href='' className='px-4 py-2 border rounded-lg text-uicore-body'>Chat</Link>
                </div>
                <div className="w-1/3">
                    <span className='flex items-center gap-2'> <Mail /> Email: </span>
                    <p className='text-uicore-body mt-2 mb-6'>abc@email.com</p>
                    <Link href='' className='px-4 py-2 border rounded-lg text-uicore-body'>Contact</Link>
                </div>
                <div className="w-1/3">
                    <span className='flex items-center gap-2'><Phone /> Phone Number: </span>
                    <p className='text-uicore-body mt-2 mb-6'>(239) 555-0108)</p>
                    <Link href='' className='px-4 py-2 border rounded-lg text-uicore-body'>Call</Link>
                </div>
            </div>
        </section>
    );
}

export default ContactForm