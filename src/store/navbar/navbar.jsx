import { atom } from "recoil";


export const navbarAtom = atom({
    key:"navbarAtom",
    default : [
        {
          name: "HOME",
          link: "#Home",
          color: "text-red-500"
        },
        {
          name: "ABOUT ME",
          link: "#AboutMe",
          color: "text-black"
        },
        {
          name: "EDUCATION",
          link: "#Education",
          color: "text-black"
        },
        {
          name: "PROJECTS",
          link: "#Project",
          color: "text-black"
        },
        {
          name: "CONTACT",
          link: "#Contact",
          color: "text-black"
        },
      ]
})