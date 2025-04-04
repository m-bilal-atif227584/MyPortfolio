import React, {Suspense} from 'react'
// import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

// const BallCan = React.lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>My tech stack</p>
      <h2 className={styles.sectionHeadText}>Skills.</h2>
    </motion.div >
    <div className="tech flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col' key={technology.name}>
          {/* <Suspense fallback={<div></div>}> */}
          {/* <BallCanvas icon={technology.icon} /> */}
          {/* </Suspense> */}
          <img className='skillimge duration-300' src={technology.icon} alt={technology.name} />
          <div className='text-center tecnam'>{technology.name}</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills")