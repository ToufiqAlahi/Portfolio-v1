import React from 'react';
import introImage from "../image/intro.jpg";
import { AiOutlineGithub, AiOutlineDownload } from 'react-icons/ai';
import cv from "../image/Md__Asadul_Islam.pdf";

const Intro = () => {
    return (
        <div className='flex justify-center items-center' style={{
            backgroundImage: `url(${introImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <div >
                <div >
                    <h1 className='lg:text-7xl text-white font-serif'>Md. Asadul Islam</h1>
                    <h3 className='text-center text-white font-serif mt-5'>FRONT END SOFTWARE ENGINEER</h3>
                    <div className='flex text-gray-400 justify-center items-center mt-5'>
                        <a
                            href={cv}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex text-center items-center border-[1px] border-gray-400 py-2 px-4 hover:text-white
                            hover:bg-opacity-70 hover:border-white text-xl transition-all duration-300  transform mr-3'><AiOutlineDownload className='text-3xl' /> <span className='ml-3'>Download CV</span></a>
                        <a
                            href="https://github.com/iripon07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex text-center items-center border-[1px] border-gray-400 py-2 px-3 hover:text-white text-xl transition-all duration-300 transform'><AiOutlineGithub className='text-3xl' /> <span className='ml-3'>Download CV</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;