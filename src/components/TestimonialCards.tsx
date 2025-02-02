'use client';

import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { BackgroundLines } from './ui/background-lines';

function TestimonialCards() {

    const musicSchoolTestimonials = [
        {
            quote:
                'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
            name: 'Alex Johnson',
            title: 'Guitar Student',
        },
        {
            quote:
                "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
            name: 'Samantha Lee',
            title: 'Piano Student',
        },
        {
            quote:
                "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
            name: 'Michael Chen',
            title: 'Vocal Student',
        },
        {
            quote:
                'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
            name: 'Emily Taylor',
            title: 'Violin Student',
        },
        {
            quote:
                'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
            name: 'Chris Morales',
            title: 'Music Production Student',
        },
    ];

    return (
        <div className="h-[40rem] w-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <h3 className='text-5xl font-bold mb-9'>
                    Hear our Harmony: Voices of success
                </h3>
                <div>
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </BackgroundLines>
        </div>
    )
}

export default TestimonialCards