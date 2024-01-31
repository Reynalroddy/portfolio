import React from 'react'
import ModeToggle from './ThemeToggle'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav className='flex  py-4 sm:px-16 lg:px-24 px-4 items-center justify-between'>
{/* logo */}
<Link href='/'>
<h1 className='font-extrabold text-3xl text-primary '>R</h1>
</Link>

<ModeToggle/>
   </nav>
  )
}

export default Navbar