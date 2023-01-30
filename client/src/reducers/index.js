import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import adReducer from "./adReducer";



const rootReducer = combineReducers({
    user: userReducer,
    ad: adReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))