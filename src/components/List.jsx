import { useDispatch, useSelector } from 'react-redux';
import {
  SelectAdverts,
  SelectError,
  SelectLoading,
  SelectFavorites,
} from '../redux/selectors';
import { addToFavorites, removeFromFavorites } from '../redux/FavouriteSlice';
import { useState} from 'react';
import { Modal } from './Modal';
import { DarkOverlay } from './ModalStyled';
import { ButtonStyled, ListCardContainer, ListContainer } from './StylesForList';

export const List = () => {
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
  console.log(adverts);

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
      return (
        <ListCardContainer key={advert.id}>
          <div>
            <div>{advert.galery}</div>
            <div>
            <h1>
            {advert.name}
            </h1>
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
            </div>
            <div>
            <div>
            ⭐{advert.raiting}({advert.reviews.length} Reviews)
            
            </div>
            <div>  {advert.location}</div>
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
            <ButtonStyled onClick={() => handleOpenModal(advert)}>Show More</ButtonStyled>
          </div>
      
        </ListCardContainer>
      );
    });
  };

  return (
   
    <ListContainer>
         {isModalOpen && <DarkOverlay onClick={closeModal} />}
      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ListItem />
      </ul>

      <Modal isOpen={isModalOpen} advert={selectedAd} onClose={closeModal} />
    </ListContainer>
  );
};
