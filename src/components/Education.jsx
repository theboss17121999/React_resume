import { useMediaQuery } from 'react-responsive';
import KV from '../assets/educationLogo/kendriya-vidyalaya-sangathan.png';
import DPS from '../assets/educationLogo/DPS.png';
import CU from '../assets/educationLogo/Cu.png';
import BG from '../assets/background/BG_education.png';


export const Education = () =>{
    const details = [
        {
            school : "Kendriya Vidyalaya",
            year : "2005-2015",
            marks: "9.0 cgpa",
            bg_pic: KV,
            bg_col: "bg-yellow-500",
            col_text: "text-red-800",
            subject: "Class X"
        },
        {
            school : "Delhi Public School",
            year : "2015-2017",
            marks: "75%",
            bg_pic: DPS,
            bg_col: "bg-emerald-700",
            col_text: "text-white",
            subject : "Class XII"
        },
        {
            school : "Chandigarh University",
            year : "2017-2021",
            marks: "6.9 cgpa",
            bg_pic: CU,
            bg_col: "bg-red-600",
            col_text: "text-black",
            subject: "Computer Science Engineering"
        }
    ]

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return(
        <div>
            <div className="bg-black h-1"></div>
            <h1 className="text-5xl md:text-7xl font-jersey mb-4 flex justify-center">Education</h1> 
            <div className="bg-black h-1"></div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {!isMobile && (
                    <div className="bg-black px-10">
                        <EducationSidebar></EducationSidebar>
                    </div>
                )}
                <div className='pb-5 ' style={{ backgroundImage: `url(${BG})`, overflow: 'hidden' ,backgroundSize: '150%' }}>
                    <div className='flex justify-center'>
                        <div>
                            {details.map((details, index) => (
                                <div key={index} className="py-2">
                                    <EduDetails name={details.school} year={details.year} marks={details.marks} bg_pic={details.bg_pic} bg={details.bg_col} col_text={details.col_text} subject={details.subject}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function EduDetails({name ,year, marks, bg_pic, bg, col_text, subject}){
    return (
        <div className='pt-4 shadow-lg w-128'>
            <RoundedTopCard name={subject} date={year} bg={bg} col_text={col_text}></RoundedTopCard>
            <RoundedBottomCard name={name} marks={marks} bg={bg_pic} subject={subject} />
        </div>
    )
}

function RoundedTopCard({name, date, bg, col_text}) {
    return (
        <div>
            <div className={`rounded-t-lg overflow-hidden  ${bg}`}>
                <div className={`text-center mb-4 pt-4`}>
                    <h2 className={`text-xl font-semibold ${col_text} font-display2`}>{name}</h2>
                    <div className='flex justify-end pr-4'>
                        <div>
                            <p className={`text-xs `}> {date}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black h-0.5 overflow-hidden"></div>
        </div>
    );
}

function RoundedBottomCard({name, marks, bg , subject}){
    return (
        <div>
            <div className='h-fit group'>
                <div className='relative overflow-hidden'>
                    <img className='w-full h-60 object-cover' src={bg} alt={name} />
                    <div className='absolute h-full w-full bg-black/80 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <div className='grid grid-cols-3 py-16'>
                            <p className='text-white font-display text-2xl md:text-3xl flex items-center justify-end col-span-1'>School: </p>
                            <p className='text-white font-display text-2xl md:text-3xl flex items-center justify-center col-span-2'>{name}</p>
                            <p className='text-white font-display text-2xl md:text-3xl flex items-center justify-end col-span-1'>Marks:</p>
                            <p className='text-white font-display text-2xl md:text-3xl flex items-center justify-center col-span-2'>{marks}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function EducationSidebar(){
    return (
        <div className='font-pixel text-white text-lg flex flex-col items-center justify-center h-full'>
            <p className="text-center mb-4">Throughout my educational journey, I've cultivated a mindset of continuous improvement, blending theoretical knowledge with practical application to build a diverse skill set. While the qualifications listed here provide a snapshot of my academic achievements, they only scratch the surface of my commitment to learning and growth.</p>
            <p className="text-center">I view education as a lifelong journey, and these academic pursuits are just a part of my ongoing commitment to personal and professional development. As I continue to evolve, I eagerly seek out new opportunities to expand my knowledge base and skill set, ensuring that I'm well-equipped to tackle the challenges of tomorrow.</p>
        </div>
    );
}