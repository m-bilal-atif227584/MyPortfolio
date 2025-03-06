import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name] : value, })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name : form.name,
        to_name : 'M BILAL ATIF USMANI',
        from_email : form.email,
        to_email : 'm.bilal227584@gmail.com',
        message : form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.')
      setForm({
        name : '',
        email : '',
        message : '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong.');
    })
  }

  return (
    <div className='mt-xl-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='mot flex-[0.75] bg-[#100d25] rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form onSubmit={handleSubmit} ref={formRef} className='mtt flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mbb'>Your Name</span>
            <input type="text" name='name' value={form.name} required onChange={handleChange} placeholder="What's your name?" className='padd bg-[#151030] placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mbb'>Your Email</span>
            <input type="email" name='email' value={form.email} required onChange={handleChange} placeholder="What's your email?" className='padd bg-[#151030] placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mbb'>Your Message</span>
            <textarea rows="7" name='message' value={form.message} required onChange={handleChange} placeholder="What do you want to say?" className='padd bg-[#151030] placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium resize-none' />
          </label>
          <button type='submit' className='bg-[#151030] paddi outline-none w-fit text-white font-bold shadow-md shadow-[#050816] rounded-xl cursor-pointer'>{loading ? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")