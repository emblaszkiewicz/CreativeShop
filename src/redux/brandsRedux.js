import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAllBrands = ({ brands }) => brands;

/* action name creator */
const reducerName = 'brands';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// STATE
const LOAD_BRANDS = createActionName('LOAD_BRANDS');

/* action creators */

// REQUEST
export const errorRequest = payload => ({ type: ERROR_REQUEST, payload });

//STATE
const fetchBrands = payload => ({ type: LOAD_BRANDS,  payload});

/* thunk creators */
export const loadBrandsRequest = () => {
  return async dispatch => {
    try {
      let res = await axios.get(`${API_URL}/brands`);
      dispatch(fetchBrands(res.data));
    } catch (e) {
      dispatch(errorRequest({ name: 'LOAD_BRANDS', error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_BRANDS: {
      return [...action.payload];
    }
    default:
      return statePart;
  }
};
