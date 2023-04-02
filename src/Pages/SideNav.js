import React from 'react';
import { RiArrowUpCircleLine } from 'react-icons/ri';

const SideNav = () => {
    return (
        <div className='relative'>
            <nav className='absolute row-auto'>
                <ul className='flex flex-col'>
                    <li className='bg-gray-500 rounded-full'></li>
                    <li className='text-white h-2 w-2  my-5'><RiArrowUpCircleLine /></li>
                    <li className='bg-white h-2 w-2 '><RiArrowUpCircleLine /></li>
                    <li className='bg-white h-2 w-2 '><RiArrowUpCircleLine /></li>
                    <li className='bg-white h-2 w-2 '><RiArrowUpCircleLine /></li>
                    <li className='bg-white h-2 w-2 '><RiArrowUpCircleLine /></li>
                    <li className='bg-white h-2 w-2 '><RiArrowUpCircleLine /></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;