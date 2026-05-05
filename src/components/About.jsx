import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
        <div className='w-full flex gap-5 border-t-1px pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='flex gap-10 uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh]  rounded-3xl overflow-hidden'>
               <img
                  src="https://ochi-clone-website.vercel.app/_next/image?url=%2FHomepage-Photo-663x469.jpg&w=1080&q=75"
                  alt="vise project"
                  className='w-full h-full object-cover'
                />
            </div>
        </div>
    </div>
  )
}

export default About