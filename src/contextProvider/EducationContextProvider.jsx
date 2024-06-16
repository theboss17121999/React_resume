import KV from '../assets/educationLogo/kv.png';
import DPS from '../assets/educationLogo/DPS.png';
import CU from '../assets/educationLogo/Cu.png';
import { Education } from '../components/Education';
import { EducationContext } from '../context/EducationContext';
import { Reveal } from '../components/utils/Reveal';
import { useSetRecoilState } from 'recoil';
import { navbarAtom } from '../store/navbar/navbar';
import { useEffect, useRef } from 'react';
import { Header } from '../components/utils/Header';

export const EducationDetails = () =>{
    const setNavbar = useSetRecoilState(navbarAtom);
    const aboutMeRef = useRef(null);

    const updateNavbar = () => {
        setNavbar([
            {
                name: 'HOME',
                link: '#Home',
                color: 'text-black',
            },
            {
                name: 'ABOUT ME',
                link: '#AboutMe',
                color: 'text-black',
            },
            {
                name: 'EDUCATION',
                link: '#Education',
                color: 'text-green-500',
            },
            {
                name: 'PROJECTS',
                link: '#Project',
                color: 'text-black',
            },
            { name: 'WORK EXPERIENCE', link: '#Work', color: 'text-black' },
            {
                name: 'CONTACT',
                link: '#Contact',
                color: 'text-black',
            },
        ]);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    updateNavbar();
                }
            });
        });

        observer.observe(aboutMeRef.current);

        return () => {
            observer.unobserve(aboutMeRef.current);
        };
    }, []);

    const Edu_details = [
        {
            school : "Kendriya Vidyalaya",
            year : "2005-2015",
            marks: "9.0 cgpa",
            bg_pic: KV,
            bg_col: "bg-yellow-500",
            col_text: "text-red-800",
            detail: "I completed my basic education from class I to X, focusing on Science, Maths, Hindi, Socail Studies and English."
        },
        {
            school : "Delhi Public School",
            year : "2015-2017",
            marks: "75%",
            bg_pic: DPS,
            bg_col: "bg-emerald-700",
            col_text: "text-white",
            detail: "I completed my foundational education from class XI to XII, focusing on Physics, Maths, Chemistry, and Computer Science."
        },
        {
            school : "Chandigarh University",
            year : "2017-2021",
            marks: "6.9 cgpa",
            bg_pic: CU,
            bg_col: "bg-red-600",
            col_text: "text-black",
            detail: (
              <>
                  I completed my <strong>Bachelor's degree</strong> in Computer Science and other key subjects such as DSA, Programming, etc.
              </>
          )
        }
      ]; 
    return (
        <div className="bg-white flex justify-center py-24 w-full">
            <div className="w-full sc:w-170">
            <div ref={aboutMeRef} className="flex justify-center">
                    <Header title='Education' > Here you will find more information about my educational background, including where I studied and what I studied. </Header>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-16 py-16'>
                    {Edu_details.map((details, index) => (
                        <div key={index} className="py-2">
                            <EducationContext.Provider value={details}>
                                <Education  />
                            </EducationContext.Provider>
                        </div>
                    ))}   
                </div>
            </div>
        </div>
    )
}