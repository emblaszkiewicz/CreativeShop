/* selectors */
export const getSearchString = (searchString) => searchString;

/* action name creator */
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

// REQUEST

// STATE
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

/* action creators */

// REQUEST

//STATE
export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING, payload });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};
