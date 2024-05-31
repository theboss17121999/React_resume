import { useContext } from 'react';
import T1 from '../assets/background/tiles1.svg';
import project1 from '../assets/project/LapPro1.png';
import { ProjectContext } from '../context/ProjextContext';


export const Project = () => {

    
    return (
        <div className="">
            <div class="duration-[300ms] taos:[transform:perspective(2500px)_rotateX(100deg)] taos:invisible taos:[backface-visibility:hidden]" data-taos-offset="-5">
                <Projects />
            </div>
        </div>
    );
};

function Projects(){


    return (
        <div className="pt-8 md:pt-32 px-4 sc:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <ProjectImage />
                </div>
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
            <div>
                <div className='flex justify-center md:justify-start'>
                    <p className='font-display6 font-semibold text-purple-700 text-2xl md:text-3xljustify-items-center'>{name}</p>
                </div>
                <p className='md:text-xl pt-4'>{desc}</p>
                <div className="pt-8 flex justify-center md:justify-start">
                    <a href={link} className='bg-purple-800 text-white font-bold py-2 md:py-4 px-4 rounded-lg text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Repository</a>
                </div>
            </div>
        </>
    )
}