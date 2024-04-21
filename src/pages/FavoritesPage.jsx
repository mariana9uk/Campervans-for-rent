import { FavoritesList } from "../components/FavoritesList"
import { SelectFavorites } from "../redux/selectors"
import {useSelector} from 'react-redux'
export const FavoritesPage =()=>{
    const {favorites}=useSelector(SelectFavorites)
    console.log(favorites)
    if (!favorites || favorites.length === 0) return null;
    return (
        <div>
            Favorites
            {favorites.lenght!==0 ? <FavoritesList/>:null }
        </div>
       )
}