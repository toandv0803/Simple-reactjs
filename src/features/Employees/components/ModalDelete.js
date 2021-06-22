import React from "react";
import { Button, Modal } from "react-bootstrap";
export default function ModalDelete(props) {
    const { handleModalDelete, selectedItem } = props;

    const onDeleted = () => {
        const { deleteEmployees, handleModalDelete } = props;

        deleteEmployees(selectedItem.id);
        handleModalDelete();
    };

    return (
        <div>
            <Modal.Header>
                <Modal.Title>Thông báo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có chắc chắn muốn xóa{" "}
                {selectedItem && selectedItem.fullName}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleModalDelete}>
                    Hủy
                </Button>
                <Button variant="danger" onClick={onDeleted}>
                    Xóa
                </Button>
            </Modal.Footer>
        </div>
    );
}
