import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAllEmployees = ({ employees }) => employees;

/* action name creator */
const reducerName = 'employees';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// STATE
const LOAD_EMPLOYEES = createActionName('LOAD_EMPLOYEES');

/* action creators */

// REQUEST
export const errorRequest = payload => ({ type: ERROR_REQUEST, payload });

//STATE
const loadEmployees = payload => ({ type: LOAD_EMPLOYEES, payload });

/* thunk creators */
export const loadEmployeesRequest = () => {
  return async dispatch => {
    try {
      let res = await axios.get(`${API_URL}/employees`);
      dispatch(loadEmployees(res.data));
    } catch (e) {
      dispatch(errorRequest({ name: 'LOAD_EMPLOYEES', error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_EMPLOYEES: {
      return [...action.payload];
    }
    default:
      return statePart;
  }
};
