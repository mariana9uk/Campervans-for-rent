import { List } from '../components/List';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAdsThunk } from '../redux/APIThunk';
import { SelectError, SelectLoading } from '../redux/selectors';

export const ListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdsThunk());
  }, [dispatch]);
  const isLoading = useSelector(SelectLoading);
  const error = useSelector(SelectError);
  return (
    <div>
         {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      <List />
    </div>
  );
};
