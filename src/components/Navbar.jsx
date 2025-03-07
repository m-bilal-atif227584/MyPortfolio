import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close} from '../assets'
import logo from '../assets/logo.png'

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <nav className={`navv ${styles.paddingX} w-full flex justify-center items-center fixed top-0 z-20 ${ scrolled ? "bg-[#050816]" : "bg-transparent" }`}>
      <div className="naiv flex w-full justify-between items-center max-w-7xl">
        <Link to="/" className='flex items-center gap-2' onClick={() => {setActive(""); window.scrollTo(0, 0);}}>
        <img src={logo} alt="logo" className='logo w-9 h-9 object-contain' />
        <p className='text-white text-[44px] cursor-pointer sm:block hidden'>|</p>
        <p className='text-white text-[18px] font-bold cursor-pointer sm:block hidden'>M Bilal Atif Usmani</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-[#aaa6c3]"} text-[1.2rem] hover:underline`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex justify-center items-center'} black-gradient absolute top-14 right-1 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4 py-2'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-[#aaa6c3]"} text-[16px] duration-200`} onClick={() => {setActive(link.title); setToggle(!toggle); }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar