import { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { REDUCER_NAME } from "./../reducers/EmployeesReducer";
import EmployeeItem from "./EmployeeItem";
import ModalEditEmployees from "./ModalEditEmployees";
import * as actions from "../actions/EmployeeAction";

const mapStateToProps = (state) => {
    return {
        employeeIds: state[REDUCER_NAME].employeeIds,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createEmployee: (newEmployee) => {
            dispatch(actions.createEmployee(newEmployee));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableEmployees);

function TableEmployees(props) {
    const [isShowModal, setIsShowModal] = useState(false);

    const renderListEmployee = () => {
        const { employeeIds } = props;
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
                <ModalEditEmployees
                    handleModalDelete={() => {
                        setIsShowModal(false);
                    }}
                    createEmployee={props.createEmployee}
                />
            </Modal>
        </div>
    );
}
