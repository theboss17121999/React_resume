import { useSetRecoilState } from "recoil";
import { Reveal } from "./utils/Reveal";
import { navbarAtom } from "../store/navbar/navbar";
import { useCallback, useEffect, useRef } from "react";
import { Header } from "./utils/Header";
import cognizant from '../assets/educationLogo/Logo_Cognizant.png';

import { Card } from '../components/utils/Card.tsx';
import { useUpdateNavBar } from "../Hooks/useUpdateNavBar.jsx";

export const WorkExp = () => {
    const aboutMeRef = useRef(null);

    const updateNavbar = useUpdateNavBar(5);

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
    const renderHeader = useCallback(() => <Header title="Work Experience">
                                                Here you can find more information about me, including my work experience, the domain I am working in, 
                                                and the skill sets I use in my organization.
                                            </Header>, []);
    const renderWork = useCallback(() => <Work />,[]);
    return (
        <>
            <div className="py-24">
                <div ref={aboutMeRef}>
                    {renderHeader()}
                </div>
                <div className="py-28">
                    {renderWork()}
                </div>
            </div>
        </>
    );
}

function Work() {
    return (
        <>
            <TimeCircle start="Start" end="DEC 2021" />
            <LongBar />
            <div className="flex justify-center items-center">
                <Reveal>
                    <Card title="Cognizant">
                        <ul>
                            <li className="pb-2 font-bold">Associate</li>
                            <li>Cognizant Technology Solutions Corporation is an American multinational information technology services and consulting company.</li>
                        </ul>
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
