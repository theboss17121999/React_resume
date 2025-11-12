import KV from './assets/educationLogo/kv.png';
import DPS from './assets/educationLogo/DPS.png';
import CU from './assets/educationLogo/Cu.png';
import IIT from './assets/educationLogo/IIT patna logo.png'

export const name = "Shashwat Bose";

//Skill---------------------------------------------------------------------------------------------

export const wantTochangeSkill = false;

export const skillArray = ["Mongo DB", "Express", "React", "NodeJs", 
                        "Tailwind", "Java", "JavaScript", "TypeScript", "Python", "HTML", "CSS", 
                        "SQL", "Terminal", "Responsive Design", "GIT", "GitHub", "PostMan", 
                        "Problem Solving","Data Structure and Algorithm"];

//social Media links --------------------------------------------------------------------------------
export const linkedinLink = "https://www.linkedin.com/in/shabose/"

export const githubLink = "https://github.com/theboss17121999"

export const doYouWantToShowLeetCode = true;
export const leetcodeLink = "https://leetcode.com/u/shashwat1712/"

export const facebookLink = "https://www.facebook.com/profile.php?id=100009064223193"

export const instagramLink = "https://www.instagram.com/shashwat_1712/"

//Education Details--------------------------------------------------------------------------------

export const allEducationDetails = [
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
        detail: "I completed my Bachelor's degree in Computer Science and other key subjects such as DSA, Programming, etc."
    },
    {
        school : "IIT Patna",
        year : "2025-2027",
        marks: "-- cgpa",
        bg_pic: IIT,
        bg_col: "bg-red-600",
        col_text: "text-black",
        detail: "Currently on going Master's degree in Business Administartion."
    }
  ];