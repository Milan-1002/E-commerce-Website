import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 bordert-t'>
        <Title text1={'ABOUT'} text2 ={'US'}/>
      </div>
      <div className='my-10 flex flex-col sm:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, at quos accusantium facilis illo a quod, consequuntur distinctio doloribus repellendus modi cum corrupti tempora sit velit deleniti est eligendi ea.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem porro reiciendis quia fuga ipsum dolorem maiores perspiciatis, culpa odio nihil nulla rerum deleniti corporis consequatur voluptas doloremque odit sequi quos.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, esse assumenda. Vero, animi perferendis esse vitae saepe minima doloremque veniam aliquam. Earum voluptates corrupti dolorum dicta sed, autem totam architecto!</p>

        </div>


      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-13 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium atque quam. Quam nam velit ab, deserunt aliquam eum doloribus iure, rem sint accusantium quasi modi id, alias nobis vel?</p>
          
          </div>

           <div className='border px-10 md:px-13 py-8 sm:py-20 flex flex-col gap-5 ml-0.5 mr-0.5'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium atque quam. Quam nam velit ab, deserunt aliquam eum doloribus iure, rem sint accusantium quasi modi id, alias nobis vel?</p>
          
          </div>

           <div className='border px-10 md:px-13 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium atque quam. Quam nam velit ab, deserunt aliquam eum doloribus iure, rem sint accusantium quasi modi id, alias nobis vel?</p>
          
          </div>

        </div>

        <NewsLetterBox />



    </div>
  )
}

export default About