import * as types from "../constants";

export function getEmployees() {
    return {
        type: types.GET_EMPLOYEES_REQUEST,
    };
}

export function createEmployee(payload) {
    return {
        type: types.CREATE_EMPLOYEES_REQUEST,
        payload,
    };
}

export function editEmployee(payload, id) {
    return {
        type: types.EDIT_EMPLOYEES_REQUEST,
        payload,
        id,
    };
}

export function deleteEmployee(id) {
    return {
        type: types.DELETE_EMPLOYEES_REQUEST,
        id,
    };
}
