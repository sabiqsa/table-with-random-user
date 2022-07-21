import axios from 'axios';

const API_GET_USERS = `https://randomuser.me/api/?results=500`;

export const getUserListData = async () => {
  try {
    const url = API_GET_USERS;
    return await axios.get(url);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getFilterData = async (params) => {
  const config = {
    params,
  };
  try {
    return await axios.get(API_GET_USERS, config);
  } catch (err) {
    throw new Error(err.message);
  }
};
