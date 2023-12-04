import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Icon} from 'semantic-ui-react';

function ModalKeluar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <p onClick={handleShow}><Icon name='x' className='' />
        Keluar
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Keluar</Modal.Title>
        </Modal.Header>
        <Modal.Body>Yakin ingin Keluar?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tidak
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Iya
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalKeluar