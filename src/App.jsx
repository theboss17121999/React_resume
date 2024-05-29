import './App.css'
import { Intro } from './components/Intro'
import { LowerBar } from './components/LowerBar'
import {NavBar} from './components/TopBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {AboutMe} from './components/AboutMe'
import {Contact} from './components/Contact'
import {ProjectDetails} from './contextProvider/ProjectContextProvider'
import { EducationDetails } from './contextProvider/EducationContextProvider'


function App() {
  const title = "Shashwat Bose";
  const navbar =[
    {
      name: "Home",
      link: "#Home"
    },
    {
      name: "About Me",
      link: "#AboutMe"
    },
    {
      name: "Education",
      link: "#Education"
    },
    {
      name: "Project",
      link: "#Project"
    },
    {
      name: "Contact",
      link: "#Contact"
    },
  ]
  


  return (
    <>
      <BrowserRouter basename="/React_resume/">
        <div  className='sticky top-0 z-50 '>
          <NavBar navbar={navbar}></NavBar>
        </div>
        {/* <Routes> 
          <Route path='/education' element={<Education details={Edu_details}></Education>} />
          <Route path='/' element={<Project details={details}></Project>} />
        </Routes> */}
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
      </BrowserRouter>
    </>
  )
}

export default App
