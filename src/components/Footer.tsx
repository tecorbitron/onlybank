import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-uicore-dark text-white py-10">
            <div className="mx-auto px-4 max-w-screen-xl">
                <div className="flex flex-wrap justify-between text-sm">
                    {/* Left Section */}
                    <div className="w-full md:w-1/4 mb-10 md:mb-0 space-y-4">
                        <h2 className="text-2xl font-bold">Onlybank</h2>
                        <p className="">Onlybank helps you build your dream finance</p>
                        <div className="border-t border-gray-700 my-4"></div>
                        <p className="">
                            Blk. A-B Jl. Cikutra No.125, Cikutra, Kec. Cibeunying Kidul, Charlotte, North Carolina 40124
                        </p>
                        <Link href="#" className="text-white hover:text-blue-500 mt-4 inline-block">
                            See details &rarr;
                        </Link>
                    </div>

                    {/* Links Section */}
                    <div className="w-full md:w-4/6 flex flex-wrap justify-between">
                        <div className="md:w-1/5">
                            <h3 className="text-base font-semibold mb-4">Media</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="hover:text-uicore-secondary">Privacy Policy</Link></li>
                                <li><Link href="#" className="hover:text-uicore-secondary">Development</Link></li>
                                <li><Link href="#" className="hover:text-uicore-secondary">Terms & Service</Link></li>
                            </ul>
                        </div>
                        <div className="md:w-1/5 px-2">
                            <h3 className="text-base font-semibold mb-4">About Us</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="hover:text-uicore-secondary">How it Works</Link></li>
                                <li><Link href="#" className="hover:text-uicore-secondary">All-in-One</Link></li>
                                <li><Link href="#" className="hover:text-uicore-secondary">Onlybank Plus</Link></li>
                                <li><Link href="#" className="hover:text-uicore-secondary">Onlybank Webinar</Link></li>
                                <li><Link href="#" className="hover:text-uicore-secondary">For Experts</Link></li>
                            </ul>
                        </div>
                        <div className="md:w-1/5">
                            <h3 className="text-base font-semibold mb-4">Pricing</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="hover:text-uicore-secondary">About Product</Link></li>
                                <li><Link href="#" className="hover:text-uicore-secondary">Management</Link></li>
                            </ul>
                        </div>
                        <div className="md:w-1/5">
                            <h3 className="text-base font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-uicore-secondary">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="md:w-1/5">
                            <h3 className="text-base font-semibold mb-4">Contact</h3>
                            <p className="">(077) 092 33 53</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 md:mt-20 pt-6 text-center text-sm">
                    <p>© 2024 All Right Reserved.</p>
                    <p className="mt-2 text-uicore-body max-w-xl m-auto">
                        By using this website, you understand the information being presented is provided for informational purposes only and agree to our Terms of Use and Privacy Policy.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
