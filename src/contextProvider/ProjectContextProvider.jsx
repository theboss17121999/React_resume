import { ProjectContext } from "../context/ProjextContext";
import project1 from '../assets/project/LapPro1.png';
import project2 from '../assets/project/LapPro3.png';
import project3 from '../assets/project/hello.png';
import { Project } from "../components/Project";
import { Reveal } from "../components/utils/Reveal";
import { useRecoilState, useSetRecoilState } from "recoil";
import { navbarAtom } from "../store/navbar/navbar";
import { useCallback, useEffect, useRef } from "react";
import { Header } from "../components/utils/Header";
import { navbarAtomFamily } from "../store/navbar/navbarFamily";
import { useUpdateNavBar } from "../Hooks/useUpdateNavBar";


export const ProjectDetails = () =>{
    const aboutMeRef = useRef(null);
    const updateNavbar = useUpdateNavBar(4);

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

    const renderHeader = useCallback(() =>  
        <Header title="Project">Here, you'll find detailed information about my projects, including repositories and other essential details for each one.</Header>
        , []
    );
    const renderProjectCard = useCallback(() =>
            <ProjectCard />
            ,[]
    )
    return (
        <div className="bg-gray-100 flex justify-center pt-24 md:pb-16 w-full">
            <div className="w-full sc:w-170">
                <div ref={aboutMeRef}>
                    {renderHeader()}
                </div>
                {renderProjectCard()}
            </div>
        </div>
        
    );
}

function ProjectCard () {
    
    const details = [
        {
            pro_name: "Portfolio",
            image: project3,
            desc: "It includes information about individuals, such as their education, projects, and contact details, as well as the skills they have acquired over the years.",
            url :"https://github.com/theboss17121999/React_resume"
        },
        {
            pro_name: "Super Tic Tac Toe",
            image: project2,
            desc: "This is a game built using the MERN stack, where two players can challenge each other in a game of Super Tic Tac Toe. It demonstrates a wide range of essential MERN skills.",
            url:"https://github.com/theboss17121999/SuperTicTacToe"
        },
        {
            pro_name: "Spending Tracker",
            image: project1,
            desc: "It is used to track spending records and the ability to track spending on any particular items with any given date range. It helps user to control expenditure of the user.",
            url :"https://github.com/theboss17121999/Spending_Tracker"
        }
    ];
    return (
        <>
            <div className="divide-y-4 divide-slate-200">
                {details.map((details, index) => (
                    <div key={index} className="py-2">
                        <ProjectContext.Provider value={details}>
                            <Project  />
                        </ProjectContext.Provider>
                    </div>
                ))} 
            </div>
        </>
    )
}