import C1 from '../assets/Intro/Cloud1.jpg';
import C2 from '../assets/Intro/cloud2.jpg';
import P1 from '../assets/Intro/pond.jpg';
import sv1 from '../assets/background/tiles1.svg'
import sv2 from '../assets/background/low-poly-grid-haikei.svg'
import sv3 from '../assets/background/wavey-fingerprint.svg'
import {HashLink as Link} from "react-router-hash-link"


export const Intro = ({ title }) => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url(${sv2})`, overflow: 'hidden'}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="font-display2 text-4xl text-whitw mb-4">Hi, My name is</div>
                <div className="font-handwriting text-6xl md:text-8xl text-purple-700 mb-8">{title}.</div>
                <div className="font-display2 text-3xl md:text-6xl text-white mb-6 flex justify-content-center">I make web applications</div>
                {/* <div className="font-pixel text-lg text-green leading-relaxed max-w-2xl mx-auto">
                    I am a highly skilled programmer with expertise in the M.E.R.N. Stack. With a passion for solving complex problems and a strong foundation in programming languages, I strive to create efficient and scalable solutions.
                </div> */}
                <div className='pt-10'>
                    <BigButton text={"PROJECTS"}/>
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