import Image from 'next/image';
import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className='mx-2 my-2 md:mx-10 md:my-10 flex flex-wrap gap-6 justify-start md:justify-center'>
        <div className="flex gap-4">
          <Image src={"/logo.jpg"} alt='Apples Logo' width={200} height={200} className='w-20 h-20'/>
          <div>
            <h1 className='uppercase'>Apples International Ltd.</h1>
            <p className="text-sm w-[16rem] text-gray-800 dark:text-gray-400">Expert Cleaning, Pest Control and Maintenance Services for Office and Home</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 max-w-[15rem]'>
          <div className='flex items-center gap-3'>
            <a
              className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.facebook.com/applesbgd?mibextid=JRoKGi"
              target="_blank"
            >
              <BsFacebook />
            </a>
            <a href="https://www.facebook.com/applesbgd" target="_blank" className='text-sm'>facebook.com/applesbgd</a>
          </div>
          <div className='flex items-center gap-3'>
            <a
              className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="mailto:applesbgd2015@gmail.com"
              target="_blank"
            >
              <MdEmail /> 
            </a>
            <a
              href="mailto:applesbgd2015@gmail.com"
              target="_blank"
              className='text-sm'
            >
              applesbgd2015@gmail.com
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <span
              className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <FaLocationDot /> 
            </span>
            <span
              className='text-sm'
            >
              Dag- 10, East Haradia, Bara Beraid, Badda, Gulshan, Dhaka- 1212
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-2 max-w-[15rem]'>
          <div className='flex items-center gap-3'>
            <span
              className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <FaPhone /> 
            </span>
            <span
              className='text-sm tracking-wider'
            >
              01715 580 495
            </span>
          </div>
          <div className='flex items-center gap-3'>
            <span
              className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <FaPhone /> 
            </span>
            <span
              className='text-sm tracking-wider'
            >
              01615 580 495
            </span>
          </div>
          <div className='flex items-center gap-3'>
            <span
              className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <FaPhone /> 
            </span>
            <span
              className='text-sm tracking-wider'
            >
              01911 250 585
            </span>
          </div>
          
        </div>
      </div>
      <div className='flex'>
        <div className='bg-red-600 h-2 w-full' />
        <div className='bg-green-600 h-2 w-full' />
        <div className='bg-yellow-600 h-2 w-full' />
      </div>
    </footer>
  )
}

export default Footer;