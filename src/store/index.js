import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers"
import env from "../helpers/env";

const store = createStore(
    rootReducer,
    env.isDev() ? window.devToolsExtension && window.devToolsExtension() : null
);
// applyMiddleware(thunkMiddleware, callApiMiddleware)ß

export default store;