import { useCallback, useContext } from 'react';
import T1 from '../assets/background/tiles1.svg';
import project1 from '../assets/project/LapPro1.png';
import { ProjectContext } from '../context/ProjextContext';
import { Reveal } from './utils/Reveal';
import { Button } from "@material-tailwind/react";

export const Project = () => {

    const renderProject = useCallback (() =>
        <Projects />
    ,[]
)
    
    return (
        <div className="">
            <div className="">
                {renderProject()}
            </div>
        </div>
    );
};

function Projects(){


    return (
        <div className="pt-8 md:pt-24 px-4 sc:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <Reveal duration={0.25}>
                    <div>
                        <ProjectImage />
                    </div>
                </Reveal>
                <div className='content-center'>
                    <ProjectDetails />
                </div>
            </div>
        </div>
    );
}

function ProjectImage(){
    
    const img = useContext(ProjectContext).image;

    return (
        <>
            <img src={img} alt="" />
        </>
    )
}

function ProjectDetails(){
    const name = useContext(ProjectContext).pro_name;
    const link = useContext(ProjectContext).url;
    const desc = useContext(ProjectContext).desc;
    return (
        <>
            <div className='pb-8 '>
                <div className='flex justify-center md:justify-start'>
                    <Reveal>
                        <p className='font-display6 font-semibold text-purple-700 text-2xl md:text-3xljustify-items-center'>{name}</p>
                    </Reveal>
                </div>
                <Reveal color='#ffcc66'>
                    <p className='md:text-lg pt-4 px-4 md:px-0 inline-block flex items-center justify-center text-center md:text-left'>{desc}</p>
                </Reveal>
                <div className="pt-8 flex justify-center md:justify-start">
                    <Reveal color='#cccc00'>
                        {/* <div className='py-3'>
                            <a href={link} className='bg-purple-800 text-white font-bold py-2 md:py-4 px-4 rounded-lg text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Repository</a>
                        </div> */}
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <div className="flex gap-4">
                                <Button className='text-white w-32 h-14 bg-purple-800 md:hover:bg-blue-600 font-bold text-lg duration-300 delay-100' variant="filled">Repository</Button>
                            </div>
                        </a>
                    </Reveal>
                </div>
            </div>
        </>
    )
}