import React from 'react'

const Contact = () => {
  return (
    <section className='relative py-5 grid grid-cols-1 lg:grid-cols-2 '>


<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
</div>
<div className='z-10'>
<h1 className='text-2xl font-semibold dark:text-white my-3'>Let's Connect</h1>
<p className="dark:text-[#ADB7BE]  text-black mb-4 w-full lg:max-w-md font-semibold">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>

</div>
    </section>
  )
}

export default Contact