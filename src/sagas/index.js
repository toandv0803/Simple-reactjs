import { all } from "redux-saga/effects";
import { EmployeesSaga } from "./GetEmployeesSaga";

function* rootSaga() {
    yield all([...EmployeesSaga]);
}

export default rootSaga;
