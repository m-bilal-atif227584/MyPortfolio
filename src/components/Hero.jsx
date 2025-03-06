import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='hero relative w-full h-screen mx-auto'>
      <div className={`herocont ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='heroname '>Bilal</span></h1>
          <p className={`${styles.heroSubText} text-[#f3f3f3] mt-2`}>I develop seamless, visually stunning, user-friendly <br className='sm:block hidden' /> interfaces and high-performance web and mobile applications</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute @min-xs:bottom-32 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start'>
            <motion.dev animate={{ y: [0, 30, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='scrollanim w-3 h-3 rounded-full bg-[black]' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero