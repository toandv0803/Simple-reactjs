import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteEmployees } from "../service/EmployeesService";
import { myContext } from "../Contexts/myContext";

export default class ModalDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedEmployees: {},
    };
  }

  static contextType = myContext;

  handleModal = (item) => {
    this.setState({
      show: !this.state.show,
      selectedEmployees: item,
    });
  };

  onDeleted = () => {
    const { selectedEmployees } = this.state;
    const { getListEmployees } = this.context;

    deleteEmployees(selectedEmployees.id)
      .then((res) => {
        console.log("resss delete", res);
        getListEmployees();
      })
      .catch((err) => {
        console.log("errr delete", err);
      });
    this.handleModal();
  };
  render() {
    const { show, selectedEmployees } = this.state;
    return (
      <div>
        <Modal show={show} onHide={this.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Bạn có chắc chắn muốn xóa{" "}
            {selectedEmployees ? selectedEmployees.fullName : ""}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModal}>
              Hủy
            </Button>
            <Button variant="danger" onClick={this.onDeleted}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
