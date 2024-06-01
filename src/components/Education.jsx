import React, { useEffect, useRef, useState , useContext } from "react";
import { EducationContext } from '../context/EducationContext';

export const Education = () =>{
    
    
    useEffect(() => {
        import('taos').then((taos) => {
            taos.init();
        });
    }, []);

    return(
        <div className="delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0 " data-taos-offset="200">
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