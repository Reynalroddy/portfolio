"use client"
import Image from 'next/image'
import React from 'react'
import LandingImg from '../assets/hero.svg';
import { TypeAnimation } from 'react-type-animation';
const Header = () => {
    return (
        <div className="">
          <div className="relative isolate overflow-hidden ">
            <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
              <div className="px-6 lg:px-0 lg:pt-4">
                <div className="mx-auto max-w-2xl">
                  <div className="max-w-lg">
                   
                 
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                      Hello,I&apos;m Olanrewaju Ajayi
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                    A Passionate  
                   
                    <TypeAnimation
            sequence={[
              " Frontend Engineer",
              2000,
            " Web Developer",
              2000,
              " Mobile App Developer",
              2000,
              " Full-stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
                     dedicated to crafting intuitive and elegant web and mobile experiences.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Hire Me
                      </a>
                      <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                        Download CV <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
              <Image src={LandingImg} alt='landing' className='w-full h-[400px]' />
              </div>
            </div>
            {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" /> */}
          </div>
        </div>
      )
}

export default Header