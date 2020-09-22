import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  SHOW_FAVOURITES,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showfavourites: false,
};

export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SHOW_FAVOURITES:
      return {
        ...state,
        showfavourites: action.val,
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
};
export function search(state = initialSearchState, action) {
  return state;
}
const initialRootState = {
  movies: initialMoviesState,
  search: initialSearchState,
};
export default function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action),
  };
}
