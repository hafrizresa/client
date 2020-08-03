import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import items from '../reducers/items';
import cart from '../reducers/cart';

const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        items,
        cart,
    }),
    composeEnhancers(...enhancers)
);
