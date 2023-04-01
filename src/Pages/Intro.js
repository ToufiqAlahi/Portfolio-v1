import React from 'react';
import introImage from "../image/intro.jpg";
import { AiOutlineGithub, AiOutlineDownload } from 'react-icons/ai';

const Intro = () => {
    return (
        <div style={{
            backgroundImage: `url(${introImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <div className='flex flex-col justify-center items-center'>
                <div >
                    <h1 className='text-6xl text-white font-serif'>Md. Asadul Islam</h1>
                    <h3 className='text-center text-white font-serif mt-5'>FRONT END SOFTWARE ENGINEER</h3>
                    <div className='flex text-gray-400 justify-center items-center mt-5'>
                        <button className='flex text-center items-center border-[1px] border-gray-400 py-3 px-4 mr-5 hover:text-white text-xl transition-all duration-300 transform'><AiOutlineDownload className='text-3xl' /> <span className='ml-3'>Download CV</span></button>
                        <a
                            href="https://github.com/iripon07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex text-center items-center border-[1px] border-gray-400 py-3 px-4 hover:text-white text-xl transition-all duration-300 transform'><AiOutlineGithub className='text-3xl' /> <span className='ml-3'>Download CV</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;