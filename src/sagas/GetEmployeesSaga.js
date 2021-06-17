import { put, takeEvery } from "redux-saga/effects";
import {
    getEmployeesAPI,
    createEmployeesAPI,
    editEmployeesAPI,
    deleteEmployeesAPI,
} from "../fetchAPI/EmployeesAPI";
import * as types from "../constants";

function* getEmployees() {
    try {
        const res = yield getEmployeesAPI();
        yield put({
            type: types.GET_EMPLOYEES_SUCCESS,
            payload: res,
        });
    } catch (error) {
        yield put({
            type: types.GET_EMPLOYEES_FAILURE,
            payload: {
                errorMessage: error.message,
            },
        });
    }
}

function* createEmployees(data) {
    try {
        const res = yield createEmployeesAPI(data.payload);
        yield put({
            type: types.CREATE_EMPLOYEES_SUCCESS,
            payload: res,
        });
    } catch (error) {
        yield put({
            type: types.CREATE_EMPLOYEES_FAILURE,
            payload: {
                errorMessage: error.message,
            },
        });
    }
}

function* editEmployees(data) {
    try {
        const res = yield editEmployeesAPI(data.payload, data.id);
        yield put({
            type: types.EDIT_EMPLOYEES_SUCCESS,
            payload: res,
        });
    } catch (error) {
        yield put({
            type: types.EDIT_EMPLOYEES_FAILURE,
            payload: {
                errorMessage: error.message,
            },
        });
    }
}

function* deleteEmployees(data) {
    try {
        const res = yield deleteEmployeesAPI(data.id);
        yield put({
            type: types.DELETE_EMPLOYEES_SUCCESS,
            payload: { ...res, id: data.id },
        });
    } catch (error) {
        yield put({
            type: types.DELETE_EMPLOYEES_FAILURE,
            payload: {
                errorMessage: error.message,
            },
        });
    }
}

export const EmployeesSaga = [
    takeEvery(types.GET_EMPLOYEES_REQUEST, getEmployees),
    takeEvery(types.CREATE_EMPLOYEES_REQUEST, createEmployees),
    takeEvery(types.EDIT_EMPLOYEES_REQUEST, editEmployees),
    takeEvery(types.DELETE_EMPLOYEES_REQUEST, deleteEmployees),
];
