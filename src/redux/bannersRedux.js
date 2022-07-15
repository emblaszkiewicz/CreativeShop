import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAllBanners = ({ banners }) => banners;

/* action name creator */
const reducerName = 'banners';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// STATE
const LOAD_BANNERS = createActionName('LOAD_BANNERS');

/* action creators */

// REQUEST
export const errorRequest = payload => ({ type: ERROR_REQUEST, payload });

//STATE
const loadBanners = payload => ({ type: LOAD_BANNERS, payload });

/* thunk creators */
export const loadBannersRequest = () => {
  return async dispatch => {
    try {
      let res = await axios.get(`${API_URL}/banners`);
      dispatch(loadBanners(res.data));
    } catch (e) {
      dispatch(errorRequest({ name: 'LOAD_BANNERS', error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_BANNERS: {
      return [...action.payload];
    }
    default:
      return statePart;
  }
};
