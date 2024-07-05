import { useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { SkillContext } from '../context/SkillContext.js';
import { useContext } from 'react';
import { Reveal } from './utils/Reveal.tsx';
import { Button } from '@material-tailwind/react';
import { Reveal1 } from './utils/Reveal1.tsx';
import { useSetRecoilState } from 'recoil';
import { navbarAtom } from '../store/navbar/navbar.jsx';
import { Header } from './utils/Header.tsx';
import { useUpdateNavBar } from '../Hooks/useUpdateNavBar.jsx';
import { 
    SiMongodb, 
    SiExpress,
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiMysql,
    SiGnometerminal,
    SiPostman
} from "react-icons/si";

import { 
    FaNodeJs,
    FaJava,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub
 } from "react-icons/fa";

import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";

  const LOGOS1 = [
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <SiMongodb className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">Mongo DB</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <SiExpress className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">Express</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <SiReact className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">React</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <FaNodeJs className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">Node.js</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <SiTailwindcss className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">Tailwind CSS</p>
    </div>
];

const LOGOS2 = [
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <FaJava className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">Java</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <SiJavascript className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">JavaScript</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <SiTypescript className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">TypeScript</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <FaPython className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">Python</p>
    </div>
];

const LOGOS3 = [
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <FaHtml5 className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">HTML5</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <FaCss3Alt className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">CSS3</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <SiMysql className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">MySQL</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <SiGnometerminal className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">Terminal</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <FaGitAlt className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">Git</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <FaGithub className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">GitHub</p>
    </div>,
    <div className='slide flex flex-col items-center justify-center w-[125px] mx-4'>
        <SiPostman className="text-slate-800 w-16 h-16" />
        <p className="text-center mt-2">Postman</p>
    </div>
];


export const AboutMe = () => {
    const aboutMeRef = useRef(null);

    const updateNavbar = useUpdateNavBar(2);

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
            <div className="flex justify-center py-24 w-full">
                <div className="w-full sc:w-170">
                    <div ref={aboutMeRef}>
                        <Header title='About Me'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</Header>
                    </div>
                    <AboutMeDetails />
                </div>
            </div>
        </>
    );
};

function AboutMeDetails() {
    return (
        <div className="pt-32 px-4 sc:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                <div>
                    <GetToKnowMe />
                </div>
                <div>
                    <Skills />
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
                            <Button className='text-white w-52 h-14 bg-purple-500 md:hover:bg-blue-600 font-bold text-lg duration-300 delay-100' variant="filled">
                                    <Link to="#Contact"  smooth>
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
    return (
        <div className="px-4 md:px-0 overflow-hidden">
            <div>
                <p className="text-lg md:text-2xl font-display2">My SKILLS</p>
                <div className="mt-4 pt-4 ">
                    <InfiniteSlider1 />
                    <br />
                    <InfiniteSlider2 />
                    <br />
                    <InfiniteSlider3 />
                </div>
            </div>
        </div>
    );
}

const StringInBox = ({ num, text }) => {
    let y_axis, x_axis ;

    switch (num % 5) {
        case 0:
            y_axis = 75;
            x_axis = 75;
            break;
        case 1:
            y_axis = -75;
            x_axis = -75;
            break;
        case 2:
            y_axis = 100;
            x_axis = -100;
            break;
        case 3:
            y_axis = -100;
            x_axis = 100;
            break;
        case 4:
            y_axis = 0;
            x_axis = 100;
            break;
    }

    return (
        <div className="inline-block ">
           <Reveal1 y_axis={y_axis} x_axis={x_axis}>
                <div className="inline-block bg-gray-200 text-gray-600 rounded-lg py-3 px-4 mr-4 mb-4 text-sm md:text-base font-semibold lg:hover:bg-purple-500 lg:hover:text-white lg:duration-300">
                    {text.trim()}
                </div>
            </Reveal1>
        </div>
    );
};


function InfiniteSlider1() {
    return (
        <div className="relative w-[500px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#fafaf9_0%,rgba(250,250,249,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#fafaf9_0%,rgba(250,250,249,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(125px*{LOGOS1.length * 4})]">
          {[...Array(4)].map((_, i) => (
            LOGOS1.map((logo, index) => (
              <div key={`${i}-${index}`}>
                {logo}
              </div>
            ))
          ))}
        </div>
      </div>
    );
  }

  function InfiniteSlider2() {
    return (
        <div className="relative w-[500px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#fafaf9_0%,rgba(250,250,249,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#fafaf9_0%,rgba(250,250,249,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider1 flex w-[calc(125px*{LOGOS2.length * 4})]">
          {[...Array(5)].map((_, i) => (
            LOGOS2.map((logo, index) => (
              <div key={`${i}-${index}`}>
                {logo}
              </div>
            ))
          ))}
        </div>
      </div>
    );
  }

  function InfiniteSlider3() {
    return (
        <div className="relative w-[500px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#fafaf9_0%,rgba(250,250,249,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#fafaf9_0%,rgba(250,250,249,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(125px*{LOGOS3.length * 4})]">
          {[...Array(4)].map((_, i) => (
            LOGOS3.map((logo, index) => (
              <div key={`${i}-${index}`}>
                {logo}
              </div>
            ))
          ))}
        </div>
      </div>
    );
  }
  
  