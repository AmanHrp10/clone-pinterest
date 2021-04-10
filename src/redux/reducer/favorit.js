import { ADD_FAVORIT, REMOVE_FAVORIT } from '../types';

const initialState = {
  favorite: [],
};

export const favoritReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORIT:
      return {
        ...state,
        favorite: [...state.favorite, payload],
      };
    case REMOVE_FAVORIT:
      return {
        // ...state,
        favorite: state.favorite.filter(
          (favorite) => favorite.id !== payload.id
        ),
      };
    default:
      return state;
  }
};
