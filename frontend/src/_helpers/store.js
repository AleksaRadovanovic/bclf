
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../_reducers';
const initialStore = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialStore, applyMiddleware(...middleware));

export default store;