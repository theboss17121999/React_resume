import T1 from '../assets/background/tiles1.svg';


export const Project = ({details}) => {
    
    return (
        <div className="bg-gray-100">
            <div className="bg-black h-1"></div>
            <h1 className="text-5xl md:text-7xl font-jersey mb-4 flex justify-center">Project</h1>
            <div className="bg-black h-1"></div>
            <div className='' style={{ backgroundImage: `url(${T1})`, overflow: 'hidden' ,backgroundSize: '150%' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {details.map((detail, index) => (
                        <ProjectCard key={index} detail={detail} />
                    ))}
                </div>
            </div>
        </div>
    );
};

function ProjectCard({ detail }) {
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <OnScreenProject img={detail.image} />
            <div className="p-6">
                <ProjectDetails project_name={detail.pro_name} desc={detail.desc} tech={detail.tech} url={detail.url}/>
            </div>
        </div>
    );
}

function OnScreenProject({ img }) {
    return (
        <div>
            <img className="w-full rounded-t-lg" src={img} alt="laptop" />
        </div>
    );
}

function ProjectDetails({ project_name, desc, tech ,url}) {
    const openInNewTab = (ur) => {
        window.open(ur, "_blank", "noreferrer");
    };
    return (
        <div className="">
            <div>
                <h1 className="text-xl md:text-3xl font-bold mb-2 text-blue-900">{project_name}</h1>
            </div>
            <div>
                <p className="text-gray-700">{desc}</p>
            </div>
            <div className="mt-4">
                {tech.map((t, index) => (
                    <StringInBox key={index} text={t} />
                ))}
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={() => openInNewTab(url)}>
                    Github Repository
                </button>
            </div>
        </div>
    );
}

const StringInBox = ({ text }) => {
    return (
        <div className="inline-block bg-gray-200 text-gray-800 rounded-lg py-1 px-2 mr-2 mb-2">
            {text.trim()}
        </div>
    );
};
