import React, { useEffect, useRef, useState , useContext } from "react";
import { useMediaQuery } from 'react-responsive';
import { EducationContext } from '../context/EducationContext';

export const Education = () =>{
    
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
 
    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };
 
        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);

    useEffect(() => {
        import('taos').then((taos) => {
            taos.init();
        });
    }, []);
 
    const classes = `transition-opacity transform duration-1000
        ${isVisible ? "opacity-100 translate-x-0 duration-1000" : "opacity-0 translate-x-full"
    }`;


    return(
        <div class="delay-[300ms] duration-[600ms] taos:scale-[1.2] taos:opacity-0" data-taos-offset="400">
            <div >
                <EduCard />
            </div>
        </div>
    )
}



function EduCard(){

    const name = useContext(EducationContext).school;
    const img = useContext(EducationContext).bg_pic;
    const year = useContext(EducationContext).year;
    const details = useContext(EducationContext).detail;

    return(
        <>
            <div className=''>
                <div className='flex justify-center'>
                    <img src={img} alt="" className='px-20 md:px-8 w-128'/>
                </div>
                <div className='flex justify-center pt-8'>
                    <p className='font-display5 text-3xl'>{name}</p>
                </div>
                <div className="pt-3 flex justify-center">
                    <div className="bg-black w-28 h-0.5 mt-2 rounded-full"></div>
                </div>
                <div className="pt-3 flex justify-center">
                    <p>{year}</p>
                </div>
                <div className='flex justify-center pt-3 px-8 text-center font-display6'>
                    <p>{details}</p>
                </div>
            </div>
        </>
    )
}