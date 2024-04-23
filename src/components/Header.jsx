import { StyledHeader } from 'pages/StyledPages';
import { NavLink } from 'react-router-dom';
export const Header = ()=>{
    return(
        <StyledHeader>
             <NavLink to="/">CR</NavLink>
                         <NavLink to="/catalog">Adverts</NavLink>
             <NavLink to="/favorites">Favorites</NavLink>
        </StyledHeader>
    )
}