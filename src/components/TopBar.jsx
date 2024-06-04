import { useContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavBarContext } from "../context/NavBarContext";
import shashwat from '../assets/Intro/shashwat.jpg';
import { motion, useScroll, useSpring } from 'framer-motion'
import { Reveal } from "./utils/Reveal";

export const NavBar= () => {
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

  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <nav className="bg-slate-200 fixed w-screen top-0 z-50">
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
                    <NavButtons  block={true} toggleNavBar={toggleNavBar} setIsClick={setIsClick} isClick={isClick}/>
                  </NavBarContext.Provider>
                </div>
              ))} 
            </div>
          </div>
        )}
      </nav>
      <motion.div
        className="fixed top-0 w-full h-2 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed bottom-0 w-full h-2 bg-blue-500 origin-right z-50"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed top-0 h-full w-2 bg-blue-500 origin-top z-50"
        style={{ scaleY }}
      />
      <motion.div
        className="fixed right-0 h-full w-2 bg-blue-500 origin-bottom z-50"
        style={{ scaleY }}
      />
    </>
  )
}

function NavButtons({block , toggleNavBar ,setIsClick ,isClick }) {
  const name = useContext(NavBarContext).name;
  const link = useContext(NavBarContext).link;
  return (
    <button onClick={toggleNavBar}>
      <Link
        to={link}
        className={`rounded-lg p-2 font-display2 ${
          block ? "text-black text-sm block hover:text-purple-700" : "text-black hover:text-purple-700 md:text-base lg:text-lg"
        }`}
        smooth
      >
        {name}
      </Link>
    </button>
  );
}

function TopLogo(){
  return (
    <a href="https://theboss17121999.github.io/React_resume/" className="group hover:bg-black">
      <Reveal>
        <div className="flex items-center"> 
          <img src={shashwat} alt="shashwat" className="w-8 lg:w-12 rounded-full" />
          <div className="text-black text-lg lg:text-2xl font-display5 ml-2 group-hover:text-purple-700"> 
            Shashwat Bose
          </div>
        </div>
      </Reveal>
    </a>
  );
}
