import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { createEmployees } from "../service/EmployeesService";
import { myContext } from "../Contexts/myContext";
import { withRouter } from "react-router-dom";

class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      age: "",
      department: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  static contextType = myContext;

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { fullName, age, department } = this.state;
    console.log("state fullname", fullName);
    console.log("state age", age);
    console.log("state department", department);
    const data = {
      fullName,
      age,
      department,
    };

    createEmployees(data)
      .then((res) => {
        if (res) {
          const { getListEmployees } = this.context;
          getListEmployees();
          this.props.history.goBack();
        }
      })
      .catch((err) => {
        console.log("create page looix", err);
      });
  };

  render() {
    const { fullName, age, department } = this.state;
    console.log("create page", this.state);
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
              // value={fullName}
            />
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label>Tuổi</Form.Label>
            <Form.Control
              onChange={(e) => this.onChange(e)}
              type="number"
              placeholder="Nhập tuổi của bạn"
              name="age"
              // value={age}
            />
          </Form.Group>
          <Form.Group controlId="formDepartment">
            <Form.Label>Phòng ban</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên phòng ban của bạn"
              onChange={(e) => this.onChange(e)}
              name="department"
              // value={department}
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

export default withRouter(CreatePage);
