import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Table } from "react-bootstrap";

import { getEmployees, createEmployees } from "../slices/EmployeesSlice";
import EmployeeItem from "./EmployeeItem";
import ModalForm from "./ModalForm";

export default function TableEmployees() {
    const dispatch = useDispatch();
    const employeeIds = useSelector(
        (state) => state.employeesReducer.employeeIds
    );
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        dispatch(getEmployees());
    }, []);

    const handleCreateEmployees = (data) => {
        dispatch(createEmployees(data));
    };

    const renderListEmployee = () => {
        return (
            employeeIds.length > 0 &&
            employeeIds.map((employeeId, index) => {
                return (
                    <EmployeeItem
                        key={employeeId}
                        employeeId={employeeId}
                        index={index}
                    />
                );
            })
        );
    };

    console.log("render lại table");

    return (
        <div>
            <Button variant="success" onClick={() => setIsShowModal(true)}>
                + Thêm mới
            </Button>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và Tên</th>
                        <th>Tuổi</th>
                        <th>Phòng ban</th>
                    </tr>
                </thead>
                <tbody>{renderListEmployee()}</tbody>
            </Table>
            <Modal
                show={isShowModal}
                onHide={() => {
                    setIsShowModal(false);
                }}
            >
                <ModalForm
                    handleModalDelete={() => {
                        setIsShowModal(false);
                    }}
                    createEmployee={handleCreateEmployees}
                />
            </Modal>
        </div>
    );
}
