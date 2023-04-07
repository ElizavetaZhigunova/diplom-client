import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import { adsReducer } from "./adsReducer";




const rootReducer = combineReducers({
    user: userReducer,
    ads: adsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))