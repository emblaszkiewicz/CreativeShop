// import { API_URL } from '../config';

/* selectors */
export const getAllProducts = ({ products }) => products;

/* action name creator */
const reducerName = 'products';
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
