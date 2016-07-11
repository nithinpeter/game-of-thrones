import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers"

const store = createStore(
    rootReducer
);
// applyMiddleware(thunkMiddleware, callApiMiddleware)ß

export default store;