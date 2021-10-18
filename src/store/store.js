import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const SHOW_USER_TYPE = 'SHOW_USER_TYPE';
const ADD_ALBUMS_TYPE = 'ADD_ALBUM_TYPE';
const ADD_PHOTOS_TYPE = 'ADD_PHOTO_TYPE';

// Action creators

export function addAlbums(payload) {
  return {
    type: ADD_ALBUMS_TYPE,
    payload,
  };
}

export function addPhotos(payload) {
  return {
    type: ADD_PHOTOS_TYPE,
    payload,
  };
}

// Hardcoded user
const awesomeUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

// Init state
const initialState = {
  user: [awesomeUser],
  albums: [],
  photos: [],
};

// Reducers
function user(state = initialState.user, action) {
  switch (action.type) {
    case SHOW_USER_TYPE:
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

function photos(state = initialState.photos, action) {
  switch (action.type) {
    case ADD_PHOTOS_TYPE:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export const allReducers = combineReducers({
  user,
  albums,
  photos,
});

export const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
