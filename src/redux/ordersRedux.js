import axios from 'axios';
import { API_URL } from '../config';

/* selectors */

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// STATE
const ADD_ORDER = createActionName('ADD_ORDER');

/* action creators */

// REQUEST
export const errorRequest = payload => ({ type: ERROR_REQUEST, payload });

//STATE
export const addOrder = payload => ({ payload, type: ADD_ORDER });

/* thunk creators */
export const addOrderRequest = newOrder => {
  axios.post(`${API_URL}/orders`, newOrder);
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case 'LOAD_BANNERS': {
      return [...action.payload];
    }
    default:
      return statePart;
  }
};
