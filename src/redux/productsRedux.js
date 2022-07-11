// import { API_URL } from '../config';

/* selectors */
export const getAllProducts = ({ products }) => products;
export const getProductsByCategory = ({ products }, category) => products.filter(product => product.category === category);
export const getProductsBySale = ({ products }) => products.filter(product => product.sale === true);
export const getProductsByFeatured = ({ products }) => products.filter(product => product.featured === true);

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
