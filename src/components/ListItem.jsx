// import { useDispatch, useSelector } from 'react-redux';
// import { addToFavorites, removeFromFavorites } from '../redux/FavouriteSlice';
// import { useState} from 'react';
// import {
//   SelectAdverts,
//   SelectFavorites,
// } from '../redux/selectors';
// export const ListItem = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   const handleOpenModal = ()=>{
//     setIsModalOpen(true);
//   }
//   const dispatch = useDispatch();

//   const { adverts } = useSelector(SelectAdverts);
//   const { favorites } = useSelector(SelectFavorites);
//   console.log(adverts);

//   if (!adverts || adverts.length === 0) return null;
//   return adverts.map(advert => {
//     const isFavorite = favorites.some(favorite => favorite.id === advert.id);
//      const handleToggleFavorite = () => {
//       if (isFavorite) {
//         dispatch(removeFromFavorites(advert));
//       } else {
//         dispatch(addToFavorites(advert));
//       }
//     };
//     return (
//       <li key={advert.id}>
//         <div>
//             <div></div>
//           {advert.name}
//           <div>
//           €{advert.price}
//             <button onClick={handleToggleFavorite}>
//               {isFavorite ? (
//                 <span style={{ color: 'red' }}>❤️</span>
//               ) : (
//                 <span>🤍</span>
//               )}
//             </button>
//           </div>
//           <div>
//             Star {advert.raiting}({advert.reviews.length} Reviews)
//           </div>
//           <div>
//             <p>{advert.description}</p>
//           </div>
//           <div>
//             <div>{advert.adults} adults</div>
//             <div>{advert.transmission}</div>
//             <div>{advert.engine}</div>
//             <div>kitchen</div>
//             <div>{advert.details.beds} beds</div>
//             <div>AC</div>
//           </div>
//           <button onClick={()=>handleOpenModal(advert)}>Show More</button>
//         </div>
//       </li>
//     );
//   });
// };
