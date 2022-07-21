import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_USER_LIST_PROCESS, GET_FILTER_PROCESS } from '../constants';

import { getUserListData, getFilterData } from '../../services/api';

import { getUserListResult, getFilterResult } from './actions';

// normalize
import { mappingData } from '../../utils';

export function* getUserList() {
  try {
    const { data } = yield call(getUserListData);
    yield put(getUserListResult(mappingData(data.results)));
  } catch (err) {
    yield put(getUserListResult([]));
  }
}

export function* getFilterList(actions) {
  try {
    const { data } = yield call(getFilterData, actions.params);
    yield put(getFilterResult(mappingData(data.results)));
  } catch (err) {
    yield put(getFilterResult([]));
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_USER_LIST_PROCESS, getUserList);
  yield takeLatest(GET_FILTER_PROCESS, getFilterList);
}
