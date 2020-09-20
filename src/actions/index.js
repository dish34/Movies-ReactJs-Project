// {
//     type:'ADD_MOVIES',
//     movies: [],
// }

// action Types
export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";

//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavourites(movie) {
  return {
    type: ADD_FAVOURITES,
    movie,
  };
}
export function removeFavourites(movie) {
  return {
    type: REMOVE_FAVOURITES,
    movie,
  };
}

export function showFavourites(val) {
  return {
    type: SHOW_FAVOURITES,
    val,
  };
}
