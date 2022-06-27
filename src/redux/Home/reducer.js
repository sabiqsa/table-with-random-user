import produce from 'immer';

import {
  GET_TRACK_LIST_PROCESS,
  GET_TRACK_LIST_RESULT,
  GET_ARTIST_LIST_PROCESS,
  GET_ARTIST_LIST_RESULT,
  GET_SEARCH_TRACK_LIST_PROCESS,
  GET_SEARCH_TRACK_LIST_RESULT,
  GET_SEARCH_ARTIST_LIST_PROCESS,
  GET_SEARCH_ARTIST_LIST_RESULT,
} from '../constants.js';

export const initialState = {
  dataTrackList: [],
  dataArtistList: [],
  dataSearchTrackList: [],
  dataSearchArtistList: [],
};

const homeReducers = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_TRACK_LIST_PROCESS:
        draft.dataTrackList = [];
        break;
      case GET_TRACK_LIST_RESULT:
        draft.dataTrackList = action.response;
        break;
      case GET_ARTIST_LIST_PROCESS:
        draft.dataArtistList = [];
        break;
      case GET_ARTIST_LIST_RESULT:
        draft.dataArtistList = action.response;
        break;
      case GET_SEARCH_TRACK_LIST_PROCESS:
        draft.dataSearchTrackList = [];
        break;
      case GET_SEARCH_TRACK_LIST_RESULT:
        draft.dataSearchTrackList = action.response;
        break;
      case GET_SEARCH_ARTIST_LIST_PROCESS:
        draft.dataSearchArtistList = [];
        break;
      case GET_SEARCH_ARTIST_LIST_RESULT:
        draft.dataSearchArtistList = action.response;
        break;
      default:
    }
  });

export default homeReducers;
