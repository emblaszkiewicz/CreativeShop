import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAllOpinions = ({ opinions }) => opinions;

/* action name creator */
const reducerName = 'opinions';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// STATE
const LOAD_OPINIONS = createActionName('LOAD_OPINIONS');

/* action creators */

// REQUEST
export const errorRequest = payload => ({ type: ERROR_REQUEST, payload });

//STATE
const loadOpinions = payload => ({ type: LOAD_OPINIONS, payload });

/* thunk creators */
export const loadOpinionsRequest = () => {
  return async dispatch => {
    try {
      let res = await axios.get(`${API_URL}/opinions`);
      dispatch(loadOpinions(res.data));
    } catch (e) {
      dispatch(errorRequest({ name: 'LOAD_OPINIONS', error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_OPINIONS: {
      return [...action.payload];
    }
    default:
      return statePart;
  }
};
