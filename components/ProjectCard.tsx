import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
// import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
 import { EyeIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DialogDemo } from './DialogModal'
const ProjectCard = ({item}:any) => {
  return (
    <Card className='group relative overflow-hidden h-52 md:h-72 w-full'>
        <img src={item.image}  alt='' className='overlay absolute top-0 left-0 w-full h-full' />
         <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
<DialogDemo item={item}/>
        </div>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    
  </Card>
  
  )
}

export default ProjectCard