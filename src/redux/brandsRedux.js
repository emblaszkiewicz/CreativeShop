// import { API_URL } from '../config';

/* selectors */
export const getAllBrands = ({ brands }) => brands;

/* action name creator */
const reducerName = 'brands';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST

// STATE

/* action creators */

// REQUEST

//STATE

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    /*
    case EXAMPLE_ACTION: {
      return [...statePart, { ...action.payload }];
    }
    */
    default:
      return statePart;
  }
};
