import { put, takeEvery } from "redux-saga/effects";
import fetchAPI from "../fetchAPI/EmployeesAPI";
import {
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_FAILURE,
    GET_EMPLOYEES_SUCCESS,
    CREATE_EMPLOYEES_REQUEST,
    CREATE_EMPLOYEES_FAILURE,
    CREATE_EMPLOYEES_SUCCESS,
    EDIT_EMPLOYEES_REQUEST,
    EDIT_EMPLOYEES_FAILURE,
    EDIT_EMPLOYEES_SUCCESS,
    DELETE_EMPLOYEES_REQUEST,
    DELETE_EMPLOYEES_FAILURE,
    DELETE_EMPLOYEES_SUCCESS,
} from "../reducers/EmployeesReducer";

function* getEmployees() {
    try {
        const res = yield fetchAPI("/employees", "GET");
        yield put({
            type: GET_EMPLOYEES_SUCCESS,
            payload: res,
        });
    } catch (error) {
        yield put({
            type: GET_EMPLOYEES_FAILURE,
            payload: {
                errorMessage: error.message,
            },
        });
    }
}

function* createEmployees(data) {
    try {
        const res = yield fetchAPI("/employees", "POST", data.payload);
        yield put({
            type: CREATE_EMPLOYEES_SUCCESS,
            payload: res,
        });
    } catch (error) {
        yield put({
            type: CREATE_EMPLOYEES_FAILURE,
            payload: {
                errorMessage: error.message,
            },
        });
    }
}

function* editEmployees(data) {
    try {
        const res = yield fetchAPI(
            `/employees/${data.id}`,
            "PUT",
            data.payload
        );
        yield put({
            type: EDIT_EMPLOYEES_SUCCESS,
            payload: res,
        });
    } catch (error) {
        yield put({
            type: EDIT_EMPLOYEES_FAILURE,
            payload: {
                errorMessage: error.message,
            },
        });
    }
}

function* deleteEmployees(data) {
    try {
        const res = yield fetchAPI(`/employees/${data.id}`, "DELETE");
        yield put({
            type: DELETE_EMPLOYEES_SUCCESS,
            payload: { ...res, id: data.id },
        });
    } catch (error) {
        yield put({
            type: DELETE_EMPLOYEES_FAILURE,
            payload: {
                errorMessage: error.message,
            },
        });
    }
}

export const EmployeesSaga = [
    takeEvery(GET_EMPLOYEES_REQUEST, getEmployees),
    takeEvery(CREATE_EMPLOYEES_REQUEST, createEmployees),
    takeEvery(EDIT_EMPLOYEES_REQUEST, editEmployees),
    takeEvery(DELETE_EMPLOYEES_REQUEST, deleteEmployees),
];
