import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <>
            <div className="h-full md:h-screen bg-purple-500">
                <LetsTalk />
            </div>
        </>
    )
}


function LetsTalk() {
    return (
        <div className="flex justify-center w-full py-20 sc:px-10 h-full">
            <div className="w-full sc:w-170 flex flex-col justify-between h-full">
                <div>
                    <div className="text-7xl md:text-scextralarge sc:text-extralarge text-white pt-4 md:pt-32 flex justify-center sc:justify-start">
                        Let's Talk
                    </div>
                    <div className="text-2xl md:text-5xl text-white pt-8 flex justify-center sc:justify-start">
                        Feel Free to Contact
                    </div>
                </div>
                
                <div className="text-2xl md:text-5xl text-white pt-8 md:pt-32 flex justify-center sc:justify-start mt-auto">
                    <button onClick={() => window.location = 'mailto:shashwatbose1712@gmail.com'} className="underline underline-offset-8 hover:text-black transition duration-500">
                        shashwatbose1712@gmail.com
                    </button>
                </div>
            </div>
        </div>
    );
}
