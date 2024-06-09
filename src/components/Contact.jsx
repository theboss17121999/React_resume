import React, { useEffect, useRef } from "react";
import { Reveal } from "./utils/Reveal";
import { useSetRecoilState } from "recoil";
import { navbarAtom } from "../store/navbar/navbar";

export const Contact = () => {
    const setNavbar = useSetRecoilState(navbarAtom);
    const aboutMeRef = useRef(null);

    const updateNavbar = () => {
        setNavbar([
            {
                name: 'HOME',
                link: '#Home',
                color: 'text-black',
            },
            {
                name: 'ABOUT ME',
                link: '#AboutMe',
                color: 'text-black',
            },
            {
                name: 'EDUCATION',
                link: '#Education',
                color: 'text-black',
            },
            {
                name: 'PROJECTS',
                link: '#Project',
                color: 'text-black',
            },
            {
                name: 'CONTACT',
                link: '#Contact',
                color: 'text-red-500',
            },
        ]);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    updateNavbar();
                }
            });
        });

        observer.observe(aboutMeRef.current);

        return () => {
            observer.unobserve(aboutMeRef.current);
        };
    }, []);
    return (
        <div ref={aboutMeRef} className="bg-purple-500 ">
            <LetsTalk />
        </div>
    );
}

function LetsTalk() {
    return (
        <div className="w-full p-8 md:p-16 bg-purple-700 rounded-lg shadow-lg">
            <div className="flex flex-col content-center items-center ">
                <Reveal>
                    <div className="text-5xl md:text-7xl lg:text-9xl text-white font-bold pt-4 md:pt-8">
                        Let's Talk
                    </div>
                </Reveal>
                <Reveal>
                    <div className="text-xl md:text-2xl lg:text-3xl text-white pt-4 md:pt-8">
                        Feel Free to Contact
                    </div>
                </Reveal>
                <Reveal>
                    <div className="text-lg md:text-xl lg:text-2xl text-white pt-4 md:pt-16 flex flex-col items-center ">
                        <button 
                            onClick={() => window.location = 'mailto:shashwatbose1712@gmail.com'} 
                            className="underline underline-offset-8 hover:text-black transition duration-500 mt-4"
                        >
                            shashwatbose1712@gmail.com
                        </button>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}

export default Contact;
