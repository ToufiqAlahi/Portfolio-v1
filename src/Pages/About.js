import React from 'react';
import me from "../image/ripon.png";
import aboutBg from "../image/about.jpg";

const About = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${aboutBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                objectFit: "contain",
            }}>

            <div className='max-w-screen-2xl mx-auto py-16'>
                <div className='flex'>
                    <div className='text-white px-10'>
                        <h1 className='text-7xl text-white font-serif mb-3'>Hey, I'm Asadul.</h1>
                        <p className='text-2xl font-semibold mb-2'>I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.</p>
                        <hr class="border-[1px] w-1/5 rounded-full border-blue-500 my-5" />
                        <p className='text-xl text-gray-300 font-serif'> <span className='text-white font-extrabold'>I'm a fourth year student at Northeastern University</span> in Boston studying computer science and interaction design. I have experience developing and designing software for the web, from simple landing pages to progressive web applications. I strive to create software that not only functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences. <br /><br />I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me. <br /><br /><span className='text-white font-extrabold'>When I'm not in front of a computer screen</span>, I'm probably snowboarding, traveling, petting dogs, or learning a new song on my uke.</p>
                    </div>
                    <img className='w-full' src={me} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;