import React from 'react'
import github from '../assets/github.png'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }} className="projcard h-full rounded-2xl sm:w-[360px] w-full green-pink-gradient">
        <div className='inn bg-[#151030] h-full w-full rounded-2xl'>
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
            <div className="blackk absolute inset-0 flex justify-end card-img_hover">
              <div onClick={() => window.open(source_code_link, "_blank")} className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer black-gradient">
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className="coo mt-5">
            <h3 onClick={() => window.open(link, "_blank")} className='text-white font-bold text-[24px] hover:text-[#915eff] duration-200 cursor-pointer'>{name}</h3>
            <p className='dis mt-2 text-[14px] text-[#aaa6c3]'>{description}</p>
          </div>
          <div className="tagg mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>my work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</motion.p>
      </div>
      <div className="proj flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")