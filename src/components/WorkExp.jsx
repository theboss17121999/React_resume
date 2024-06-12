import { useSetRecoilState } from "recoil";
import { Reveal } from "./utils/Reveal";
import { navbarAtom } from "../store/navbar/navbar";
import { useEffect, useRef } from "react";
import { Header } from "./utils/Header";

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
                    <Header title="Work Experience">Here you can find more information about me, including my work experience, the domain I am working in, and the skill sets I use in my organization.</Header>
                </div>
                <div className="py-96">

                </div>
            </div>
        </>
    )
}
