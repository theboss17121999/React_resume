import {HashLink as Link} from "react-router-hash-link"
import {SkillContext} from '../context/SkillContext.js'
import { useContext } from "react";
import { Reveal } from "./utils/Reveal.tsx";
import { Button } from "@material-tailwind/react";


export const AboutMe = () => {
    return (
        <div className="flex justify-center py-24 w-full">
            <div className="w-full sc:w-170">
                <Header />
                <AboutMeDetails />
            </div>
        </div>
    );
};

function Header() {
    return (
        <div className="flex flex-col justify-center items-center px-4 md:px-0">
            <div>
                <div className="flex flex-col justify-center items-center">
                    <Reveal>
                        <p className="text-3xl md:text-5xl font-display2 text-slate-700">ABOUT ME</p>
                    </Reveal>
                    <div className="pt-3">
                        <div className="bg-gree w-8 h-1 mt-2 rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-12 w-full sc:w-160 sc:px-4">
                    <Reveal>
                        <p className="text-lg md:text-xl text-center text-slate-600 font-medium">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

function AboutMeDetails() {
    return (
        <div className="pt-32 px-4 sc:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                <div>
                    <GetToKnowMe />
                </div>
                <div>
                    <SkillContext.Provider value={["Mongo DB", "Express", "React", "NodeJs", "Tailwind", "Java", "Python", "HTML", "CSS", "SQL", "Terminal", "Responsive Design", "GIT", "GitHub", "PostMan", "Problem Solving","Data Structure and Algorithm"]}>
                        <Skills />
                    </SkillContext.Provider>
                </div>
            </div>
        </div>
    );
}

function GetToKnowMe() {
    return (
        <div className="px-4 md:px-0">
            <div>
                <p className="text-lg md:text-2xl font-display2">GET TO KNOW ME!</p>
                <div className="pt-4">
                    <Reveal color='#110610'>
                        <p className="text-base md:text-lg">I’m a <strong className="text-gray-700">Developer</strong> building and managing different projects and applications that leads to the success of overall product. Check out some of my <strong className="text-gray-700">projects</strong> in the project section.</p>
                    </Reveal>
                    <br />
                    <Reveal color='#110610'>
                    <p className="text-base md:text-lg">I also share some of my personal or <strong className="text-gray-700">professional</strong> achievements over the year. Feel free to connect or Follow me on my <a href="https://www.linkedin.com/in/shabose/" className="text-blue-500 underline hover:text-blue-900"><strong>Linkedin</strong></a> and <a href="https://www.instagram.com/shashwat_1712/" className="text-pink-500 underline hover:text-pink-900"><strong>Instagram</strong></a> where I post my achievements on development and programming.</p>
                    </Reveal >
                    <br />
                    <Reveal color='#110610'>
                    <p className="text-base md:text-lg">I'm <strong className="text-gray-700">open to Job opportunities</strong> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    </Reveal>
                </div>
                    <div className="pt-16 flex justify-center md:justify-start">
                        <Reveal>
                            <div className="py-6">
                                <Button className='text-white w-full h-14 bg-purple-800 md:hover:bg-blue-600 font-bold text-lg duration-300 delay-100' variant="filled">
                                    <Link to="#Contact" className="bg-purple-500 text-white font-bold py-4 px-16 rounded-lg text-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" smooth>
                                        Contact
                                    </Link>
                                </Button>
                            </div>
                        </Reveal>
                    </div>
            </div>
        </div>
    );
}

function Skills() {
    const tech= useContext(SkillContext);
    return (
        <div className="px-4 md:px-0">
            <div>
                <p className="text-lg md:text-2xl font-display2">My SKILLS</p>
                <div className="mt-4 pt-4 ">
                {tech.map((t, index) => (
                    <StringInBox key={index} text={t} />
                ))}
                </div>
            </div>
        </div>
    );
}

const StringInBox = ({ text }) => {
    return (
        <div className="inline-block ">
            <Reveal duration={0.25}>
                <div className="inline-block bg-gray-200 text-gray-600 rounded-lg py-3 px-4 mr-4 mb-4 text-sm md:text-base font-semibold lg:hover:bg-purple-500 lg:hover:text-white lg:duration-300">
                    {text.trim()}
                </div>
            </Reveal>
        </div>
    );
};