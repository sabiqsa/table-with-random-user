import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeReducer = (state) => state.homeReducers || initialState;

const makeSelectUserList = () =>
  createSelector(selectHomeReducer, (homeState) => homeState.dataUserList);

const makeSelectFilterList = () =>
  createSelector(selectHomeReducer, (homeState) => homeState.dataFilter);

export { makeSelectUserList, makeSelectFilterList };
