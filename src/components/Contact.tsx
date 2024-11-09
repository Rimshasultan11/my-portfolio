import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
         <div className=' title text-center mt-[10%]'  data-aos="zoom-in"><span>Contact Me</span></div>
       <form className=" max-w-lg mx-auto mt-[5%]">
        <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
        <label htmlFor="Name" className='text-xl'>Name</label>
        <input
          type="text"
          placeholder="Your Name" required
          className="w-full p-2 border border-[#e93654] rounded mb-4 bg-transparent"
        /></div>
        <div data-aos="zoom-in" data-aos-duration="1300" data-aos-delay="300">
          <label htmlFor="email" className='text-xl'>Email</label>
        <input
          type="email"
          placeholder="Your Email" required
          className="w-full p-2 border border-[#e93654] rounded mb-4 bg-transparent"
        /></div>
        <div data-aos="zoom-in" data-aos-duration="1400" data-aos-delay="400">
          <label htmlFor="message" className='text-xl'>Message</label>
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-[#e93654] bg-transparent rounded mb-4"
        /></div>
        <button className='w-[60%] h-[15%]  border-2 ml-[20%]  mb-[5%] rounded-3xl text-2xl  border-[#e93654] hover:bg-[#e93654]  hover:shadow-lg hover:shadow-[#e93654] hover:border-white' data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500"><a href='#contact'></a>Send Message</button>
      </form>
      
    </div>
  )
}

export default Contact
