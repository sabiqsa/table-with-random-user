import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

const Search = (props) => {
  const classes = useStyles();
  const { onRequestSearch, value, onChange, onCancelSearch } = props;
  return (
    <Container>
      <div className={classes.searchContainer}>
        <SearchBar
          data-testid="search-id"
          value={value}
          onChange={onChange}
          onRequestSearch={onRequestSearch}
          onCancelSearch={onCancelSearch}
        />
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    padding: '48px',
  },
}));

export default Search;
