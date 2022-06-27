import { put, takeLatest, call } from 'redux-saga/effects';

import {
  GET_TRACK_LIST_PROCESS,
  GET_ARTIST_LIST_PROCESS,
  GET_SEARCH_TRACK_LIST_PROCESS,
  GET_SEARCH_ARTIST_LIST_PROCESS,
} from '../constants';

import {
  getTrackListData,
  getSearchTrack,
  getArtistListData,
  getSearchArtist,
} from '../../services/api';

import {
  getTrackListResult,
  getArtistListResult,
  getSearchTrackListResult,
  getSearchArtistListResult,
} from './actions';

export function* getTrackList() {
  try {
    const { data } = yield call(getTrackListData);
    yield put(getTrackListResult(data.tracks.track));
  } catch (err) {
    yield put(getTrackListResult([]));
  }
}

export function* getArtistList() {
  try {
    const { data } = yield call(getArtistListData);
    yield put(getArtistListResult(data.artists.artist));
  } catch (err) {
    yield put(getArtistListResult([]));
  }
}

export function* getSearchTrackList(actions) {
  try {
    const { data } = yield call(getSearchTrack, actions.params);
    yield put(getSearchTrackListResult(data.results.trackmatches.track));
  } catch (err) {
    yield put(getSearchTrackListResult([]));
  }
}

export function* getSearchArtistList(actions) {
  try {
    const { data } = yield call(getSearchArtist, actions.params);
    yield put(getSearchArtistListResult(data.results.artistmatches.artist));
  } catch (err) {
    yield put(getSearchArtistListResult([]));
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_TRACK_LIST_PROCESS, getTrackList);
  yield takeLatest(GET_ARTIST_LIST_PROCESS, getArtistList);
  yield takeLatest(GET_SEARCH_TRACK_LIST_PROCESS, getSearchTrackList);
  yield takeLatest(GET_SEARCH_ARTIST_LIST_PROCESS, getSearchArtistList);
}
