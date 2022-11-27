import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import combine from "./combain/combain";

export const store = createStore(combine, composeWithDevTools(applyMiddleware(thunk)));
