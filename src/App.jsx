import './App.css'
import { Intro } from './components/Intro'
import { LowerBar } from './components/LowerBar'
import {Skill} from './components/Skill'
import {Education} from './components/Education'
import {Project} from './components/Project'
import {NavBar} from './components/TopBar'
import {BrowserRouter} from "react-router-dom"
import {AboutMe} from './components/AboutMe'
import project1 from './assets/project/LapPro1.png';
import project2 from './assets/project/LapPro2.png';
import linkedinLogo from './assets/socaillogo/Linkedin.png'; 
import leetcodeLogo from './assets/socaillogo/leetcode.png'; 
import githubLogo from './assets/socaillogo/github.png'; 
import instagramLogo from './assets/socaillogo/instagram.png'; 
import facebookLogo from './assets/socaillogo/facebook.png'; 
import KV from './assets/educationLogo/KV.png';
import DPS from './assets/educationLogo/dps.png';
import CU from './assets/educationLogo/CU.png';


function App() {
  const title = "Shashwat Bose";
  const allskill = [
    {
        subject: "Java",
        points : 5,
        color  :"bg-blue-600"
    },
    {
        subject: "Python",
        points : 4,
        color  :"bg-blue-800"
    },
    {
        subject: "HTML/CSS",
        points : 3,
        color  :"bg-amber-500"
    },
    {
        subject: "DSA",
        points : 4,
        color  :"bg-cyan-400"
    },
    {
        subject: "JavaScript",
        points : 5,
        color  :"bg-yellow-400"
    },
    {
        subject: "React",
        points : 4,
        color  :"bg-sky-300"
    },
    {
        subject: "Tailwind",
        points : 4,
        color  :"bg-rose-900"
    }
  ]
  const details = [
    {
        pro_name: "Portfolio",
        image: project2,
        desc: "It is used to track spending record along with ability track spending on any particular items with any given date range.",
        tech: ["React", "Tailwind", "NodeJs"],
        url :"https://github.com/theboss17121999/React_resume"
    },
    {
        pro_name: "Spending Tracker",
        image: project1,
        desc: "it is used to track spending record along with ability track spending on any particular items with any given date range.",
        tech: ["Java", "SQL", "JFrame"],
        url :"https://github.com/theboss17121999/Spending_Tracker"
    },
    // {
    //     pro_name: "Spending Tracker",
    //     image: project1,
    //     desc: "it is used to track spending record along with ability track spending on any particular items with any given date range.",
    //     tech: ["Java", "SQL", "JFrame"]
    // }
    ];
    const allHandles = [
      {
          logo: linkedinLogo,
          url: "https://www.linkedin.com/in/shabose/",
          tw: 'transition duration-300 ease-in-out transform hover:scale-110',
          alt: "Linkedin"
      },
      {
          logo: leetcodeLogo,
          url: "https://leetcode.com/u/shashwat1712/",
          tw: 'transition duration-300 ease-in-out transform hover:scale-110',
          alt: "Leetcode"
      },
      {
          logo: githubLogo,
          url: "https://github.com/theboss17121999",
          tw: 'transition duration-300 ease-in-out transform hover:scale-110',
          alt: "Github"
      },
      {
          logo: instagramLogo,
          url: "https://www.instagram.com/shashwat_1712/",
          tw: 'transition duration-300 ease-in-out transform hover:scale-110',
          alt: "Instagram"
      },
      {
          logo: facebookLogo,
          url: "https://www.facebook.com/profile.php?id=100009064223193",
          tw: 'transition duration-300 ease-in-out transform hover:scale-110',
          alt: "Facebook"
      },
  ];

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
    <>
      <BrowserRouter>
        <div  className='sticky top-0 z-50 '>
          <NavBar></NavBar>
        </div>
        <div id="Home">
          <Intro title={title}></Intro>
        </div>
        <div id="AboutMe" className='bg-stone-50'>
          <AboutMe></AboutMe>
        </div>
        <div id="Education" className=''>
          <Education details={Edu_details}></Education>
        </div>  
        {/* <div id="Skill" className=''>
          <Skill allskill={allskill}></Skill>
        </div>  */}
        <div id="Project">
          <Project details={details}></Project>
        </div>
         
        <div className=''>
          <div className='py-20 md:py-40 px:20 bg-black'>
            <LowerBar allHandles={allHandles}></LowerBar>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
