"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';

const EducationTimeline = ({ educationList, title }) => {

  const timeRef = useRef()
  const dataRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: dataRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      }
    });

    tl.fromTo(timeRef.current, {y:-200, opacity:0, ease:"power1.out"}, {y:0, duration:10, opacity:1} )
    tl.fromTo(dataRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 15, ease: "power1.out" }
  );

  }, []);


  return (
    <div className="container mx-auto py-8" >
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 border-gray-200 absolute h-full border" style={{ left: '50%', pointerEvents:"none" }} ref={timeRef}></div>
        {educationList.map((edu, index) => (
          <div key={index}  className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}>
            <p className=" text-orange-400 font-bold text-[4em] ">{title}</p>
            <div className="order-1 w-5/12"></div>
            <div className={`order-1 w-5/12 px-1 py-4 text-${index % 2 === 0 ? 'right' : 'left'}`} ref={(el) => (dataRef.current[index] = el)}>
              <p className="mb-3 text-base text-blue-500">{edu.year}</p>
              <h4 className="mb-1 font-bold text-lg md:text-2xl">{edu.title}</h4>
              <p className="mb-1 text-sm md:text-base leading-snug text-gray-400">{edu.type}</p>
              <p className="mb-1 text-sm md:text-base leading-snug text-gray-400">{edu.location}</p>
              <p className="text-sm md:text-base leading-snug text-gray-400 font-bold">{edu.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
