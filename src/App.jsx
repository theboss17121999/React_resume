import './App.css'
import { Intro } from './components/Intro'
import { LowerBar } from './components/LowerBar'
import {AboutMe} from './components/AboutMe'
import {Contact} from './components/Contact'
import {ProjectDetails} from './contextProvider/ProjectContextProvider'
import { EducationDetails } from './contextProvider/EducationContextProvider'
import { motion, useScroll, useSpring } from 'framer-motion'


function App() {
  const title = "Shashwat Bose";
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <>
      <div className='w-full overflow:hidden'>
          <motion.div
            className="fixed top-15 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
            style={{ scaleX }}
          />
          <div id="Home">
            <Intro title={title}></Intro>
          </div>
          <div id="AboutMe" className='bg-stone-50'>
            <AboutMe></AboutMe>
          </div>
          <div id="Education" className=''>
            <EducationDetails />
          </div>  
          <div id="Project">
            <ProjectDetails />
          </div>
          <div id="Contact">
            <Contact />
          </div>
          <div className=''>
            <div className='py-20 md:py-40 px:20 bg-black'>
              <LowerBar ></LowerBar>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
