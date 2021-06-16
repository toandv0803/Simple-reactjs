import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateEmployees } from "../service/EmployeesService";
import { myContext } from "../Contexts/myContext";

export default class ModalEditEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedEmployees: {},
      fullName: "",
      age: "",
      department: "",
    };
  }

  static contextType = myContext;

  handleModal = (item) => {
    if (item) {
      this.setState({
        selectedEmployees: item,
        age: item ? item.age : "",
      });
    }
    this.setState({
      show: !this.state.show,
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
    const { getListEmployees } = this.context;
    const data = {
      fullName: fullName ? fullName : selectedEmployees.fullName,
      age: age ? age : selectedEmployees.age,
      department: department ? department : selectedEmployees.department,
    };

    updateEmployees(data, selectedEmployees.id)
      .then((res) => {
        console.log("update thành công", res);
      })
      .catch((err) => {
        console.log("update thất bại", err);
      });

    getListEmployees();
    this.handleModal();
  };

  render() {
    const { show, selectedEmployees, age } = this.state;
    return (
      <div>
        <Modal show={show} onHide={this.handleModal}>
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
                    selectedEmployees ? selectedEmployees.fullName : ""
                  }
                  name="fullName"
                  onChange={(e) => this.onChange(e)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Tuổi</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={selectedEmployees ? selectedEmployees.age : ""}
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
                    selectedEmployees ? selectedEmployees.department : ""
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
                  show: false,
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
