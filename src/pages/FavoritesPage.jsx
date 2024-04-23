import { FavoritesList } from "../components/FavoritesList"
import { SelectError, SelectFavorites, SelectLoading } from "../redux/selectors"
import {useSelector} from 'react-redux'
import { StyledMainContainer } from "./StyledPages"
export const FavoritesPage =()=>{

    const {favorites}=useSelector(SelectFavorites)
    console.log(favorites)
    const isLoading = useSelector(SelectLoading);
    const error = useSelector(SelectError);
    if (!favorites || favorites.length === 0) return null;
    return (
        <StyledMainContainer>
                {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
            Favorites
            {favorites.lenght!==0 ? <FavoritesList/>:null }
        </StyledMainContainer>
       )
}