import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    return (
        <div className='w-full py-20 bg-[#004D43] rounded-tl-[14px] rounded-tr-[14px]'>
            <div className="marquee-text  border-t-2 border-b-2 border-zinc-200 flex gap-10  whitespace-nowrap items-center overflow-hidden">
                <motion.div>

                </motion.div>
                <motion.h1
                    className='uppercase text-[28vw] leading-none font-["Founders_Grotesk_X_Condensed"] text-white font-medium -mb-32 pt-10'
                    animate={{ x:"100%"}}
                    
                    transition={{
                        ease: "linear",
                        repeat: Infinity,
                        duration: 8
                    }}
                    
                >
                    We Are Ochi
                </motion.h1>
                <motion.h1
                    className='uppercase text-[28vw] leading-none font-["Founders_Grotesk_X_Condensed"] text-white font-medium -mb-32 pt-10'
                    animate={{ x:"100%"}}
                    transition={{
                        ease: "linear",
                        repeat: Infinity,
                        duration: 8
                    }}
                >
                    We Are Ochi
                </motion.h1>
                <motion.h1
                    className='uppercase text-[28vw] leading-none font-["Founders_Grotesk_X_Condensed"] text-white font-medium -mb-32 pt-10'
                    animate={{ x:"100%"}}
                    transition={{
                        ease: "linear",
                        repeat: Infinity,
                        duration: 8
                    }}
                >
                    We Are Ochi
                </motion.h1>
                <motion.h1
                    className='uppercase text-[28vw] leading-none font-["Founders_Grotesk_X_Condensed"] text-white font-medium -mb-32 pt-10'
                    animate={{ x:"100%"}}
                    transition={{
                        ease: "linear",
                        repeat: Infinity,
                        duration: 8
                    }}
                >
                    We Are Ochi
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee