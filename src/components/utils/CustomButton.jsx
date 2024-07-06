import '../../App.css';
import { HashLink as Link } from 'react-router-hash-link';

export const CustomButton = () => {
    return (
        <Link to="#Project" smooth>
            <div className="level-up">
                <span className="text">
                    PROJECTS
                </span>
            </div>
        </Link>
    );
};
