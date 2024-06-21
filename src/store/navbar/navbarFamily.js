import { atomFamily, selector } from "recoil";
import { NavBar } from "../data/data";


export const navbarAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return NavBar.find(x => x.id === id)
  },
});

export const navbarSelector = selector({
  key: 'navbarSelector',
  get: ({ get }) => {
    const items = NavBar.map(item => get(navbarAtomFamily(item.id)));

    return items;
  },
  set: ({ get, set }, exceptionId) => {
    NavBar.forEach(item => {
      if (item.id !== exceptionId) {
        set(navbarAtomFamily(item.id), {
          ...get(navbarAtomFamily(item.id)),
          color: 'text-black' 
        });
      }
    });
  }
});