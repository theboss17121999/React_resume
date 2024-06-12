import { ProjectContext } from "../context/ProjextContext";
import project1 from '../assets/project/LapPro1.png';
import project2 from '../assets/project/LapPro2.png';
import project3 from '../assets/project/hello.png';
import { Project } from "../components/Project";
import { Reveal } from "../components/utils/Reveal";
import { useSetRecoilState } from "recoil";
import { navbarAtom } from "../store/navbar/navbar";
import { useEffect, useRef } from "react";
import { Header } from "../components/utils/Header";


export const ProjectDetails = () =>{
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
                color:'text-green-500',
            },
            {
                name: 'WORK EXPERIENCE',
                link: '#Work',
                color: 'text-black',
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

    const details = [
        {
            pro_name: "Portfolio",
            image: project3,
            desc: "It includes information about individuals, such as their education, projects, and contact details, as well as the skills they have acquired over the years.",
            url :"https://github.com/theboss17121999/React_resume"
        },
        {
            pro_name: "Spending Tracker",
            image: project1,
            desc: "It is used to track spending records and the ability to track spending on any particular items with any given date range. It helps user to control expenditure of the user.",
            url :"https://github.com/theboss17121999/Spending_Tracker"
        },
        // {
        //     pro_name: "Spending Tracker",
        //     image: project1,
        //     desc: "it is used to track spending record along with ability track spending on any particular items with any given date range.",
        //     url:""
        // }
        ];
    return (
        <div className="bg-gray-100 flex justify-center pt-24 md:pb-16 w-full">
            <div className="w-full sc:w-170">
                <div ref={aboutMeRef}>
                    <Header title="Project">Here you will find more information about my educational background, including where I studied and the grades I achieved.</Header>
                </div>
                <div className="divide-y-4 divide-slate-200">
                    {details.map((details, index) => (
                        <div key={index} className="py-2">
                            <ProjectContext.Provider value={details}>
                                <Project  />
                            </ProjectContext.Provider>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
        
    );
}
