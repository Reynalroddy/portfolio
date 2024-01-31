import Image from 'next/image'
import React from 'react'
import LandingImg from '../assets/about-image.webp';
import Tabs from './Tabs';
const About = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 my-16 gap-12'>
  <Image src={LandingImg} alt='landing' className='w-full h-[400px] rounded-md' />
<div>
<h1 className='dark:text-white text-4xl font-bold'>About Me</h1>
{/* <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white"> */}
<p className=' text-gray-600  dark:text-white text-base lg:text-lg font-semibold my-4 '>
I specialize in full stack web development, driven by a fervor for crafting interactive and responsive web applications. Proficient in JavaScript, React, Next-js, Redux, React-native , Node.js, Express, PostgreSQL, Mongo DB, Prisma ORM, SQL, Sequelize, HTML, CSS, and Git, I thrive on leveraging these technologies to build innovative solutions.

<br/> <br/>As a perpetual learner, I actively seek opportunities to broaden my expertise and embrace emerging technologies. With a collaborative mindset, I eagerly collaborate with teams to conceptualize and deliver exceptional applications.
</p>
<Tabs/>
</div>


    </div>
  )
}

export default About