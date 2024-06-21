import { useRecoilState, useSetRecoilState } from 'recoil';
import { navbarAtomFamily, navbarSelector } from '../store/navbar/navbarFamily';

export function useUpdateNavBar(id) {
    const [navItem, setNavItem] = useRecoilState(navbarAtomFamily(id));
    const setNavbarColors = useSetRecoilState(navbarSelector);

    const updateNavbar = () => {
        setNavbarColors(id);
        setNavItem({ ...navItem, color: 'text-purple-700' });
    };

    return updateNavbar;
}
