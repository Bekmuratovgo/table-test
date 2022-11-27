import {combineReducers} from "redux";
import {tableReducer} from "../reducers/tableReducer";

const combine = combineReducers({
    table: tableReducer,
})

export default combine;