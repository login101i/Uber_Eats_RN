import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from './reducers/cartReducers'

const reducer = combineReducers({
	cart: cartReducer
});

let initialState = {};

const middlware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlware))
);


export default store;