import sv2 from '../assets/background/low-poly-grid-haikei.svg'
import sv1 from '../assets/background/wavey-fingerprint.svg'
import {HashLink as Link} from "react-router-hash-link"
import { TypeAnimation } from 'react-type-animation';
import { Reveal } from "./utils/Reveal.tsx";

export const Intro = ({ title }) => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url(${sv1})`, overflow: 'hidden'}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <Reveal>
                    <div className="font-display2 text-4xl text-whitw mb-4">Hi, My name is</div>
                </Reveal>
                <Reveal>
                    <div className="font-handwriting text-6xl md:text-8xl text-purple-700 mb-8">{title}.</div>
                </Reveal>
                <div className="font-handwriting text-4xl md:text-8xl text-white mb-6 inline-block">
                    <TypeAnimation
                        sequence={[
                            500,
                            'I am a Developer.',
                            2000,
                            'I make Web Applications.',
                            2000,
                            'I make Java Applications.',
                            2000,
                            'I have expertise in Data Structures and Algorithms.',
                            2000,
                            'I specialize in Tailwind CSS and Responsive Design.',
                            2000,
                            'I solve Complex Problems.',
                            2000,
                            'I am passionate about Clean Code.',
                            2000,
                            'I am always Learning new Skills.',
                            2000,
                            'I enjoy Learning new Technologies.',
                            2000,
                            'I stay updated with Industry Trends.',
                            2000,
                            'I strive to create efficient and scalable solutions.',
                            2000
                        ]}
                        wrapper="span"
                        speed={70}
                        repeat={Infinity}
                    />
                </div>

                {/* <div className="font-pixel text-lg text-green leading-relaxed max-w-2xl mx-auto">
                    I am a highly skilled programmer with expertise in the M.E.R.N. Stack. With a passion for solving complex problems and a strong foundation in programming languages, I strive to create efficient and scalable solutions.
                </div> */}
                <div className='pt-10'>
                    <Reveal >
                        <div className='p-5'>
                            <BigButton text={"PROJECTS"}/>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

function BigButton({text }){
    return (
        <Link to="#Project" className="bg-purple-500 text-white font-bold py-3 md:py-4 px-8 md:px-16 rounded-lg text-lg md:text-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" smooth>
            PROJECT
        </Link>
    );
  };