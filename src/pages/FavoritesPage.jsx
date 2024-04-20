import { FavoritesList } from "../components/FavoritesList"
import { SelectFavorites } from "../redux/selectors"
import {useSelector} from 'react-redux'
export const FavoritesPage =()=>{
    const {favorites}=useSelector(SelectFavorites)
    console.log(favorites)
   
    return (
        <div>
            Favorites
            {favorites.lenght===0 ? <FavoritesList/>:null }
        </div>
       )
}