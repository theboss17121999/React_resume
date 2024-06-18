import '../../App.css'
import { HashLink as Link } from 'react-router-hash-link';


export const CustomButton = () =>{
    return (
        <>
            <div class="level-up">
                <span class="text">
                    <Link to="#Project"  smooth>
                        PROJECT
                    </Link>
                </span>
            </div>
            
        </>
    )
}