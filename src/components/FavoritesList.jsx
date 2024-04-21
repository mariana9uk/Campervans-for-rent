import { useDispatch, useSelector } from 'react-redux';
import {
  SelectAdverts,
  SelectError,
  SelectLoading,
  SelectFavorites,
} from '../redux/selectors';
import { addToFavorites, removeFromFavorites } from '../redux/FavouriteSlice';
import { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { DarkOverlay } from './ModalStyled';

export const FavoritesList = ()=>{
    const isLoading = useSelector(SelectLoading);
  const error = useSelector(SelectError);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState('');
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = advert => {
    setSelectedAd(advert);
    setIsModalOpen(true);
  };
  const dispatch = useDispatch();

  const { adverts } = useSelector(SelectAdverts);
  const { favorites } = useSelector(SelectFavorites);
   const ListItem = () => {
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
      if (!isFavorite) return null;
      return (
        <li key={advert.id}>
          <div>
            <div></div>
            {advert.name}
            <div>
              €{advert.price}
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
            <div>
              <p>{advert.description}</p>
            </div>
            <div>
              <div>{advert.adults} adults</div>
              <div>{advert.transmission}</div>
              <div>{advert.engine}</div>
              <div>kitchen</div>
              <div>{advert.details.beds} beds</div>
              <div>AC</div>
            </div>
            <button onClick={() => handleOpenModal(advert)}>Show More</button>
          </div>
        </li>
      );
    });
  };

  return (
   
    <div>
         {isModalOpen && <DarkOverlay onClick={closeModal} />}
      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ListItem />
      </ul>

      <Modal isOpen={isModalOpen} advert={selectedAd} onClose={closeModal} />
    </div>
  );
};

    
