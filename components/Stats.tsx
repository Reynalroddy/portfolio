import React from 'react'

const Stats = () => {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-4 rounded-md border-2 dark:border-slate-400 border-black  lg:mt-12 py-4 gap-3 px-16 lg:px-32 w-full mb-12 '>
<div>
<h1 className='text-black dark:text-white text-2xl font-extrabold'>100 +</h1>
<span className='text-black dark:text-white text-medium font-extrabold'>projects</span>
</div>

<div>
<h1 className='text-black dark:text-white text-2xl font-extrabold'>100 +</h1>
<span className='text-black dark:text-white text-medium font-extrabold'>Users</span>
</div>

<div>
<h1 className='text-black dark:text-white text-2xl font-extrabold'>7+</h1>
<span className='text-black dark:text-white text-medium font-extrabold'>Article</span>
</div>

<div>
<h1 className='text-black dark:text-white text-2xl font-extrabold'>4+</h1>
<span className='text-black dark:text-white text-medium font-extrabold'>Years</span>
</div>


    </div>
  )
}

export default Stats