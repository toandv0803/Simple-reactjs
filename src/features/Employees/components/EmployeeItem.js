import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { editEmployees, deleteEmployees } from "../slices/EmployeesSlice";
import ModalForm from "./ModalForm";
import ModalDelete from "./ModalDelete";

const MODAL = {
    EDIT: "EDIT",
    DELETE: "DELETE",
};

export default React.memo(EmployeeItem);

function EmployeeItem({ index, employeeId }) {
    const [isShowModal, setIsShowModal] = useState({
        [MODAL.EDIT]: false,
        [MODAL.DELETE]: false,
    });

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

    console.log("render lại item");

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
                        <Button
                            onClick={() => {
                                setIsShowModal({
                                    [MODAL.EDIT]: true,
                                    [MODAL.DELETE]: false,
                                });
                            }}
                            variant="warning"
                        >
                            Sửa
                        </Button>
                    </td>
                    <td>
                        <Button
                            onClick={() => {
                                setIsShowModal({
                                    [MODAL.EDIT]: false,
                                    [MODAL.DELETE]: true,
                                });
                            }}
                            variant="danger"
                        >
                            Xóa
                        </Button>
                    </td>
                </tr>
                <Modal
                    show={isShowModal[MODAL.EDIT]}
                    onHide={() => {
                        setIsShowModal({
                            [MODAL.EDIT]: false,
                            [MODAL.DELETE]: false,
                        });
                    }}
                >
                    <ModalForm
                        selectedItem={employeeById}
                        handleModalDelete={() => {
                            setIsShowModal({
                                [MODAL.EDIT]: false,
                                [MODAL.DELETE]: false,
                            });
                        }}
                        editEmployees={handleEditEmployee}
                    />
                </Modal>
                <Modal
                    show={isShowModal[MODAL.DELETE]}
                    onHide={() => {
                        setIsShowModal({
                            [MODAL.EDIT]: false,
                            [MODAL.DELETE]: false,
                        });
                    }}
                >
                    <ModalDelete
                        deleteEmployees={handleDeleteEmployee}
                        handleModalDelete={() => {
                            setIsShowModal({
                                [MODAL.EDIT]: false,
                                [MODAL.DELETE]: false,
                            });
                        }}
                        selectedItem={employeeById}
                    />
                </Modal>
            </>
        )
    );
}
