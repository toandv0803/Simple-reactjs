import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";
import { REDUCER_EMPLOYEES } from "../constants";

export default combineReducers({
    [REDUCER_EMPLOYEES]: EmployeesReducer,
});
