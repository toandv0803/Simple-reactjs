import * as types from "../constants";

const DEFAULT_STATE = {
    employees: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_EMPLOYEES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                employees: action.payload,
            };
        case types.GET_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            };

        case types.CREATE_EMPLOYEES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.CREATE_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                employees: [...state.employees, action.payload],
            };
        case types.CREATE_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            };

        case types.EDIT_EMPLOYEES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.EDIT_EMPLOYEES_SUCCESS:
            const index = state.employees.findIndex(
                (element) => element.id === action.payload.id
            );
            let employees = state.employees;
            employees.splice(index, 1, action.payload);
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                employees: employees,
            };
        case types.EDIT_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            };

        case types.DELETE_EMPLOYEES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.DELETE_EMPLOYEES_SUCCESS:
            const indexDelete = state.employees.findIndex(
                (element) => element.id === action.payload.id
            );
            let employeesDeleted = state.employees;
            employeesDeleted.splice(indexDelete, 1);
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                employees: employeesDeleted,
            };
        case types.DELETE_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            };

        default:
            return state;
    }
};
