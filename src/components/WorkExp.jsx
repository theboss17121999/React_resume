import { useSetRecoilState } from "recoil";
import { Reveal } from "./utils/Reveal";
import { navbarAtom } from "../store/navbar/navbar";
import { useEffect, useRef } from "react";
import { Header } from "./utils/Header";
import cognizant from '../assets/educationLogo/Logo_Cognizant.png';
import { Card } from '../components/utils/Card.tsx';

export const WorkExp = () => {
    const setNavbar = useSetRecoilState(navbarAtom);
    const aboutMeRef = useRef(null);

    const updateNavbar = () => {
        setNavbar([
            { name: 'HOME', link: '#Home', color: 'text-black' },
            { name: 'ABOUT ME', link: '#AboutMe', color: 'text-black' },
            { name: 'EDUCATION', link: '#Education', color: 'text-black' },
            { name: 'PROJECTS', link: '#Project', color: 'text-black' },
            { name: 'WORK EXPERIENCE', link: '#Work', color: 'text-green-500' },
            { name: 'CONTACT', link: '#Contact', color: 'text-black' },
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
        <>
            <div className="py-24">
                <div ref={aboutMeRef}>
                    <Header title="Work Experience">
                        Here you can find more information about me, including my work experience, the domain I am working in, and the skill sets I use in my organization.
                    </Header>
                </div>
                <div className="py-28">
                    <Work />
                </div>
            </div>
        </>
    );
}

function Work() {
    return (
        <>
            <TimeCircle start="Start" end="MAY 2021" />
            <LongBar />
            <div className="flex justify-center items-center">
                <Reveal>
                    <Card title="Cognizant">
                        <p>
                            <ul>
                                <li className="pb-2 font-bold">Programmer Analyst</li>
                                <li>Cognizant Technology Solutions Corporation is an American multinational information technology services and consulting company.</li>
                            </ul>
                        </p>
                    </Card>
                </Reveal>
            </div>
            <LongBar />
            <TimeCircle start="" end="Current" />
        </>
    );
}

function TimeCircle({ start, end }) {
    return (
        <div className="flex justify-center items-center gap-5 overflow-visible">
            <Reveal>
                <div className="text-xl font-display6 flex items-center justify-end w-24">
                    {start}
                </div>
            </Reveal>
            <div className="flex items-center justify-center w-24 overflow-visible">
                <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <circle r="15" cx="15" cy="15" fill="black" />
                </svg>
            </div>
            <Reveal>
                <div className="text-xl font-display6 flex items-center justify-start w-24">
                    {end}
                </div>
            </Reveal>
        </div>
    );
}

function LongBar() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-2 md:w-2 bg-black h-36">
                </div>
            </div>
        </>
    );
}
