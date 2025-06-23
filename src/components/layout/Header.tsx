"use client"; // This component now uses state, so it must be a client component

import { useState } from 'react';
import Link from 'next/link';
import { HomeIcon, HeartIcon, UserIcon, CartIcon, MenuIcon, XIcon } from '@/components/icons';
import MobileMenu from './MobileMenu';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-10 bg-transparent text-black">

                <div className="w-[clamp(0px,94.215vw,1356.7px)] mx-auto flex items-center justify-between pt-4 md:pt-8">


                    <div className='flex items-center space-x-4'>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" aria-label="Open menu">
                            {isMenuOpen ? (
                                <XIcon className="h-8 w-8" />
                            ) : (
                                <MenuIcon className="h-8 w-8" />
                            )}
                        </button>

                        <Link className='hidden md:block' href="/" aria-label="Home">
                            <HomeIcon className="w-[clamp(24px,2.431vw,35px)] h-[clamp(24px,2.431vw,35px)]" />
                        </Link>

                    </div>

                    <nav className="hidden md:flex justify-between">

                        <Link href="/women"
                            className="w-[clamp(0px,9.306vw,134px)] h-[43px] grid items-center
                         hover:text-gray-500 transition-colors font-inter 
                         font-bold text-[16px] leading-[100%] tracking-[0%] 
                         text-right">WOMEN
                        </Link>

                        <Link href="/men"
                            className="w-[clamp(0px,9.306vw,134px)] h-[43px] grid items-center
                        hover:text-gray-500 transition-colors font-inter 
                        font-bold text-[16px] leading-[100%] tracking-[0%] 
                        text-right">MEN
                        </Link>

                        <Link href="/kids"
                            className="w-[clamp(0px,9.306vw,134px)] h-[43px] grid items-center
                        hover:text-gray-500 transition-colors font-inter 
                        font-bold text-[16px] leading-[100%] tracking-[0%] 
                        text-right">KIDS
                        </Link>

                    </nav>


                    <div className="flex items-center space-x-4">
                        <button aria-label="Wishlist">
                            <HeartIcon className="h-[clamp(24px,2.083vw,30px)] w-[clamp(24px,2.083vw,30px)]" />
                        </button>
                        <button aria-label="Account">
                            <UserIcon className="h-[clamp(24px,2.083vw,30px)] w-[clamp(24px,2.083vw,30px)]" />
                        </button>
                        <button aria-label="Cart">
                            <CartIcon className="h-[clamp(24px,2.083vw,30px)] w-[clamp(24px,2.083vw,30px)]" />
                        </button>
                    </div>


                </div>

            </header>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Header;