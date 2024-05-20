import { useState } from "react"
import {HashLink as Link} from "react-router-hash-link"

export const NavBar= ({navbar}) =>{

  const [isClick, setIsClick] = useState(false);

  const toggleNavBar = () => {
    setIsClick(!isClick);
  }
  return (
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <Link to="#Home" className="text-white" smooth>
                  Shashwat Bose
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {navbar.map((navbar, index) => (
                    <div key={index} className="py-2">
                        <NavButtons name={navbar.name} link={navbar.link} block={false}/>
                    </div>
                ))} 
              </div>
            </div>
            <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                      <NavButtons name={navbar.name} link={navbar.link} block={true}/>
                  </div>
                ))} 
            </div>
          </div>
        )}
      </nav>
  )
}

function NavButtons({ name, link, block }) {
  return (
    <Link
      to={link}
      className={`rounded-lg p-2 ${
        block ? "text-white block hover:bg-white hover:text-black" : "text-lime-400 hover:bg-white hover:text-black font-pixel text-lg"
      }`}
      smooth
    >
      {name}
    </Link>
  );
}