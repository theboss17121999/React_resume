import { Education } from '../components/Education';
import { EducationContext } from '../context/EducationContext';
import { Reveal } from '../components/utils/Reveal';
import { useSetRecoilState } from 'recoil';
import { navbarAtom } from '../store/navbar/navbar';
import { useEffect, useRef } from 'react';
import { Header } from '../components/utils/Header';
import { useUpdateNavBar } from '../Hooks/useUpdateNavBar';
import { allEducationDetails } from '../details';

export const EducationDetails = () =>{
    const aboutMeRef = useRef(null);

    const updateNavbar = useUpdateNavBar(3);

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

    const Edu_details = allEducationDetails;
    return (
        <div className="bg-white flex justify-center py-24 w-full">
            <div className="w-full sc:w-170">
            <div ref={aboutMeRef} className="flex justify-center">
                    <Header title='Education' > Here you will find more information about my educational background, including where I studied and what I studied. </Header>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 gap-16 py-16'>
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