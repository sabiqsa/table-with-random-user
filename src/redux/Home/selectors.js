import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeReducer = (state) => state.homeReducers || initialState;

const makeSelectTrackList = () =>
  createSelector(selectHomeReducer, (homeState) => homeState.dataTrackList);

const makeSelectArtistList = () =>
  createSelector(selectHomeReducer, (homeState) => homeState.dataArtistList);

const makeSelectSearchTrackList = () =>
  createSelector(
    selectHomeReducer,
    (homeState) => homeState.dataSearchTrackList,
  );

const makeSelectSearchArtistList = () =>
  createSelector(
    selectHomeReducer,
    (homeState) => homeState.dataSearchArtistList,
  );

export {
  makeSelectTrackList,
  makeSelectArtistList,
  makeSelectSearchTrackList,
  makeSelectSearchArtistList,
};
