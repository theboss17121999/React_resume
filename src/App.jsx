import './App.css';
import { Intro } from './components/Intro';
import { LowerBar } from './components/LowerBar';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { ProjectDetails } from './contextProvider/ProjectContextProvider';
import { EducationDetails } from './contextProvider/EducationContextProvider';
import { useCallback } from 'react';
import { WorkExp } from './components/WorkExp';
import { name } from './details';

function App() {
  const title = name;

  const renderIntro = useCallback(() => <Intro title={title} />, [title]);
  const renderAboutMe = useCallback(() => <AboutMe />, []);
  const renderEducationDetails = useCallback(() => <EducationDetails />, []);
  const renderProjectDetails = useCallback(() => <ProjectDetails />, []);
  const renderContact = useCallback(() => <Contact />, []);
  const renderLowerBar = useCallback(() => <LowerBar />, []);

  return (
    <>
      <div className='w-full overflow:hidden'>
        <div id="Home">
          {renderIntro()}
        </div>
        <div id="AboutMe" className='bg-stone-50'>
          {renderAboutMe()}
        </div>
        <div id="Education" className=''>
          {renderEducationDetails()}
        </div>  
        <div id="Project">
          {renderProjectDetails()}
        </div>
        <div id="Work">
          <WorkExp />
        </div>
        <div id="Contact">
          {renderContact()}
        </div>
        <div className=''>
          <div className='py-20 md:py-40 px:20 bg-black'>
            {renderLowerBar()}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
