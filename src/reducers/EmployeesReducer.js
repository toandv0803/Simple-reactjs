import * as types from "../constants";

const DEFAULT_STATE = {
    employeeIds: [],
    employeeById: {},
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
            const employeeById = {};
            action.payload.forEach((item) => {
                employeeById[item.id] = item;
            });
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                employeeIds: action.payload.map((item) => item.id),
                employeeById,
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
            const newEmployeesCreate = { ...state.employeeById };
            const newEmployeesIdCreate = [
                ...state.employeeIds,
                action.payload.id,
            ];

            newEmployeesCreate[action.payload.id] = action.payload;
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                employeeById: newEmployeesCreate,
                employeeIds: newEmployeesIdCreate,
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
            const newEmployeesEdit = { ...state.employeeById };
            const idEdit = action.payload.id;
            newEmployeesEdit[idEdit] = action.payload;

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                employeeById: newEmployeesEdit,
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
            const id = action.payload.id;
            const { [id]: _, ...employeeByIdDeleted } = state.employeeById;
            const employeeIdsDeleted = [...state.employeeIds];
            employeeIdsDeleted.splice(
                employeeIdsDeleted.indexOf(action.payload.id),
                1
            );

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                employeeById: employeeByIdDeleted,
                employeeIds: employeeIdsDeleted,
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
