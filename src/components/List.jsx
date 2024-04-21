import { useDispatch, useSelector } from 'react-redux';
import { SelectAdverts, SelectError, SelectLoading } from '../redux/selectors';
import { ListItem } from './ListItem';
import {getAdsThunk} from '../redux/APIThunk'
import { useState,  useEffect } from 'react';
export const List=()=>{
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAdsThunk());
    //   }, [dispatch]);
    // const {adverts}=useSelector(SelectAdverts);
    const isLoading = useSelector(SelectLoading);
  const error = useSelector(SelectError);
    return(
        <ul>
  {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
<ListItem />
        </ul>
    )
}