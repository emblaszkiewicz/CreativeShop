// import { API_URL } from '../config';

/* selectors */
export const getAllCart = ({ cart }) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST

// STATE
const UPDATE_CART = createActionName('UPDATE_CART');

/* action creators */
export const updateCart = payload => ({ type: UPDATE_CART, payload });

// REQUEST

//STATE
export const addToCart = productParam => {
  return dispatch => {
    const cart = [];
    const items = JSON.parse(localStorage.getItem('cart'));
    if (items !== null) {
      items.map(item => cart.push(item));
    }
    cart.push(productParam);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(updateCart((cart)));
  };
};

export const removeFromCart = id => {
  return dispatch => {
    const items = JSON.parse(localStorage.getItem('cart'));
    items.splice(
      items.findIndex(item => item.id === id),
      1
    );
    localStorage.setItem('cart', JSON.stringify(items));
    dispatch(updateCart((items)));
  };
};

export const editCartProduct = (id, qty) => {
  return dispatch => {
    const items = JSON.parse(localStorage.getItem('cart'));
    items.map(item => item.id === id ? (item.amount = qty, item.totalPrice = item.singlePrice * qty) : item);
    localStorage.setItem('cart', JSON.stringify(items));
    dispatch(updateCart((items)));
  };
};

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case UPDATE_CART: {
      return [...action.payload];
    }
    default:
      return statePart;
  }
};
