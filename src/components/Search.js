import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import { Button, MenuItem, Select } from '@mui/material';
import { listGender } from '../utils';

const RESET_FILTER = 'Reset Filter';

const Search = (props) => {
  const classes = useStyles();
  const {
    onRequestSearch,
    value,
    onChange,
    // onCancelSearch,
    genderSelect,
    handleSelectChange,
    handleResetFilter,
  } = props;

  return (
    <div className={classes.searchContainer}>
      <SearchBar
        data-testid="search-id"
        value={value}
        onChange={onChange}
        onRequestSearch={onRequestSearch}
        // onCancelSearch={onCancelSearch}
        style={{ width: 200, marginRight: 16, height: 40 }}
      />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={genderSelect}
        label="Gender"
        onChange={handleSelectChange}
        style={{
          width: 100,
          backgroundColor: 'white',
          marginRight: 16,
          height: 40,
        }}
      >
        {listGender.map((item) => (
          <MenuItem key={item} value={item} style={{ width: 100 }}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Button
        onClick={handleResetFilter}
        style={{ height: 40 }}
        variant="contained"
      >
        {RESET_FILTER}
      </Button>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    paddingBottom: '32px',
    display: 'flex',
  },
  boxContainer: {
    minWidth: 120,
  },
}));

export default Search;
