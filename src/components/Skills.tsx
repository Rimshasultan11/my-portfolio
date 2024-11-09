import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
const Skills = () => {
  return (
    <div id='skills'>
       <div className=' title text-center mt-[10%]'  data-aos="zoom-in"><span>Skills</span></div>
     <div className='grid gap-5 md:grid-cols-1  lg:grid-cols-2 ml-[10%] mt-[5%]'>
     <div className=' text-center w-[400px] h-[300px] rounded-2xl bg-[#e93654] hover:bg-black m-[5%] p-[5%] hover:text-[#e93654] hover:shadow-2xl hover:shadow-[#e93654] border-2 hover:border-[#e93654] border-[white]' data-aos="fade-right" data-aos-duration="1100" data-aos-delay="100">
      <TiHtml5   className=' cursor-pointer  text-8xl ml-[40%]'/>
      <h2 className=' text-center text-4xl ' style={{textShadow:"0 0 10px rgba(250, 7, 108, 0.952)"}}>HTML</h2>
      <div className=" w-[300px] bg-gray-200 rounded-full dark:bg-gray-700 mt-10 border-2 border-[black]">
    <div className="progress bg-[#e93654] text-xs font-medium text-blue-100 text-center p-0.5  rounded-full" style={{width:"90%"}}>  90%</div>
  </div>
     </div>
     <div className=' text-center w-[400px] h-[300px] rounded-2xl bg-[#e93654] hover:bg-black m-[5%] p-[5%] hover:text-[#e93654] hover:shadow-2xl hover:shadow-[#e93654] border-2 hover:border-[#e93654] border-[white]' data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
      <FaCss3Alt  className=' cursor-pointer  text-8xl ml-[40%]' />
     <h2 className=' text-center text-4xl ' style={{textShadow:"0 0 10px rgba(250, 7, 108, 0.952)"}}>CSS</h2>
      <div className=" w-[300px] bg-gray-200 rounded-full dark:bg-gray-700 mt-10 border-2 border-[black]">
    <div className="progress bg-[#e93654] text-xs font-medium text-blue-100 text-center p-0.5  rounded-full" style={{width:"80%"}}>  80%</div>
  </div>
    </div>
     </div>
     <div className='grid md:grid-cols-1  lg:grid-cols-2'>
     <div className=' text-center w-[400px] h-[300px] rounded-2xl bg-[#e93654] hover:bg-black  ml-[12%]  lg:ml-[65%] p-[5%] hover:text-[#e93654] hover:shadow-2xl hover:shadow-[#e93654] border-2 hover:border-[#e93654] border-[white]' data-aos="zoom-in" data-aos-duration="1300" data-aos-delay="300">
      <SiMicrosoftexcel  className=' cursor-pointer  text-8xl ml-[40%]' />
     <h2 className=' text-center text-4xl ' style={{textShadow:"0 0 10px rgba(250, 7, 108, 0.952)"}}>MS Office</h2>
      <div className=" w-[300px] bg-gray-200 rounded-full dark:bg-gray-700 mt-10 border-2 border-[black]">
    <div className="progress bg-[#e93654] text-xs font-medium text-blue-100 text-center p-0.5  rounded-full" style={{width:"80%"}}>  80%</div>
  </div>
    </div>
     </div>
     <div className='  grid md:grid-cols-1  lg:grid-cols-2  gap-5 ml-[10%]'>
     <div className=' text-center w-[400px] h-[300px] rounded-2xl bg-[#e93654] hover:bg-black m-[5%] p-[5%] hover:text-[#e93654] hover:shadow-2xl hover:shadow-[#e93654] border-2 hover:border-[#e93654] border-[white]' data-aos="fade-right" data-aos-duration="1400" data-aos-delay="400">
      <TbBrandJavascript   className=' cursor-pointer  text-8xl ml-[40%]'/>
      <h2 className=' text-center text-4xl ' style={{textShadow:"0 0 10px rgba(250, 7, 108, 0.952)"}}>JavaScript</h2>
      <div className=" w-[300px] bg-gray-200 rounded-full dark:bg-gray-700 mt-10 border-2 border-[black]">
    <div className="progress bg-[#e93654] text-xs font-medium text-blue-100 text-center p-0.5  rounded-full" style={{width:"70%"}}>  70%</div>
  </div>
     </div>
     <div className=' text-center w-[400px] h-[300px] rounded-2xl bg-[#e93654] hover:bg-black m-[5%] p-[5%] hover:text-[#e93654] hover:shadow-2xl hover:shadow-[#e93654] border-2 hover:border-[#e93654] border-[white]' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
      <SiTypescript  className=' cursor-pointer  text-8xl ml-[40%]' />
     <h2 className=' text-center text-4xl ' style={{textShadow:"0 0 10px rgba(250, 7, 108, 0.952)"}}>TypeScript</h2>
      <div className=" w-[300px] bg-gray-200 rounded-full dark:bg-gray-700 mt-10 border-2 border-[black]">
    <div className="progress bg-[#e93654] text-xs font-medium text-blue-100 text-center p-0.5  rounded-full" style={{width:"70%"}}>  70%</div>
  </div>
    </div>
     </div>

     {/* <div><TbBrandJavascript  className=' cursor-pointer  text-6xl hover:bg-[#e93654] hover:rounded-full text-[#e93654] hover:text-white hover:shadow-2xl hover:shadow-[#e93654]'/></div>
     <div><SiTypescript  className=' cursor-pointer  text-6xl hover:bg-[#e93654] hover:rounded-full text-[#e93654] hover:text-white hover:shadow-2xl hover:shadow-[#e93654]' /></div>
     <div><SiMicrosoftexcel  className=' cursor-pointer  text-6xl hover:bg-[#e93654] hover:rounded-full text-[#e93654] hover:text-white hover:shadow-2xl hover:shadow-[#e93654]' /></div>
      */}
     
     
     </div>

  )
}

export default Skills
