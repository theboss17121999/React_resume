import {AllHandles} from '../contextProvider/AllHandlesProvider.jsx'
import { Reveal } from "./utils/Reveal.tsx";


export const LowerBar = () => {
    return (
        <div className='bg-black '>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center md:justify-normal pt-2 pb-3 md:pt-7'>
                    <SmallIntro />
                </div>
                <div className='flex justify-center items-center px-10 md:px-1'>
                    <Reveal>
                        <Social/>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

function Social() {

    return (
        <div className="text-white pt-8 md:pt-0">
            <div className='flex justify-center md:justify-normal'>
                <div className="text-purple-800 font-display2 text-4xl mb-4">SOCIAL</div>
            </div>
            <div className=''>
                <AllHandles />
            </div>
        </div>
    );
}



function SmallIntro() {
    return (
        <div className='text-white text-lg px-20 md:px-5'>
            <Reveal color="#BA45B8">
                <p>I am a highly skilled programmer with expertise in <strong>M.E.R.N.</strong> Stack. 
                With a passion for solving complex problems and a strong foundation in programming languages, 
                I strive to create efficient and scalable solutions.</p>
            </Reveal>
            <br />
            <Reveal color="#BA45B8">
                <p className='justify-center md:justify-start'>Feel free to contact.</p>
            </Reveal>
        </div>
    );
}
