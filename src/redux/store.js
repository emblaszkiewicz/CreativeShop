import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';

import { reducer as productsReducer } from './productsRedux';
import { reducer as employeesReducer } from './employeesRedux';
import { reducer as categoriesReducer } from './categoriesRedux';
import { reducer as bannersReducer } from './bannersRedux';
import { reducer as opinionsReducer } from './opinionsRedux';

const reducers = {
  products: productsReducer,
  employees: employeesReducer,
  categories: categoriesReducer,
  banners: bannersReducer,
  opinions: opinionsReducer,
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
