import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function ModalEditEmployees(props) {
    const [inputValues, setInputValues] = useState({});
    const { selectedItem } = props;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const onSubmit = () => {
        const { createEmployee, editEmployees, handleModalDelete } = props;
        const data = {
            fullName: inputValues.fullName
                ? inputValues.fullName
                : selectedItem.fullName,
            age: inputValues.age ? inputValues.age : selectedItem.age,
            department: inputValues.department
                ? inputValues.department
                : selectedItem.department,
        };

        if (selectedItem) {
            editEmployees(data, selectedItem.id);
        } else {
            createEmployee(data);
        }

        handleModalDelete();
    };

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Sửa thông tin nhân viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Tên</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={selectedItem && selectedItem.fullName}
                            name="fullName"
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Tuổi</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={selectedItem && selectedItem.age}
                            name="age"
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Phòng ban</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={
                                selectedItem && selectedItem.department
                            }
                            name="department"
                            onChange={onChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => props.handleModalDelete()}
                >
                    Hủy
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    Lưu
                </Button>
            </Modal.Footer>
        </div>
    );
}
