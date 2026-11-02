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
            <TimeCircle start="Aug 2021" end="Sep 2026" />
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
            {/* <TimeCircle start="" end="Current" /> */}
            <TimeCircle start="OCT 2026" end="Present" />
            <LongBar />
            <div className="flex justify-center items-center">
                <Reveal>
                    <Card title="Infosys">
                        <ul>
                            <li className="pb-2 font-bold">Consultant</li>
                            <li>Infosys is a leading global professional services company, providing a range of services in strategy, consulting, digital, technology, and operations.</li>
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
        <div className="flex justify-center items-center gap-6 overflow-visible">
            <Reveal>
                <div className="w-32 text-right text-sm md:text-lg font-semibold text-gray-600 tracking-wider uppercase">
                    {start}
                </div>
            </Reveal>

            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <div className="w-8 h-8 rounded-full border-4 border-gray-600 bg-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                    {/* Inner Dot */}
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                </div>
            </div>

            <Reveal>
                <div className="w-32 text-left text-sm md:text-lg font-semibold text-gray-600 tracking-wider uppercase">
                    {end}
                </div>
            </Reveal>
        </div>
    );
}

function LongBar() {
    return (
        <div className="flex justify-center">
            <div className="relative">
                <div className="w-1 h-36 bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300 rounded-full shadow-md"></div>
            </div>
        </div>
    );
}
