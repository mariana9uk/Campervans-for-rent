import { NavLink } from 'react-router-dom';
export const HomePage=()=>{

    return(
        <div>
            Homepage
            <NavLink to="/catalog">Go To Adverts</NavLink>
        </div>
    )
}