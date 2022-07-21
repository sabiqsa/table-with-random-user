import {
  GET_USER_LIST_PROCESS,
  GET_USER_LIST_RESULT,
  GET_FILTER_PROCESS,
  GET_FILTER_RESULT,
} from '../constants.js';

export function getUserListProcess() {
  return {
    type: GET_USER_LIST_PROCESS,
  };
}

export function getUserListResult(response) {
  return {
    type: GET_USER_LIST_RESULT,
    response,
  };
}

export function getFilterProcess(params) {
  return {
    type: GET_FILTER_PROCESS,
    params,
  };
}

export function getFilterResult(response) {
  return {
    type: GET_FILTER_RESULT,
    response,
  };
}
