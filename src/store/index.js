import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers"
import env from "../helpers/env";

const store = createStore(
    rootReducer,
    window.devToolsExtension && window.devToolsExtension()
);
// applyMiddleware(thunkMiddleware, callApiMiddleware)ß

export default store;