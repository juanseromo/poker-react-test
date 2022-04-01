import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    //middlewares.push(logger);
}

const store = createStore( rootReducer, applyMiddleware(...middlewares) )

//console.log(store.getState());

export default store;