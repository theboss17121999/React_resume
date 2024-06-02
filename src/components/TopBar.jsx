import { useContext, useState } from "react"
import {HashLink as Link} from "react-router-hash-link"
import { NavBarContext } from "../context/NavBarContext";
import shashwat from '../assets/Intro/shashwat.jpg';
export const NavBar= () =>{
  const navbar =[
    {
      name: "HOME",
      link: "#Home"
    },
    {
      name: "ABOUT ME",
      link: "#AboutMe"
    },
    {
      name: "EDUCATION",
      link: "#Education"
    },
    {
      name: "PROJECTS",
      link: "#Project"
    },
    {
      name: "CONTACT",
      link: "#Contact"
    },
  ]

  const [isClick, setIsClick] = useState(false);

  const toggleNavBar = () => {
    setIsClick(!isClick);
  }
  return (
      <nav className="bg-slate-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TopLogo />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-6 pr-6">
                {navbar.map((navbar, index) => (
                    <div key={index} className="py-2">
                      <NavBarContext.Provider value={navbar}>
                        <NavButtons  block={false}/>
                      </NavBarContext.Provider>
                    </div>
                ))} 
              </div>
            </div>
            <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              onClick={toggleNavBar}
              >
                { isClick ? (
                  <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navbar.map((navbar, index) => (
                  <div key={index} className="py-2">
                      <NavBarContext.Provider value={navbar}>
                        <NavButtons  block={true}/>
                      </NavBarContext.Provider>
                  </div>
                ))} 
            </div>
          </div>
        )}
      </nav>
  )
}

function NavButtons({block }) {
  const name = useContext(NavBarContext).name;
  const link = useContext(NavBarContext).link;
  return (
    <Link
      to={link}
      className={`rounded-lg p-2 font-display2 ${
        block ? "text-black block hover:text-purple-700" : "text-black hover:text-purple-700 md:text-base lg:text-lg"
      }`}
      smooth
    >
      {name}
    </Link>
  );
}

function TopLogo(){
  return (
    <a href="https://theboss17121999.github.io/React_resume/" className="group hover:bg-black">
      <div className="flex items-center"> 
        <img src={shashwat} alt="shashwat" className="w-6 md:w-8 lg:w-12 rounded-full" />
        <div className="text-black text-base md:text-lg lg:text-2xl font-display5 ml-2 group-hover:text-purple-700"> 
          Shashwat Bose
        </div>
      </div>
    </a>
  );
}


