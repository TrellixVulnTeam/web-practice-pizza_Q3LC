import { applyMiddleware, combineReducers, createStore, compose  } from "redux";
import pizzas from "./reducers/pizzas";
import filters from './reducers/filters'
import thunk from "redux-thunk";

const reducers = combineReducers({
    pizzas,
    filters
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

export default store