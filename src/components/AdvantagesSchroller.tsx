'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import img from '@/assets/supports.webp';

const testimonials = [
    {
        id: 1,
        text: "The service provided was outstanding! They really listened to our needs and delivered exactly what we were looking for. Their attention to detail and commitment to quality were evident throughout the process. I've worked with other companies before.",
        name: "John Doe",
        designation: "Dog Trainer",
    },
    {
        id: 2,
        text: "Amazing experience, highly recommended! The team went out of their way to ensure every single requirement was met and that I was kept in the loop during each stage of development. Their communication was prompt, clear, and transparent, which really made me feel confident in the outcome.",
        name: "Jane Smith",
        designation: "Marketing Specialist",
    },
    {
        id: 3,
        text: "Exceptional quality and attention to detail. I've been in the industry for years, and this team truly understands what it takes to deliver top-notch results. They have a unique creative touch, and their ability to bring ideas to life is second to none.",
        name: "Michael Brown",
        designation: "Graphic Designer",
    },
    {
        id: 4,
        text: "The support team was incredibly helpful! I had some specific requirements that I thought would be challenging, but they handled them with ease and professionalism. They took the time to explain everything to me and made sure I was comfortable with each decision.",
        name: "Emily Davis",
        designation: "Software Engineer",
    },
    {
        id: 5,
        text: "A wonderful experience from start to finish. The team was efficient, responsive, and very understanding of my unique needs. They even offered suggestions to improve the original concept, which really brought the project to life. I felt valued as a client.",
        name: "Chris Wilson",
        designation: "Business Consultant",
    },
    {
        id: 6,
        text: "They went above and beyond to meet our needs. We had some last-minute changes, and they accommodated us without hesitation. Their expertise is evident in every step of the process, and I appreciated their flexibility and willingness to adjust to our evolving vision.",
        name: "Sarah Thompson",
        designation: "Project Manager",
    },
    {
        id: 7,
        text: "Very professional and reliable. I was initially nervous about the scope of my project, but they reassured me and delivered exceptional work. They took the time to understand my goals and provided insightful recommendations that enhanced the outcome.",
        name: "David Johnson",
        designation: "Financial Advisor",
    },
    {
        id: 8,
        text: "Exceeded my expectations. Will definitely come back! They not only delivered what they promised but also added unique touches that made the project stand out. Their knowledge and skills are unmatched, and their dedication is truly impressive.",
        name: "Laura Martinez",
        designation: "Event Planner",
    },
    {
        id: 9,
        text: "Fantastic service, would definitely recommend. The team was punctual, organized, and very professional. Every question I had was answered thoroughly, and they made sure I was informed at each step. It's clear they value customer satisfaction above all.",
        name: "James Carter",
        designation: "HR Specialist",
    },
    {
        id: 10,
        text: "Their expertise made a huge difference for us. We were struggling to figure out the best way to achieve our goals, but they brought fresh ideas and a new perspective. They patiently guided us through each phase and ensured we were comfortable with the direction.",
        name: "Olivia White",
        designation: "Content Writer",
    },
];


const TestimonialScroller: React.FC = () => {
    const scroller1Ref = useRef<HTMLDivElement>(null);
    const scroller2Ref = useRef<HTMLDivElement>(null);
    const [previousScrollY, setPreviousScrollY] = useState(0);

    const handleScroll = () => {
        if (scroller1Ref.current && scroller2Ref.current) {
            const currentScrollY = window.scrollY;
            const scrollAmount = Math.abs(currentScrollY - previousScrollY) * 0.5; // Adjust multiplier for scroll speed

            if (currentScrollY > previousScrollY) {
                // User is scrolling down
                scroller1Ref.current.scrollLeft += scrollAmount; // Scroll first scroller to the right
                scroller2Ref.current.scrollLeft -= scrollAmount; // Scroll second scroller to the left
            } else {
                // User is scrolling up
                scroller1Ref.current.scrollLeft -= scrollAmount; // Scroll first scroller to the left
                scroller2Ref.current.scrollLeft += scrollAmount; // Scroll second scroller to the right
            }

            setPreviousScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [previousScrollY]);

    return (
        <section className=' bg-gray-100 py-20 text-center'>
            <h3 className='text-3xl md:text-4xl font-medium mb-4'>Find out more about our advantages</h3>
            <p className='text-uicore-body text-sm mb-20'>With many excellent features we are able to help you in dealing with your financial problems</p>
            <div className="flex flex-col h-auto items-center gap-12">
                {/* First Scroller */}
                <div className="w-full overflow-auto h-auto text-left">
                    <div
                        ref={scroller1Ref}
                        className="flex gap-4 w-full h-auto overflow-x-auto scrollbar-hide"
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id}
                                className="flex-shrink-0 w-64 h-auto bg-gray-100 p-4 rounded-lg border shadow-md m-4" >
                                <Image src={img} alt='pic' height={30} width={30} className='rounded-full' />
                                <p className="text-sm font-semibold mt-2">{testimonial.name}</p>
                                <p className="text-[11px] text-uicore-body mb-4">{testimonial.designation}</p>
                                <p className="text-sm">{testimonial.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Scroller */}
                <div className="w-full overflow-auto text-left">
                    <div
                        ref={scroller2Ref}
                        className="flex gap-4 overflow-x-auto scrollbar-hide"
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id}
                                className="flex-shrink-0 w-64 h-auto bg-gray-100 p-4 rounded-lg border shadow-md m-4" >
                                <Image src={img} alt='pic' height={30} width={30} className='rounded-full' />
                                <p className="text-sm font-semibold mt-2">{testimonial.name}</p>
                                <p className="text-[11px] text-uicore-body mb-4">{testimonial.designation}</p>
                                <p className="text-sm">{testimonial.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialScroller;
