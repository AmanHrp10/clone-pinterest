import { combineReducers } from 'redux';

import { favoritReducer } from './favorit';

export default combineReducers({ favorite: favoritReducer });
