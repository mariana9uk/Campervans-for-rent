import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/FavouriteSlice';
import { useState, useEffect } from 'react';
import {
  SelectAdverts,
  SelectError,
  SelectFavorites,
  SelectLoading,
} from '../redux/selectors';
import { getAdsThunk } from '../redux/APIThunk';
export const ListItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { adverts } = useSelector(SelectAdverts);
  const { favorites } = useSelector(SelectFavorites);
  console.log(adverts);
  if (!adverts || adverts.length === 0) return null;
  return adverts.map(advert => {
    const isFavorite = favorites.some(favorite => favorite.id === advert.id);
    const handleToggleFavorite = () => {
      if (isFavorite) {
        dispatch(removeFromFavorites(advert));
      } else {
        dispatch(addToFavorites(advert));
      }
    };
    return (
      <li key={advert.id}>
        <div>{advert.name} 
        <div>
           ${advert.price}
        <button onClick={handleToggleFavorite}>
          {isFavorite ? (
            <span style={{ color: 'red' }}>❤️</span>
          ) : (
            <span>🤍</span>
          )}
        </button>
        </div>
        <div>
          Star {advert.raiting}({advert.reviews.length} Reviews)
        </div>
        <p>{advert.description}</p>
        <div>
            {}
        </div>
        </div>
        
          
      </li>
    );
  });
};
