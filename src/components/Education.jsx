import { useMediaQuery } from 'react-responsive';

export const Education = ({details}) =>{

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return(
        <div className='flex justify-center py-24 w-full sc:px-10'>
            <div className='w-full px-0 sc:w-170 '>
                <div className="flex justify-center">
                    <Header />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-16 py-16'>
                    {details.map((details, index) => (
                        <div key={index} className="py-2">
                            <EduCard name={details.school} year={details.year} img={details.bg_pic} details={details.detail}/>
                        </div>
                    ))}   
                </div>
            </div>
        </div>
    )
}


function Header() {
    return (
        <div className="flex flex-col justify-center items-center px-4 md:px-0">
            <div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl md:text-5xl font-display2">Education</p>
                    <div className="pt-3">
                        <div className="bg-gree w-8 h-1 mt-2 rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-12 w-full sc:w-160 sc:px-4">
                    <p className="text-lg md:text-xl text-center">Here you will find more information about my educational background, including where I studied and what I studied.</p>
                </div>
            </div>
        </div>
    );
}

function EduCard({name, year, img, details}){
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