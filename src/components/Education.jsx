import React, { useEffect, useRef, useState , useContext } from "react";
import { EducationContext } from '../context/EducationContext';
import { Reveal } from "./utils/Reveal.tsx";


export const Education = () =>{
    
    useEffect(() => {
        import('taos').then((taos) => {
            taos.init();
        });
    }, []);

    return(
        <div>
            <EduCard />
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
                <Reveal color="#FF5733">
                    <div className='flex justify-center'>
                        <img src={img} alt="" className='px-20 md:px-8 w-128'/>
                    </div>
                </Reveal>
                <div className='flex justify-center pt-8'>
                    <Reveal>
                        <p className='font-display5 text-3xl'>{name}</p>
                    </Reveal>
                </div>
                <div className="pt-3 flex justify-center">
                    <div className="bg-black w-28 h-0.5 mt-2 rounded-full"></div>
                </div>
                <div className="pt-3 flex justify-center">
                    <Reveal>
                        <p>{year}</p>
                    </Reveal>
                </div>
                <div className='flex justify-center pt-3 px-8 text-center font-display6'>
                    <Reveal>
                        <p>{details}</p>
                    </Reveal>
                </div>
            </div>
        </>
    )
}