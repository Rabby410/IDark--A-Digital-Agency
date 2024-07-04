'use client'
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'odometer/themes/odometer-theme-default.css';

const Odometer = dynamic(() => import('react-odometerjs'), {
  ssr: false,
});

const OurFunFacts = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        }, {threshold: 0.1});

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const counters = [
        // { value: 10, suffix: '+', description: 'Years of Experience' },
        { value: 195, extra: '', suffix: '+', suffixmb: 'million', description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.', specialStyle: 'text-primary' },
        { value: 435, extra: '', suffix: '+', suffixmb: 'million', description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.', specialStyle: 'text-primary' },
        { value: 965, extra: '', suffix: '+', suffixmb: 'million', description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.', specialStyle: 'text-primary' },
    ];

    return (
        <div ref={sectionRef} className="py-20 bg-[#fff]">
            <div className="mx-auto container px-4">
                <h2 className="sub-title text-center mb-10">Our Fun Facts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center text-white">
                    {counters.map((counter, index) => (
                        <div key={index} className={`odometer-container ${counter.specialStyle ? 'text-red-500' : ''}`}>
                            <div className='text-primary md:hidden pt-5 text-4xl font-bold'>{counter?.extra}</div>
                            <div className="inline-flex items-baseline justify-center">
                                <Odometer value={isVisible ? counter.value : 0} format="(,ddd)" duration={2500} className="odometer text-[64px] font-[700]" />
                                <span className={`plus-symbol text-[64px] font-[700] ${counter.specialStyle || ''}`}>{counter.suffix}</span>
                            </div>
                            <p className="para mt-2">{counter.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurFunFacts;

