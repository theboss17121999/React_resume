import sv1 from '../assets/background/wavey-fingerprint.svg';
import { HashLink as Link } from "react-router-hash-link";
import { TypeAnimation } from 'react-type-animation';
import { Reveal } from "./utils/Reveal.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Intro = ({ title }) => {
    return (
        <div className="relative h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${sv1})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <Reveal>
                    <div className="font-display2 text-4xl text-white mb-4">Hi, My name is</div>
                </Reveal>
                <Reveal>
                    <div className="font-handwriting text-6xl md:text-8xl text-yellow-500 mb-8">{title}.</div>
                </Reveal>
                <div className="font-handwriting text-4xl md:text-6xl lg:text-8xl text-white mb-6 inline-block">
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
                <div className='pt-10'>
                    <Reveal>
                        <div className='p-5'>
                            <BigButton text={"PROJECTS"} />
                        </div>
                    </Reveal>
                </div>
                <SocailSideBar />
            </div>
        </div>
    );
};

function BigButton({ text }) {
    return (
        <Link to="#Project" className="text-white font-bold py-3 md:py-4 px-8 md:px-16 rounded-lg text-lg md:text-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 border-double border-green-500 hover:border hover:border-black rounded-t-xl border-4" smooth>
            {text}
        </Link>
    );
}

function SocailSideBar() {
    return (
        <>
            <div className="absolute left-0 transform -translate-y2-1/2 translate-y-1/ hidden md:block" >
                <div className='grid grid-cols-1 text-xl md:space-y-3 md:py-2 lg:space-y-6 lg:py-4 px-2 border border-indigo-600 rounded-r-2xl bg-white'>
                    <Reveal color='#2B02D9'>
                        <a href="https://www.linkedin.com/in/shabose/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400 transition duration-300">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl md:text-3xl lg:text-4xl"/>
                        </a>
                    </Reveal>
                    <Reveal color='#878887'>
                        <a href="https://github.com/theboss17121999" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition duration-300 ">
                            <FontAwesomeIcon icon={faGithub}  className="text-xl md:text-3xl lg:text-4xl"/>
                        </a>
                    </Reveal>
                    <Reveal color='yellow'>
                        <a href="https://leetcode.com/u/shashwat1712/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-600 transition duration-300 ">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 md:w-8 lg:w-10 h-8 md:h-8 lg:h-10 fill-current">
                                <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path>
                                <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
                            </svg>
                        </a>
                    </Reveal>
                    <Reveal color='#4144BE'>
                        <a href="https://www.facebook.com/profile.php?id=100009064223193" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition duration-300">
                            <FontAwesomeIcon icon={faFacebook} className="text-xl md:text-3xl lg:text-4xl" />
                        </a>
                    </Reveal>
                    <Reveal color='#E73CCD'>
                        <a href="https://www.instagram.com/shashwat_1712/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-400 transition duration-300">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl md:text-3xl lg:text-4xl" />
                        </a>
                    </Reveal>
                </div>
            </div>
        </>
    )
}
