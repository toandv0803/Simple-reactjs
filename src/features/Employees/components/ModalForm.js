import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function ModalForm(props) {
    const [inputValues, setInputValues] = useState({});
    const { selectedItem, type } = props;
    const [isShowModal, setIsShowModal] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const onSubmit = () => {
        const { createEmployee, editEmployees } = props;
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
            editEmployees({ data, id: selectedItem.id });
        } else {
            createEmployee(data);
        }

        setIsShowModal(false);
    };

    return (
        <div>
            <Button
                onClick={() => {
                    setIsShowModal(true);
                }}
                variant="warning"
            >
                {type === "create" ? "Thêm" : "Sửa"}
            </Button>
            <Modal
                show={isShowModal}
                onHide={() => {
                    setIsShowModal(false);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {type === "create" ? "thêm" : "sửa"} thông tin nhân viên
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={
                                    selectedItem && selectedItem.fullName
                                }
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
                        onClick={() => setIsShowModal(false)}
                    >
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
