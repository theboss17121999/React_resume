import { useContext } from 'react';
import { AllHandlesContext } from '../context/AllHandlesContext';

import linkedinLogo from '../assets/socaillogo/Linkedin.png'; 
import leetcodeLogo from '../assets/socaillogo/leetcode.png'; 
import githubLogo from '../assets/socaillogo/github.png'; 
import instagramLogo from '../assets/socaillogo/instagram.png'; 
import facebookLogo from '../assets/socaillogo/facebook.png'; 


export const AllHandles = () =>{
    const allHandles = [
        {
            logo: linkedinLogo,
            url: "https://www.linkedin.com/",
            alt: "Linkedin"
        },
        {
            logo: githubLogo,
            url: "https://github.com/",
            alt: "Github"
        },
        {
            logo: instagramLogo,
            url: "https://www.instagram.com/",
            alt: "Instagram"
        },
        {
            logo: facebookLogo,
            url: "https://www.facebook.com/",
            alt: "Facebook"
        },
    ];
    return (
    <>
        <div className='flex flex-row'>
            {allHandles.map((handle, index) => (
                <div key={index}>
                    <AllHandlesContext.Provider value={handle}>
                        <SocialButton />
                    </AllHandlesContext.Provider>
                </div>
            ))}
        </div>
    </>
    );
}

function SocialButton() {
    const url = useContext(AllHandlesContext).url;
    const Logo = useContext(AllHandlesContext).logo;
    const alt = useContext(AllHandlesContext).alt;

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <div className="transition duration-300 ease-in-out transform hover:scale-110 px-2">
            <button className="focus:outline-none" onClick={() => openInNewTab(url)}>
                <img src={Logo} alt={alt} className="w-7 h-7" />
            </button>
        </div>
    );
}