import React, { Component, createRef } from "react";
import { Table, Button } from "react-bootstrap";
import ModalEdit from "./ModalEditEmployees";
import ModalDelete from "./ModalDelete";

export default class TableEmployees extends Component {
    constructor(props) {
        super(props);
        this.refModal = createRef();
        this.refModalDelete = createRef();
    }

    render() {
        const { employees } = this.props.employees;
        const { createEmployees, editEmployees, deleteEmployees } = this.props;

        let listItem;
        if (employees.length > 0) {
            listItem = employees.map((item, key, array) => {
                const index = array.findIndex(
                    (element) => element.id === item.id
                );
                return (
                    <tr key={key}>
                        <td>{index + 1}</td>
                        <td>{item.fullName}</td>
                        <td>{item.age}</td>
                        <td>{item.department}</td>
                        <td>
                            <Button
                                onClick={() => {
                                    this.refModal.current.handleModal(item);
                                }}
                                variant="warning"
                            >
                                Sửa
                            </Button>
                        </td>
                        <td>
                            <Button
                                onClick={() => {
                                    this.refModalDelete.current.handleModal(
                                        item
                                    );
                                }}
                                variant="danger"
                            >
                                Xóa
                            </Button>
                        </td>
                    </tr>
                );
            });
        }

        return (
            <div>
                <Button
                    variant="success"
                    onClick={() => this.refModal.current.handleModal()}
                >
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
                    <tbody>{listItem}</tbody>
                </Table>
                <ModalEdit
                    createEmployees={createEmployees}
                    editEmployees={editEmployees}
                    ref={this.refModal}
                />
                <ModalDelete
                    deleteEmployees={deleteEmployees}
                    ref={this.refModalDelete}
                />
            </div>
        );
    }
}
