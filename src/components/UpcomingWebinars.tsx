'use client';

import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Instrument',
            description:
                'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Music Production Essentials',
            description:
                'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
        },
        {
            title: 'Live Performance Techniques',
            description:
                'Enhance your live performance skills with expert tips and strategies.',
            slug: 'live-performance-techniques',
            isFeatured: true,
        },
        {
            title: 'Digital Music Marketing',
            description:
                'Learn how to promote your music effectively in the digital age.',
            slug: 'digital-music-marketing',
            isFeatured: true,
        },
    ];

    return (
        <div className='py-3 bg-gray-900 w-screen flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center'>
                <h3 className='text-zinc-300 text-4xl pb-3'>
                    Upcoming Webinars
                </h3>
                <p>
                    ENHANCE YOUR MUSICAL JOURNEY
                </p>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: webinar.slug
                    }
                ))} />
            </div>
            <div className="py-1">
                <button className="p-4 bg-slate-700 text-slate-100 rounded-xl">
                    VIEW ALL
                </button>
            </div>
        </div>
    )
}
export default UpcomingWebinars