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
        case GET_EMPLOYEES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case GET_EMPLOYEES_SUCCESS:
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
        case GET_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            };

        case CREATE_EMPLOYEES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case CREATE_EMPLOYEES_SUCCESS:
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
        case CREATE_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            };

        case EDIT_EMPLOYEES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case EDIT_EMPLOYEES_SUCCESS:
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
        case EDIT_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage,
            };

        case DELETE_EMPLOYEES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case DELETE_EMPLOYEES_SUCCESS:
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
        case DELETE_EMPLOYEES_FAILURE:
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

export const REDUCER_NAME = "EMPLOYEES_REDUCER";

export const GET_EMPLOYEES_REQUEST = `${REDUCER_NAME}GET_EMPLOYEES_REQUEST`;
export const GET_EMPLOYEES_SUCCESS = `${REDUCER_NAME}GET_EMPLOYEES_SUCCESS`;
export const GET_EMPLOYEES_FAILURE = `${REDUCER_NAME}GET_EMPLOYEES_FAILURE`;

export const CREATE_EMPLOYEES_REQUEST = `${REDUCER_NAME}CREATE_EMPLOYEES_REQUEST`;
export const CREATE_EMPLOYEES_SUCCESS = `${REDUCER_NAME}CREATE_EMPLOYEES_SUCCESS`;
export const CREATE_EMPLOYEES_FAILURE = `${REDUCER_NAME}CREATE_EMPLOYEES_FAILURE`;

export const EDIT_EMPLOYEES_REQUEST = `${REDUCER_NAME}EDIT_EMPLOYEES_REQUEST`;
export const EDIT_EMPLOYEES_SUCCESS = `${REDUCER_NAME}EDIT_EMPLOYEES_SUCCESS`;
export const EDIT_EMPLOYEES_FAILURE = `${REDUCER_NAME}EDIT_EMPLOYEES_FAILURE`;

export const DELETE_EMPLOYEES_REQUEST = `${REDUCER_NAME}DELETE_EMPLOYEES_REQUEST`;
export const DELETE_EMPLOYEES_SUCCESS = `${REDUCER_NAME}DELETE_EMPLOYEES_SUCCESS`;
export const DELETE_EMPLOYEES_FAILURE = `${REDUCER_NAME}DELETE_EMPLOYEES_FAILURE`;
