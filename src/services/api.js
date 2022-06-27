import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;

const API_GET_TRACK_LIST = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`;
const API_GET_ARTIST_LIST = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`;
const getSearchTrackApi = (params) =>
  `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${params}&api_key=${apiKey}&format=json`;
const getSearchArtistApi = (params) =>
  `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${params}&api_key=${apiKey}&format=json`;

export const getTrackListData = async () => {
  try {
    const url = API_GET_TRACK_LIST;
    return await axios.get(url);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getArtistListData = async () => {
  try {
    const url = API_GET_ARTIST_LIST;
    return await axios.get(url);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getSearchTrack = async (params) => {
  try {
    return await axios.get(getSearchTrackApi(params));
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getSearchArtist = async (params) => {
  try {
    return await axios.get(getSearchArtistApi(params));
  } catch (err) {
    throw new Error(err.message);
  }
};
