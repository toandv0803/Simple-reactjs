import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
export default class ModalDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            selectedEmployees: {},
        };
    }

    handleModal = (item) => {
        if (item) {
            this.setState({
                selectedEmployees: item,
            });
        }

        this.setState({
            isShow: !this.state.isShow,
        });
    };

    onDeleted = () => {
        const { selectedEmployees } = this.state;
        const { deleteEmployees } = this.props;

        deleteEmployees(selectedEmployees.id);
        this.handleModal();
    };
    render() {
        const { isShow, selectedEmployees } = this.state;
        return (
            <div>
                <Modal show={isShow} onHide={this.handleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông báo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Bạn có chắc chắn muốn xóa{" "}
                        {selectedEmployees && selectedEmployees.fullName}
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
