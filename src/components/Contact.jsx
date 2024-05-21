import React from "react";

export const Contact = () => {
    return (
        <div className="bg-purple-500 ">
            <LetsTalk />
        </div>
    );
}

function LetsTalk() {
    return (
        <div className="w-full p-8 md:p-16 bg-purple-700 rounded-lg shadow-lg">
            <div className="flex flex-col content-center items-center ">
                <div className="text-5xl md:text-7xl lg:text-9xl text-white font-bold pt-4 md:pt-8">
                    Let's Talk
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl text-white pt-4 md:pt-8">
                    Feel Free to Contact
                </div>
                <div className="text-lg md:text-xl lg:text-2xl text-white pt-4 md:pt-16 flex flex-col items-center ">
                    <button 
                        onClick={() => window.location = 'mailto:shashwatbose1712@gmail.com'} 
                        className="underline underline-offset-8 hover:text-black transition duration-500 mt-4"
                    >
                        shashwatbose1712@gmail.com
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
