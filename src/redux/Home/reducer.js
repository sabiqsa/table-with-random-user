import produce from 'immer';

import {
  GET_USER_LIST_PROCESS,
  GET_USER_LIST_RESULT,
  GET_FILTER_PROCESS,
  GET_FILTER_RESULT,
} from '../constants.js';

export const initialState = {
  dataUserList: [],
  dataFilter: [],
};

const homeReducers = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_USER_LIST_PROCESS:
        draft.dataUserList = [];
        break;
      case GET_USER_LIST_RESULT:
        draft.dataUserList = action.response;
        break;
      case GET_FILTER_PROCESS:
        draft.dataFilter = [];
        break;
      case GET_FILTER_RESULT:
        draft.dataFilter = action.response;
        break;
      default:
    }
  });

export default homeReducers;
