import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='w-[250px]'>
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} className='service-card relative w-full green-pink-gradient rounded-[20px]'>
        <div options={{
          max : 45,
          scale : 1,
          speed : 450
        }} className='cardd bg-[#151030] rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt="title" className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          <div className='mov absolute h-4 w-4 '></div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div >
    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'>I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React.js, Node.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</motion.p>
    <div className="serr flex flex-wrap gap-14 w-[80vw]">
      { services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      )) }
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")