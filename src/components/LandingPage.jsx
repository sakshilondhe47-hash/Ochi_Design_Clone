import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    motion
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen text-black bg-white pt-1'>
            <div className='textstructure mt-52 px-20'>
                {["We Create", "Eye Opening", "Presentations"].map((item,index)=>{
                    return <>
                    <div className='masker '>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                              <motion.div 
                                initial={{width: 0}} 
                                animate={{width: "9vw"}}
                                transition={{ease: [0.75, 0, 0.24, 1], duration: 1}}
                                className='mr-[1vw] w-[9vw] rounded-md h-[6vw] relative overflow-hidden mt-1 top-1vw'>
                                    <img
                                      src="https://ochi-clone-website.vercel.app/content-image01.jpg"
                                      alt="ochi"
                                      className='w-full h-full object-cover'
                                    />
                                </motion.div>)}
                              <h1 className='uppercase flex items-center text-[9vw] h-full leading-[7vw] tracking-tighter font-["Founders_Grotesk_X-Condensed"] font-bold'>{item}</h1>
                        </div>
                    </div> </>
                })}
            </div>
            <div className='border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {[
                    "For public and private companies", 
                    "From the first pitch to IPO",
                ].map((item, index)=> (
                  <p className='text-md font-md tracking-tight leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-2 border-zinc-500 font-md text-md uppercase rounded-full'>start the project</div>
                    <div className='w-10 h-10 border-2 border-zinc-500 flex items-center justify-center rounded-full'>
                        <span className='rotate-45deg'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;