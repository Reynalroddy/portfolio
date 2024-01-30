import React from 'react'
import ProjectCard from './ProjectCard'
import {project} from '../utils/projects'
const Projects = () => {
  return (
    <section className='py-5'>
<div className='flex  justify-start lg:justify-center'>
    <h1 className='text-3xl font-semibold dark:text-white'>Recent Projects</h1>
</div>


<div className='py-5 grid grid-cols-1 lg:grid-cols-3 gap-8'>
    {
project.map((item,i)=>{
    return  <ProjectCard key={i} item={item} />
})
    }
</div>
    </section>
  )
}

export default Projects