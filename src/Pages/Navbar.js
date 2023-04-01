import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {
    return (
        <nav className='bg-slate-600 h-20 w-full fixed font-serif'>
            <input type="checkbox" id="check" />
            <label for="check" className='float-right text-white text-3xl leading-[80px] mr-10 lg:hidden'>
                <i>{GiHamburgerMenu}</i>
            </label>
            <label className='text-white leading-[80px] md:leading-[80px] pl-12 md:pl-24 md:text-4xl text-3xl'>RIPON</label>
            <ul className='float-right mr-10 flex leading-[80px] space-x-4 text-black uppercase rounded-md fixed lg:relative h-[100vh] lg:h-0 w-[100%] lg:w-fit top-20 lg:top-0 left-0 transition-all duration-300 lg:transition-none text-center bg-slate-700'>
                <li>Intro</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;