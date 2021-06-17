import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default class ModalEditEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            selectedEmployees: null,
            fullName: "",
            age: "",
            department: "",
        };
    }

    handleModal = (item) => {
        if (item) {
            this.setState({
                selectedEmployees: item,
                age: item && item.age,
            });
        }

        if (this.state.isShow === true) {
            this.setState({
                age: "",
                selectedEmployees: "",
            });
        }

        this.setState({
            isShow: !this.state.isShow,
        });
    };

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });
    };

    onSubmit = () => {
        const { fullName, age, department, selectedEmployees } = this.state;
        const { createEmployees, editEmployees } = this.props;
        const data = {
            fullName: fullName ? fullName : selectedEmployees.fullName,
            age: age ? age : selectedEmployees.age,
            department: department ? department : selectedEmployees.department,
        };

        if (selectedEmployees) {
            editEmployees(data, selectedEmployees.id);
        } else {
            createEmployees(data);
        }

        this.handleModal();
    };

    render() {
        const { isShow, selectedEmployees, age } = this.state;
        return (
            <div>
                <Modal show={isShow} onHide={this.handleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sửa thông tin nhân viên</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Tên</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={
                                        selectedEmployees &&
                                        selectedEmployees.fullName
                                    }
                                    name="fullName"
                                    onChange={(e) => this.onChange(e)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Tuổi</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder={
                                        selectedEmployees &&
                                        selectedEmployees.age
                                    }
                                    name="age"
                                    value={age}
                                    onChange={(e) => this.onChange(e)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Phòng ban</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={
                                        selectedEmployees &&
                                        selectedEmployees.department
                                    }
                                    name="department"
                                    onChange={(e) => this.onChange(e)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                this.setState({
                                    isShow: false,
                                });
                            }}
                        >
                            Hủy
                        </Button>
                        <Button variant="primary" onClick={this.onSubmit}>
                            Lưu
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
