import { Header } from "./Header"
import{Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getAdsThunk } from '../redux/APIThunk';
import { useDispatch,useSelector } from 'react-redux';
import { SelectError, SelectLoading } from '../redux/selectors'
export const SharedLayout = ()=>{

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