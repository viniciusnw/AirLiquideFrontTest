import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCERS
import datasource from './';

const rootReducer = (state, action) => {
  if (action.type == 'LOGOUT') state = undefined;
  return combineReducers({ ...datasource.reducers })(state, action);
};

const reducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [''],
  },
  rootReducer,
);

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(promise)));
export const persistor = persistStore(store);
