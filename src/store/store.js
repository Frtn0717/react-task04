import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const ADD_USER_TYPE = 'ADD_USER_TYPE';
const ADD_ALBUMS_TYPE = 'ADD_ALBUM_TYPE';
const ADD_PHOTOS_TYPE = 'ADD_PHOTO_TYPE';
const CLEAR_PHOTOS_TYPE = 'CLEAR_PHOTOS_TYPE';
const ADD_ACTIVE_ALBUM = 'ADD_ACTIVE_ALBUM';

// Action creators
export function addUser(payload) {
  return {
    type: ADD_USER_TYPE,
    payload,
  };
}

export function addAlbums(payload) {
  return {
    type: ADD_ALBUMS_TYPE,
    payload,
  };
}

export function addActiveAlbum(payload) {
  return {
    type: ADD_ACTIVE_ALBUM,
    payload,
  };
}

export function addPhotos(payload) {
  return {
    type: ADD_PHOTOS_TYPE,
    payload,
  };
}

export function clearPhotos(payload) {
  return {
    type: CLEAR_PHOTOS_TYPE,
    payload,
  };
}

// Init state
const initialState = {
  user: [],
  albums: [],
  activeAlbum: null,
  photos: [],
};

// Reducers
function user(state = initialState.user, action) {
  switch (action.type) {
    case ADD_USER_TYPE:
      return [...state, action.payload];
    default:
      return state;
  }
}

function albums(state = initialState.albums, action) {
  switch (action.type) {
    case ADD_ALBUMS_TYPE:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

function activeAlbum(state = initialState.activeAlbum, action) {
  switch (action.type) {
    case ADD_ACTIVE_ALBUM:
      return action.payload;
    default:
      return state;
  }
}

function photos(state = initialState.photos, action) {
  switch (action.type) {
    case ADD_PHOTOS_TYPE:
      return [...state, ...action.payload];
    case CLEAR_PHOTOS_TYPE:
      return [];
    default:
      return state;
  }
}

export const allReducers = combineReducers({
  user,
  albums,
  activeAlbum,
  photos,
});

export const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
