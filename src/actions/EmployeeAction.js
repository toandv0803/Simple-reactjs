import {
    GET_EMPLOYEES_REQUEST,
    CREATE_EMPLOYEES_REQUEST,
    EDIT_EMPLOYEES_REQUEST,
    DELETE_EMPLOYEES_REQUEST,
} from "../reducers/EmployeesReducer";

export function getEmployees() {
    return {
        type: GET_EMPLOYEES_REQUEST,
    };
}

export function createEmployee(payload) {
    return {
        type: CREATE_EMPLOYEES_REQUEST,
        payload,
    };
}

export function editEmployee(payload, id) {
    return {
        type: EDIT_EMPLOYEES_REQUEST,
        payload,
        id,
    };
}

export function deleteEmployee(id) {
    return {
        type: DELETE_EMPLOYEES_REQUEST,
        id,
    };
}
