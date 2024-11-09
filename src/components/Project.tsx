import React from 'react'
import Image from 'next/image'
import pic1 from '../components/public/pic1.jpg'
import  pic2 from '../components/public/pic2.jpg'
import pic3 from '../components/public/pic3.jpg'
const Project = () => {
  return (
    <div id='project'>
         <div className=' title text-center mt-[10%]'  data-aos="zoom-in"><span>Projects</span></div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {/* Project 1 */}
          <div className="bg-black border-2 border-pink-800 hover:scale-110  shadow-[#e93654] p-4 rounded-lg shadow-lg m-10" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
            <Image
              src={pic1}
              alt="Project 1"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">Static Resume</h3>
          </div>
          {/* Project 2 */}
          <div className="bg-black border-2 border-pink-800 hover:scale-110  shadow-[#e93654] p-4 rounded-lg shadow-md m-10" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
            <Image
              src={pic2}
              alt="Project 2"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">Dynamic Resume</h3>
          </div>
          {/* Project 3 */}
          <div className="bg-black border-2 border-pink-800 hover:scale-110  shadow-[#e93654] p-4 rounded-lg shadow-md m-10" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400">
            <Image
              src={pic3}
              alt="Project 3"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">Bakery Website</h3>
          </div>
        </div>
    </div>
  )
}

export default Project
