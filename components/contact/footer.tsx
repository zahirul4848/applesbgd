import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className='mx-10 my-10'>
        <div className="flex gap-4">
          <Image src={"/logo.jpg"} alt='Apples Logo' width={200} height={200} className='w-20 h-20'/>
          <div>
            <h1 className='uppercase'>Apples International Ltd.</h1>
            <p className="text-sm w-[16rem] text-gray-800 dark:text-gray-400">Expert Cleaning, Pest Control and Maintenance Services for Office and Home</p>
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