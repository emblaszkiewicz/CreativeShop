import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';

import { reducer as productsReducer } from './productsRedux';
import { reducer as employeesReducer } from './employeesRedux';
import { reducer as categoriesReducer } from './categoriesRedux';
import { reducer as bannersReducer } from './bannersRedux';
import { reducer as opinionsReducer } from './opinionsRedux';
import { reducer as cartReducer } from './cartRedux';
import { reducer as favoritesReducer } from './favoritesRedux';
import { reducer as brandsReducer } from './brandsRedux';
import { reducer as searchReducer } from './searchRedux';
import { reducer as orderReducer } from './ordersRedux';

const reducers = {
  products: productsReducer,
  employees: employeesReducer,
  categories: categoriesReducer,
  banners: bannersReducer,
  opinions: opinionsReducer,
  brands: brandsReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
  orders: orderReducer,
  searchString: searchReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
