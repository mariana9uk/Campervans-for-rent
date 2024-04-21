import { List } from '../components/List';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAdsThunk } from '../redux/APIThunk';
import { SelectError, SelectLoading } from '../redux/selectors';

export const ListPage = () => {
    const [page] = useState(1);
    const [perPage, setPerPage] = useState(4);
  const dispatch = useDispatch();
  const handleLoadMore = () => {
  
    setPerPage(perPage=>perPage+4)
    dispatch(getAdsThunk(page, perPage));
};
  useEffect(() => {
    dispatch(getAdsThunk({page, perPage}));
  }, [dispatch, page,perPage]);
  const isLoading = useSelector(SelectLoading);
  const error = useSelector(SelectError);
  return (
    <div>
         {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      <List />
      <button onClick={ handleLoadMore}>Load more</button>
    </div>
  );
};
