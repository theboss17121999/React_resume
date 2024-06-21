import { atomFamily } from "recoil";
import { NavBar } from "../data/data";


export const navbarAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return NavBar.find(x => x.id === id)
  },
});