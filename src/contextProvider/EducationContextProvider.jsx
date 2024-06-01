import KV from '../assets/educationLogo/KV.png';
import DPS from '../assets/educationLogo/dps.png';
import CU from '../assets/educationLogo/CU.png';
import { Education } from '../components/Education';
import { EducationContext } from '../context/EducationContext';

export const EducationDetails = () =>{
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
            <div className="flex justify-center">
                    <Header />
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