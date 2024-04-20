import {Routes, Route} from "react-router-dom"
import {SharedLayout} from './SharedLayout'
import{HomePage} from '../pages/Home'
import{ListPage} from '../pages/ListPage'
import{FavoritesPage} from '../pages/FavoritesPage'
export const App = () => {
  return (
    <Routes>
   
      <Route path="/" element={<SharedLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="catalog" element={<ListPage/>}/>
      <Route path="favorites" element={<FavoritesPage/>}/>
   <Route path="*" element={<HomePage />} />
    </Route>
    </Routes>
  );
};
