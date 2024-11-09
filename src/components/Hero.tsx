import React from 'react';
import Image from 'next/image';
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import profile3 from '../components/public/profile3.jpg'

const Hero = () => {
  return (
    <div>
      <div className='grid md:grid-cols-1 lg:grid-cols-2'>
        <div className='p-10 m-10'>
          <div className='text-2xl m-[5%]' data-aos="zoom-in">
            Hi I&apos;m <span>Rimsha</span>
          </div>
          <div className="text-3xl" data-aos="zoom-in">
            I&apos;m a <span className="text-[#e93654]" style={{ textShadow: "0 0 10px rgba(250, 7, 108, 0.952)" }}>Web-Developer</span>
          </div>
          <p data-aos="zoom-in" className='w-[400px] pt-5 text-xl'>
            I am a frontend developer with a passion for building responsive and modern web applications
          </p>
          <div data-aos="zoom-in" className='pt-10 gap-10 flex rounded-full'>
            <RiFacebookCircleLine className='cursor-pointer text-6xl hover:bg-[#e93654] hover:rounded-full text-[#e93654] hover:text-white hover:shadow-2xl hover:shadow-[#e93654]' />
            <AiOutlineGithub className='cursor-pointer text-6xl hover:bg-[#e93654] hover:rounded-full text-[#e93654] hover:text-white hover:shadow-2xl hover:shadow-[#e93654]' />
            <AiOutlineInstagram className='cursor-pointer text-6xl hover:bg-[#e93654] hover:rounded-full text-[#e93654] hover:text-white hover:shadow-2xl hover:shadow-[#e93654]' />
            <TiSocialLinkedinCircular className='cursor-pointer text-6xl hover:bg-[#e93654] hover:rounded-full text-[#e93654] hover:text-white hover:shadow-2xl hover:shadow-[#e93654]' />
          </div>
          <button data-aos="zoom-in" className='w-[60%] h-[15%] border-2 m-[10%] rounded-3xl text-2xl border-[#e93654] hover:bg-[#e93654] hover:shadow-lg hover:shadow-[#e93654] hover:border-white'>
            <a href='#contact'>Hire me</a>
          </button>
        </div>
        <div data-aos="fade-left" className='lg:ml-[40%] m-[20%]' style={{ position: 'relative', height: '50vh', width: '300px', borderRadius: "50%", boxShadow: "0 0 50px rgba(250, 7, 108, 0.952)", marginTop: "5%" }}>
          <Image 
            src= {profile3} // Use a relative path from the public directory
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            style={{ backgroundSize: "cover", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;