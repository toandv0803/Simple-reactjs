import fetchAPI from "../../../fetchAPI/EmployeesAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getEmployees = createAsyncThunk(
    "employees/getEmployees",
    async () => {
        const employees = await fetchAPI("/employees", "GET");
        return employees;
    }
);

export const createEmployees = createAsyncThunk(
    "employees/createEmployees",
    async (params) => {
        const employees = await fetchAPI(`/employees`, "POST", params);
        return employees;
    }
);

export const editEmployees = createAsyncThunk(
    "employees/editEmployees",
    async (params) => {
        const employees = await fetchAPI(
            `/employees/${params.id}`,
            "PUT",
            params.data
        );
        return employees;
    }
);

export const deleteEmployees = createAsyncThunk(
    "employees/deleteEmployees",
    async (id) => {
        const employees = await fetchAPI(`/employees/${id}`, "DELETE");
        return { ...employees, id: id };
    }
);

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        employeeIds: [],
        employeeById: {},
        loading: false,
        error: "",
    },
    extraReducers: {
        // case get
        [getEmployees.pending]: (state) => {
            state.loading = true;
        },
        [getEmployees.fulfilled]: (state, action) => {
            const employeeById = {};
            action.payload.forEach((item) => {
                employeeById[item.id] = item;
            });
            state.loading = false;
            state.employeeById = employeeById;
            state.employeeIds = action.payload.map((item) => item.id);
        },
        [getEmployees.pending]: (state, action) => {
            state.loading = true;
            state.error = action.error;
        },

        // case create
        [createEmployees.pending]: (state) => {
            state.loading = true;
        },
        [createEmployees.fulfilled]: (state, action) => {
            state.loading = false;
            state.employeeById[action.payload.id] = action.payload;
            state.employeeIds = [...state.employeeIds, action.payload.id];
        },
        [createEmployees.pending]: (state, action) => {
            state.loading = true;
            state.error = action.error;
        },

        // case edit
        [editEmployees.pending]: (state) => {
            state.loading = true;
        },
        [editEmployees.fulfilled]: (state, action) => {
            state.loading = false;
            state.employeeById[action.payload.id] = action.payload;
        },
        [editEmployees.pending]: (state, action) => {
            state.loading = true;
            state.error = action.error;
        },

        // case delete
        [deleteEmployees.pending]: (state) => {
            state.loading = true;
        },
        [deleteEmployees.fulfilled]: (state, action) => {
            const id = action.payload.id;
            const { [id]: _, ...employeeByIdDeleted } = state.employeeById;

            state.loading = false;
            state.employeeById = employeeByIdDeleted;
            state.employeeIds.splice(
                state.employeeIds.indexOf(action.payload.id),
                1
            );
        },
        [deleteEmployees.pending]: (state, action) => {
            state.loading = true;
            state.error = action.error;
        },
    },
});

const { reducer: employeesReducer } = employeesSlice;

export default employeesReducer;
