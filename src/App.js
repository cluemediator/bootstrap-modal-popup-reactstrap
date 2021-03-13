import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [modal, setModal] = useState(false);
  const togglePopup = () => setModal(!modal);

  return (
    <div>
      <h5 className="mb-3">Bootstrap modal popup using reactstrap - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h5>
      <Button color="danger" onClick={togglePopup}>Open Popup</Button>
      
      <Modal isOpen={modal} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Design your Popup</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={togglePopup}>Done</Button>
          <Button color="secondary" onClick={togglePopup}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
