import { Header } from "./Header"
import{Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAdsThunk } from '../redux/APIThunk';
import { useDispatch,useSelector } from 'react-redux';
import { SelectError, SelectLoading } from '../redux/selectors'
export const SharedLayout = ()=>{
    // const [page] = useState(1);
    // const [perPage] = useState(4);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAdsThunk({page, perPage}));
    //   }, [dispatch, page,perPage]);
      const isLoading = useSelector(SelectLoading);
      const error = useSelector(SelectError);
    return(
        <div>
      <Header/>
      <Outlet/>
      {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
    )
}