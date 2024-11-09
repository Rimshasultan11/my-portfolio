"use client"
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import React, { useEffect } from 'react'
import Footer from '@/components/Footer'
import AOS from "aos"
import "aos/dist/aos.css"
const Hello = () => {

useEffect(()=>{
  AOS.init({
 easing : "ease-out-back",
 duration : 1200,
 delay : 100,
 mirror : true,
 anchorPlacement : "bottom-bottom",
 offset : 160,
  });
  AOS.refresh()
}, []);

  return (
    <div>
  <main>
 <Hero/>
<About/>
<Skills/>
<Project/>
<Contact/>
<Footer/>
  </main>
    </div>
  )
}

export default Hello
