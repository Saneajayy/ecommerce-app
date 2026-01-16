import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-colmd:flex-row gap-16'>
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            Lorem ipsum do
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor      </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            
              </p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b> Convenience: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b> Exceptional customer service: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor  </p>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
