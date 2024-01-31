import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";

const Contact = () => {
  return (
    <section className='relative py-5 grid grid-cols-1 lg:grid-cols-2' id="contact" >
<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
</div>
<div className='z-10'>
<h1 className='text-2xl font-semibold dark:text-white my-3'>Let&apos;s Connect</h1>
<p className="dark:text-white  text-gray-600 mb-4 w-full lg:max-w-md font-semibold">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>

</div>

<div className='flex items-center gap-3 text-right md:text-'>
<div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Reynalroddy" target='_blank' className='bg-black dark:bg-transparent rounded-md'>
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/olanrewaju-ajayi-3066a01a8/" target='_blank' className='bg-black dark:bg-transparent rounded-md'>
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
</div>
    </section>
  )
}

export default Contact