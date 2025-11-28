import { useState } from "react";

function ModalChecklist(fullscreen = 'sm-down') {
    const [show, setShow] = useState(false);
    return (<>
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
        </Modal>
    </>);
}

export default ModalChecklist