import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import TabsContent from '../components/TabsContent';
import Search from '../components/Search';

import {
  getArtistListProcess,
  getSearchArtistListProcess,
  getSearchTrackListProcess,
  getTrackListProcess,
} from '../redux/Home/actions';
import {
  makeSelectArtistList,
  makeSelectSearchArtistList,
  makeSelectSearchTrackList,
  makeSelectTrackList,
} from '../redux/Home/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const dataTrackList = useSelector(makeSelectTrackList());
  const dataArtistList = useSelector(makeSelectArtistList());
  const dataSearchTrackList = useSelector(makeSelectSearchTrackList());
  const dataSearchArtistList = useSelector(makeSelectSearchArtistList());

  //initial state
  const [value, setValue] = useState('');
  const [tabActive, setTabActive] = useState(0);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    dispatch(getTrackListProcess());
    dispatch(getArtistListProcess());
  }, []);

  const handleOnChangeSearch = (val) => {
    setValue(val);
  };

  const handleOnSearch = () => {
    setIsSearch(true);
    dispatch(getSearchTrackListProcess(value));
    dispatch(getSearchArtistListProcess(value));
  };

  const handleOnCancelSearch = () => {
    setIsSearch(false);
  };

  //handle tab active
  const handleOnActiveTab = (e, newValue) => {
    setValue('');
    setIsSearch(false);
    setTabActive(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Search
        value={value}
        onChange={handleOnChangeSearch}
        onRequestSearch={handleOnSearch}
        onCancelSearch={handleOnCancelSearch}
      />
      <TabsContent
        activeTab={tabActive}
        dataTopTrack={isSearch ? dataSearchTrackList : dataTrackList}
        dataTopArtist={isSearch ? dataSearchArtistList : dataArtistList}
        onChange={handleOnActiveTab}
      />
    </Container>
  );
};

export default Home;
