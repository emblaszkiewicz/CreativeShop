// import { API_URL } from '../config';

/* selectors */
export const getAllFavorites = ({ favorites }) => favorites;

/* action name creator */
const reducerName = 'favorites';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST

// STATE
const UPDATE_FAVORITES = createActionName('UPDATE_FAVORITES');

/* action creators */
export const updateFavorites = payload => ({ type: UPDATE_FAVORITES, payload });

// REQUEST

//STATE
export const addToFavorites = productParam => {
  return dispatch => {
    const favorites = [];
    const items = JSON.parse(localStorage.getItem('favorites'));
    if (items !== null) {
      items.map(item => favorites.push(item));
    }
    favorites.push(productParam);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    dispatch(updateFavorites((favorites)));
  };
};

export const removeFromFavorites = id => {
  return dispatch => {
    const items = JSON.parse(localStorage.getItem('favorites'));
    items.splice(
      items.findIndex(item => item.id === id),
      1
    );
    localStorage.setItem('favorites', JSON.stringify(items));
    dispatch(updateFavorites((items)));
  };
};

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case UPDATE_FAVORITES: {
      return [...action.payload];
    }
    default:
      return statePart;
  }
};
