import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Album from '../Album';
import type { State } from '../../redux/store';
import { fetchPosts } from '../../redux/store';
import { ITEMS_PER_FETCH } from '../../constants';

function Main() {
  const { loading, results, searchTerm } = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const fetchMoreResults = () => {
    dispatch(fetchPosts(searchTerm, results.length, ITEMS_PER_FETCH));
  };

  return (
    <div>
      {loading && <LinearProgress />}
      <InfiniteScroll
        dataLength={results.length} // This is important field to render the next data
        next={fetchMoreResults}
        hasMore
        loader={<h4>Loading...</h4>}
      >
        <Album mediaCards={results} />
      </InfiniteScroll>
    </div>
  );
}

export default Main;
