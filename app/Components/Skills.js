"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Skills = ({ skills }) => {
    const containerRef = useRef();
    const boxRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "top 30%", 
                scrub: true,                
            }
        });

        tl.fromTo(boxRefs.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "bounce.out", stagger: 0.2 }
        );
    }, []);

    return (<>
        <div className="flex items-center justify-center max-w-[70em] flex-wrap gap-[3em]" ref={containerRef}>
            {
                skills.map((e, index) => {
                    return (
                        <div className="flex flex-col text-center gap-[2em]" key={index} ref={(el) => (boxRefs.current[index] = el)}>
                            <Image src={e.img} width={110} height={100} />
                            <p>{e.type}</p>
                        </div>
                    )
                })
            }
        </div>
    </>);
}

export default Skills;