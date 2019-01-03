import {createStore,applyMiddleware} from "redux"
import {Reducers} from "./reducer/index.js"
import {logger} from 'redux-logger'
import thunk from 'redux-thunk';

const store = createStore(Reducers,applyMiddleware(logger,thunk))

export default store
