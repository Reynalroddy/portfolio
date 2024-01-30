import React from 'react'
import ModeToggle from './ThemeToggle'

const Navbar = () => {
  return (
   <nav className='flex  py-4 sm:px-16 lg:px-24 px-4 items-center justify-between'>
{/* logo */}
<h1 className=' font-extrabold text-3xl text-primary '>R</h1>
<ModeToggle/>
   </nav>
  )
}

export default Navbar