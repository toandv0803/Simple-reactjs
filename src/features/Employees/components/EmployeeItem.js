import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { editEmployees, deleteEmployees } from "../slices/EmployeesSlice";
import ModalForm from "./ModalForm";
import ModalDelete from "./ModalDelete";

export default React.memo(EmployeeItem);

function EmployeeItem({ index, employeeId }) {
    const employeeById = useSelector(
        (state) => state.employeesReducer.employeeById[employeeId]
    );

    const dispatch = useDispatch();

    const handleEditEmployee = (data) => {
        dispatch(editEmployees(data));
    };

    const handleDeleteEmployee = (id) => {
        dispatch(deleteEmployees(id));
    };

    return (
        employeeById &&
        employeeId && (
            <>
                <tr key={employeeById.id}>
                    <td>{index + 1}</td>
                    <td>{employeeById.fullName}</td>
                    <td>{employeeById.age}</td>
                    <td>{employeeById.department}</td>
                    <td>
                        <ModalForm
                            selectedItem={employeeById}
                            editEmployees={handleEditEmployee}
                        />
                    </td>
                    <td>
                        <ModalDelete
                            deleteEmployees={handleDeleteEmployee}
                            selectedItem={employeeById}
                        />
                    </td>
                </tr>
            </>
        )
    );
}
