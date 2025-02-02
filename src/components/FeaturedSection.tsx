'use client';

import Image from "next/image";
import courseData from "@/data/music-course.json"
import { BackgroundGradient } from "./ui/backgroud-gradient";


const courses = courseData.courses

function FeaturedSection() {
    return (
        <div className='py-12 bg-gray-900 w-screen flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center'>
                <h3 className='text-zinc-300 text-4xl pb-3'>
                    Featured Courses
                </h3>
                <p>
                    LEARN FROM THE BEST
                </p>
            </div>
            <div className='mt-5 flex flex-wrap gap-5 items-center justify-center'>
                {courses.map((course) => {
                    return (
                        <div className="w-[300px]"
                            key={course.slug}>
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                <div className="">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        height="400"
                                        width="400"
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                    {course.title}
                                </p>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {course.description}
                                </p>
                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    <span>Check now </span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                        ${course.price}
                                    </span>
                                </button>
                            </BackgroundGradient>
                        </div>
                    )
                })}
            </div>
            <div className="py-10">
                <button className="p-4 bg-slate-700 text-slate-100 rounded-xl">
                    VIEW ALL COURSES
                </button>
            </div>
        </div>
    )
}

export default FeaturedSection