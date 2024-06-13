import { useSetRecoilState } from "recoil";
import { Reveal } from "./utils/Reveal";
import { navbarAtom } from "../store/navbar/navbar";
import { useEffect, useRef, useState } from "react";
import { Header } from "./utils/Header";
import cognizant from '../assets/educationLogo/Logo_Cognizant.png';


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
                <div className="py-24">
                    <Work />
                </div>
            </div>
        </>
    )
}

function Work() {
    return (
        <>
            <Start />
            <LongBar />
            <div className="md:hidden">
                <Company />
            </div>
        </>
    );
}

function Start() {
    return (
        <div className="flex justify-center items-center gap-5 overflow-visible">
            <Reveal>
                <div className="text-xl font-display6 flex items-center justify-end w-24">
                    Start
                </div>
            </Reveal>
            <div className="flex items-center justify-center w-24 overflow-visible">
                <svg height="42" width="44" xmlns="http://www.w3.org/2000/svg">
                    <circle r="22" cx="22" cy="22" fill="black" />
                </svg>
            </div>
            <Reveal>
                <div className="text-xl font-display6 flex items-center justify-start w-24">
                    May 2021
                </div>
            </Reveal>
        </div>
    );
}


function LongBar(){
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-2 md:w-4 bg-black h-48">

                </div>
            </div>
        </>
    )
}

function Company() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex justify-center">
            <div
                className={`max-w-sm rounded overflow-hidden shadow-lg duration-500 transition ${isHovered ? 'h-auto' : 'h-56'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={cognizant} alt="cognizant" />
                <div className={`px-6 py-4 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                </div>
            </div>
        </div>
    );
}

function Bottomcard(){
    return (
        <>
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </>
    )
}