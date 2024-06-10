import { useSetRecoilState } from "recoil";
import { Reveal } from "./utils/Reveal";
import { navbarAtom } from "../store/navbar/navbar";
import { useEffect, useRef } from "react";

export const WorkExp = () => {
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
                name: 'WORK EXPERIENCE',
                link: '#Work',
                color: 'text-green-500',
            },
            {
                name: 'CONTACT',
                link: '#Contact',
                color: 'text-black',
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

    return(
        <>
            <div className="py-24">
                <div ref={aboutMeRef}>
                    <Header />
                </div>
                <div className="py-96">

                </div>
            </div>
        </>
    )
}

function Header() {
    return (
        <div className="flex flex-col justify-center items-center px-4 md:px-0">
            <div>
                <div className="flex flex-col justify-center items-center">
                    <Reveal>
                        <p className="text-3xl md:text-5xl font-display2 text-slate-700">Work Experience</p>
                    </Reveal>
                    <div className="pt-3">
                        <div className="bg-gree w-8 h-1 mt-2 rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-12 w-full sc:w-160 sc:px-4">
                    <Reveal>
                        <p className="text-lg md:text-xl text-center text-slate-600 font-medium">Here you can find more information about me, including my work experience, the domain I am working in, and the skill sets I use in my organization.</p>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}