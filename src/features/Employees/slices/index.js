import { combineReducers } from "redux";

import employeesReducer from "./EmployeesSlice";

const rootReducer = combineReducers({
    employeesReducer,
});

export default rootReducer;
