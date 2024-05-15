import C1 from '../assets/Intro/Cloud1.jpg';
import C2 from '../assets/Intro/cloud2.jpg';
import P1 from '../assets/Intro/pond.jpg';

export const Intro = ({ title }) => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url(${C1})`, overflow: 'hidden'}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="font-pixel text-4xl text-black mb-4">Hi, My name is</div>
                <div className="font-handwriting text-6xl md:text-8xl text-purple-300 mb-8">{title}.</div>
                <div className="font-pixel text-4xl md:text-6xl text-black mb-6">I make web applications</div>
                {/* <div className="font-pixel text-lg text-green leading-relaxed max-w-2xl mx-auto">
                    I am a highly skilled programmer with expertise in the M.E.R.N. Stack. With a passion for solving complex problems and a strong foundation in programming languages, I strive to create efficient and scalable solutions.
                </div> */}
                {/* <div className='pt-10'>
                    <BigButton text={"PROJECTS"}/>
                </div> */}
            </div>
        </div>
    );
};

function BigButton({text }){
    return (
        <a href="#Project" className="text-white hover:bg-white hover:text-black rounded-lg p-2">{text}</a>
    );
  };