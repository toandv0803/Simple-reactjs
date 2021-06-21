import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";

import { REDUCER_EMPLOYEES } from "./../constants";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEditEmployees";
import * as actions from "../actions/EmployeeAction";

const mapStateToProps = (state, { employeeId }) => ({
    employee: state[REDUCER_EMPLOYEES].employeeById[employeeId],
});

const mapDispatchToProps = (dispatch) => {
    return {
        editEmployees: (data, id) => {
            dispatch(actions.editEmployee(data, id));
        },
        deleteEmployees: (id) => {
            dispatch(actions.deleteEmployee(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeItem);

const MODAL = {
    EDIT: "EDIT",
    DELETE: "DELETE",
};

function EmployeeItem({
    employee,
    index,
    deleteEmployees,
    employeeId,
    editEmployees,
}) {
    const [isShowModal, setIsShowModal] = useState({
        [MODAL.EDIT]: false,
        [MODAL.DELETE]: false,
    });

    console.log("render lại item");

    return (
        employee &&
        employeeId && (
            <>
                <tr key={employee.id}>
                    <td>{index + 1}</td>
                    <td>{employee.fullName}</td>
                    <td>{employee.age}</td>
                    <td>{employee.department}</td>
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
                    <ModalEdit
                        selectedItem={employee}
                        handleModalDelete={() => {
                            setIsShowModal({
                                [MODAL.EDIT]: false,
                                [MODAL.DELETE]: false,
                            });
                        }}
                        editEmployees={editEmployees}
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
                        deleteEmployees={deleteEmployees}
                        handleModalDelete={() => {
                            setIsShowModal({
                                [MODAL.EDIT]: false,
                                [MODAL.DELETE]: false,
                            });
                        }}
                        selectedItem={employee}
                    />
                </Modal>
            </>
        )
    );
}
