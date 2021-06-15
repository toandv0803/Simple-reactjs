import React, { Component, createRef } from "react";
import { Table, Button } from "react-bootstrap";
import { myContext } from "../Contexts/myContext";
import ModalEdit from "../Components/ModalEditEmployees";
import ModalDelete from "../Components/ModalDelete";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.refModal = createRef();
    this.refModalDelete = createRef();
  }

  static contextType = myContext;

  handleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { listEmployees } = this.context;
    console.log("----", listEmployees);

    let listItem;
    if (listEmployees) {
      listItem = listEmployees.map((item, index) => {
        return (
          <tr key={index}>
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
                  this.refModalDelete.current.handleModal(item);
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
        <ModalEdit ref={this.refModal} />
        <ModalDelete ref={this.refModalDelete} />
      </div>
    );
  }
}
