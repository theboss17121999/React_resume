import T1 from '../assets/background/tiles1.svg';
import project1 from '../assets/project/LapPro1.png';


export const Project = ({details}) => {
    
    return (
        <div className="bg-gray-100 flex justify-center py-24 w-full">
            <div className="w-full sc:w-170">
                <Header />
                {details.map((details, index) => (
                    <div key={index} className="py-2">
                        <Projects details={details}/>
                    </div>
                ))} 
            </div>
        </div>
    );
};


function Header() {
    return (
        <div className="flex flex-col justify-center items-center px-4 md:px-0">
            <div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl md:text-5xl font-display2">Projects</p>
                    <div className="pt-3">
                        <div className="bg-gree w-8 h-1 mt-2 rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-12 w-full sc:w-160 sc:px-4">
                    <p className="text-lg md:text-xl text-center">Here you will find more information about my educational background, including where I studied and the grades I achieved.</p>
                </div>
            </div>
        </div>
    );
}

function Projects({details}){
    return (
        <div className="pt-32 px-4 sc:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <ProjectImage img={details.image}  />
                </div>
                <div className='content-center'>
                    <ProjectDetails name={details.pro_name} link={details.url} desc={details.desc}/>
                </div>
            </div>
        </div>
    );
}

function ProjectImage({img}){
    return (
        <>
            <img src={img} alt="" />
        </>
    )
}

function ProjectDetails({name, link, desc}){
    return (
        <>
            <div>
                <p className='font-display6 font-semibold text-purple-700 md:text-3xl'>{name}</p>
                <p className='md:text-xl pt-4'>{desc}</p>
                <div className="pt-8 flex justify-center md:justify-start">
                    <a href={link} className='bg-purple-800 text-white font-bold py-4 px-4 rounded-lg text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Repository</a>
                </div>
            </div>
        </>
    )
}