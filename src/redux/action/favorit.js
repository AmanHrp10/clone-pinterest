import { ADD_FAVORIT, REMOVE_FAVORIT } from '../types';

export const addFavorite = (data) => (dispatch) => {
  dispatch({
    type: ADD_FAVORIT,
    payload: data,
  });
};

export const removeFavorite = (data) => (dispatch) => {
  dispatch({
    type: REMOVE_FAVORIT,
    payload: data,
  });
};
