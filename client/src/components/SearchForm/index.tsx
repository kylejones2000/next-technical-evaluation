import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/store';
import { ITEMS_PER_FETCH } from '../../constants';
import type { QueryParams } from '../../types';

const debounce = require('lodash.debounce');

const formStyle = { mx: 'auto', my: 1, width: 1 / 2 };
const textFieldStyle = { width: 1 };

function SearchForm() {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState<string>('');

  // This should be memoised
  const debouncedSearch = debounce(async (value) => {
    const queryParams: QueryParams = {
      searchTerm: value,
      offset: 0,
      limit: ITEMS_PER_FETCH,
    };
    dispatch(fetchPosts(queryParams));
  }, 300);

  const onTextChange = (e: any) => {
    setSearchInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <Paper sx={formStyle}>
      <TextField
        sx={textFieldStyle}
        onChange={onTextChange}
        value={searchInput}
        label="Type search terms to search Apple"
      />
    </Paper>
  );
}

export default SearchForm;
