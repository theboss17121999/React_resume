import { useRecoilState } from 'recoil';
import { navbarAtomFamily } from '../store/navbar/navbarFamily';

export function useUpdateNavBar(id) {
    const [navItem, setNavItem] = useRecoilState(navbarAtomFamily(id));
    let navItem1, setNavItem1, navItem2, setNavItem2;

    if (id > 1) {
        [navItem1, setNavItem1] = useRecoilState(navbarAtomFamily(id - 1));
    }
    if (id < 6) {
        [navItem2, setNavItem2] = useRecoilState(navbarAtomFamily(id + 1));
    }

    const updateNavbar = () => {
        if (id > 1 && setNavItem1) {
            setNavItem1({ ...navItem1, color: 'text-black' });
        }
        if (id < 6 && setNavItem2) {
            setNavItem2({ ...navItem2, color: 'text-black' });
        }
        setNavItem({ ...navItem, color: 'text-purple-700' });
    };

    return updateNavbar;
}
