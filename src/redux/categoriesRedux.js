import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAllCategories = ({ categories }) => categories;

/* action name creator */
const reducerName = 'categories';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// STATE
const LOAD_CATEGORIES = createActionName('LOAD_CATEGORIES');

/* action creators */

// REQUEST
export const errorRequest = payload => ({ type: ERROR_REQUEST, payload });

//STATE
const loadCategories = payload => ({ type: LOAD_CATEGORIES, payload });

/* thunk creators */
export const loadCategoriesRequest = () => {
  return async dispatch => {
    try {
      let res = await axios.get(`${API_URL}/categories`);
      dispatch(loadCategories(res.data));
    } catch (e) {
      dispatch(errorRequest({ name: 'LOAD_CATEGORIES', error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_CATEGORIES: {
      return [...action.payload];
    }
    default:
      return statePart;
  }
};
