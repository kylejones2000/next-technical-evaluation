import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/store';
import { ITEMS_PER_FETCH } from '../../constants';
import type { QueryParams } from '../../types';

const formStyle = { mx: 'auto', my: 1, width: 1 / 2 };
const textFieldStyle = { width: 1 };

function SearchForm() {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState<string>('');

  const onTextChange = (e: any) => {
    setSearchInput(e.target.value);
    const queryParams: QueryParams = {
      searchTerm: e.target.value,
      offset: 0,
      limit: ITEMS_PER_FETCH,
    };
    dispatch(fetchPosts(queryParams));
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
