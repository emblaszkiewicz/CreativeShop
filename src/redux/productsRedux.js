import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAllProducts = ({ products }) => products;
export const getProductById = ({ products }, id) => products.find(product => product._id === id);
export const getProductsByCategory = ({ products }, category) => products.filter(product => product.category === category);
export const getProductsBySale = ({ products }) => products.filter(product => product.sale === true);
export const getProductsByFeatured = ({ products }) => products.filter(product => product.featured === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// STATE
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

/* action creators */

// REQUEST
export const errorRequest = payload => ({ type: ERROR_REQUEST, payload });

//STATE
const loadProducts = payload => ({ type: LOAD_PRODUCTS, payload });

/* thunk creators */
export const loadProductsRequest = () => {
  return async dispatch => {
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
    } catch (e) {
      dispatch(errorRequest({ name: 'LOAD_PRODUCTS', error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return [...action.payload];
    }
    default:
      return statePart;
  }
};
