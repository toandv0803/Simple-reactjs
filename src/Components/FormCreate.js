import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class FormCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            age: "",
            department: "",
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });
    };

    validateParams = (data) => {
        if (!data.fullName) {
            return "Bạn chưa nhập tên";
        } else if (!data.age) {
            return "Bạn chưa nhập tuổi";
        } else if (!data.department) {
            return "Bạn chưa nhập phòng ban";
        }
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { fullName, age, department } = this.state;
        const { createEmployee, history } = this.props;
        const data = {
            fullName,
            age,
            department,
        };
        const message = this.validateParams(data);

        if (!message) {
            createEmployee(data);
        }
    };

    render() {
        return (
            <div>
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    <Form.Group controlId="formFullName">
                        <Form.Label>Tên</Form.Label>
                        <Form.Control
                            onChange={(e) => this.onChange(e)}
                            type="text"
                            placeholder="Nhập tên của bạn"
                            name="fullName"
                        />
                    </Form.Group>

                    <Form.Group controlId="formAge">
                        <Form.Label>Tuổi</Form.Label>
                        <Form.Control
                            onChange={(e) => this.onChange(e)}
                            type="number"
                            placeholder="Nhập tuổi của bạn"
                            name="age"
                        />
                    </Form.Group>
                    <Form.Group controlId="formDepartment">
                        <Form.Label>Phòng ban</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên phòng ban của bạn"
                            onChange={(e) => this.onChange(e)}
                            name="department"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Thêm mới
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FormCreate;
