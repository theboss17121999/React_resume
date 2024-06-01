import { ProjectContext } from "../context/ProjextContext";
import project1 from '../assets/project/LapPro1.png';
import project2 from '../assets/project/LapPro2.png';
import { Project } from "../components/Project";
import { Reveal } from "../components/utils/Reveal";


export const ProjectDetails = () =>{
    const details = [
        {
            pro_name: "Portfolio",
            image: project2,
            desc: "It includes information about individuals, such as their education, projects, and contact details, as well as the skills they have acquired over the years.",
            url :"https://github.com/theboss17121999/React_resume"
        },
        {
            pro_name: "Spending Tracker",
            image: project1,
            desc: "It is used to track spending record along with ability track spending on any particular items with any given date range.",
            url :"https://github.com/theboss17121999/Spending_Tracker"
        },
        // {
        //     pro_name: "Spending Tracker",
        //     image: project1,
        //     desc: "it is used to track spending record along with ability track spending on any particular items with any given date range.",
        //     url:""
        // }
        ];
    return (
        <div className="bg-gray-100 flex justify-center py-24 w-full">
            <div className="w-full sc:w-170">
                <Header />
                {details.map((details, index) => (
                    <div key={index} className="py-2">
                        <ProjectContext.Provider value={details}>
                            <Project  />
                        </ProjectContext.Provider>
                    </div>
                ))} 
            </div>
        </div>
        
    );
}

function Header() {
    return (
        <div className="flex flex-col justify-center items-center px-4 md:px-0">
            <div>
                <div className="flex flex-col justify-center items-center">
                    <Reveal>
                        <h1 className="text-3xl md:text-5xl font-display2">Projects</h1>
                    </Reveal>
                    <div className="pt-3">
                        <div className="bg-gree w-8 h-1 mt-2 rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-12 w-full sc:w-160 sc:px-4">
                    <Reveal>
                        <p className="text-lg md:text-xl text-center">Here you will find more information about my educational background, including where I studied and the grades I achieved.</p>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
