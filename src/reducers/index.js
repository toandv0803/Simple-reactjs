import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";
import { REDUCER_NAME } from "../reducers/EmployeesReducer";

export default combineReducers({
    [REDUCER_NAME]: EmployeesReducer,
});
