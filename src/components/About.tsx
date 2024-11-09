import React from 'react';
import Image from 'next/image';
import profile3 from '../components/public/profile3.jpg'

const About = () => {
  return (
    <div id='about'>
      <div className='title text-center' data-aos="zoom-in">
        <span>About Me</span>
      </div>

      <p className='p-10 text-lg'>
        &quot;I am a dedicated web developer and experienced teacher with skills in HTML, CSS, and TypeScript.
        I&apos;m passionate about creating visually appealing and effective websites using modern development practices.
        I am also proficient in MS Office, which supports my professional and teaching work. Teaching is my passion,
        and I am always eager to help my students learn new concepts and support their growth.&quot;
      </p>

      <div className='grid md:grid-cols-1 lg:grid-cols-2 m-5 items-center'>
        <div className="p-10 text-2xl" data-aos="zoom-in-right">
          <p className="pt-4">Experience:
            <span className='text-[#e93654]'> 5 years</span>
          </p>
          <p className="pt-4">Specialty:
            <span className='text-[#e93654]'> Web-Designer</span>
          </p>
          <p className="pt-4">Address:
            <span className='text-[#e93654]'> Hyderabad, Pakistan</span>
          </p>
          <p className="pt-4">Email:
            <span className='text-[#e93654]'> rim@gmail.com</span>
          </p>
          <p className="pt-4">Phone:
            <span className='text-[#e93654]'> +92 34XXXXXXXX</span>
          </p>
        </div>

        <div className='w-[50%] h-[40%] rounded-xl ml-[10%] border-2 border-[#e93654] shadow-md shadow-[#e93654]' data-aos="zoom-in-left">
          <Image 
            src={profile3}
            alt="About Profile" 
            width={400} 
            height={300} 
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;