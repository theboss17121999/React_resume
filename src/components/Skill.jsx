import { useMediaQuery } from 'react-responsive';

export const Skill = ({allskill}) => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    
    return (
        <div className="">
            <div className="bg-black h-1"></div>
            <h1 className="text-5xl md:text-7xl font-blood mb-4 flex justify-center text-red-500">Skills</h1> 
            <div className="bg-black h-1"></div>
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="justify-center px-20 pb-10 pt-2">
                    {allskill.map((handle, index) => (
                        <div key={index} className="py-3">
                            <SkillBarSkill subject={handle.subject} points={handle.points} color={handle.color} />
                        </div>
                    ))}
                </div>
                {!isMobile && (
                    <div className="bg-black px-10">
                        <SkillSidebar />
                    </div>
                )}
            </div>
        </div>
    );
}

function SkillBarSkill( {subject, points, color} ){
    return (
        <div className="grid grid-cols-6 gap-4 text-xs md:text-xl">
            <div className="font-pixel flex justify-center col-span-1">
                <p className="pt-2 pr-10">{subject}</p>
            </div>
            <div className="col-span-5">
                <SkillBar point={points} color={color} />
            </div>
        </div>
    );
}

function SkillBar({point ,color}) {
    const numberOfBars = 5;

    const bars = [];

    for (let i = 0; i < numberOfBars; i++) {
        bars.push(<SkillBarSegment key={i} bg={(i < point )? color : 'bg-gray-300'} />);
    }

    return (
        <div className="grid grid-cols-5 gap-3 py-2">
            {bars}
        </div>
    );
}

function SkillBarSegment({ bg }) {
    return (
        <div className={`w-15 md:w-15 h-3 md:h-6 rounded-full ${bg} mr-3 border border-black`}></div>
    );
}


function SkillSidebar(){
    return (
        <div className='font-pixel text-white text-lg flex flex-col items-center justify-center h-full'>
            <p className="text-center mb-4">Over the years, I've dedicated myself to continuous improvement through rigorous training and hands-on work experience, resulting in a diverse skill set.
             While the skills listed here represent a significant portion of my expertise, they by no means encompass the entirety of my capabilities. 
             I'm continually expanding and refining my skill set to tackle new challenges and pursue opportunities for growth.</p>
            <p className="text-center">Let's build something amazing together!</p>
        </div>
    );
}
