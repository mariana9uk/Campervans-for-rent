import { NavLink } from 'react-router-dom';
export const Header = ()=>{
    return(
        <div>
             <NavLink to="/">CR</NavLink>
             <NavLink to="/favorites">Favorites</NavLink>
             <NavLink to="/catalog">Adverts</NavLink>
        </div>
    )
}