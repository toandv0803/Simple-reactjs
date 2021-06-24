import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalDelete(props) {
    const { selectedItem } = props;
    const [isShowModal, setIsShowModal] = useState(false);

    const onDeleted = () => {
        const { deleteEmployees } = props;

        deleteEmployees(selectedItem.id);
        setIsShowModal(false);
    };

    return (
        <div>
            <Button
                onClick={() => {
                    setIsShowModal(true);
                }}
                variant="danger"
            >
                Xóa
            </Button>
            <Modal show={isShowModal} onHide={() => setIsShowModal(false)}>
                <Modal.Header>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa{" "}
                    {selectedItem && selectedItem.fullName}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setIsShowModal(false)}
                    >
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={onDeleted}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
