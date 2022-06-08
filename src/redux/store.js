import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import toyReducer from './reducers';

const rootReducer = combineReducers({ toyReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
