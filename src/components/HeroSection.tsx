'use client';

import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div className="flex relative min-h-screen flex-col  justify-center items-center gap-2 ">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h2 className="md:text-6xl text-3xl p-1 mt-20 bg-gradient-to-br from-slate-100 via-stone-300 to-slate-300 text-transparent bg-clip-text font-[Inter]">
        MASTER THE ART OF MUSIC
      </h2>
      <p className="text-center font-normal md:w-[40%] w-full mt-4">
      Dive into our comprehensive music courses and transform your musical journey today. Whether you &apos; re a beginner or looking to refine your skills, join us to unlock your true potential.
      </p>
      <Link href={"#"} className="mt-5">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
      </Button>
      </Link>
    </div>
  )
}

export default HeroSection