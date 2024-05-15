import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center">
                    {/* <img src={logo} alt="Logo" className="h-8 mr-3" /> */}
                    <Image
                        src="Brand.svg"
                        width={10}
                        height={10}
                        alt="the puc project image"
                    />
                    <span className="text-white font-semibold text-xl">The PUC Project</span>
                </div>
                <div className="flex items-center">
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Login
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        About Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;