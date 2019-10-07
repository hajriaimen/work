import React from 'react';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import { ModalBody, ModalHeader, ModalFooter, Button } from 'design-react-kit';

function Footer(){
    return(
        <div>
           <div style={{padding: '0px 290px'}}>
                <div className="modal-content">
                <ModalHeader>
                Titolo della modale
                </ModalHeader>
                <ModalBody>
                Il testo del corpo della modale va qui.
                </ModalBody>
                <ModalFooter>
                <Button>
                Chiudi
                </Button>
                <Button color="primary">
                Salva le modifiche
                </Button>
                </ModalFooter>
                </div>
                </div>

            go g run!
        </div>
    );
}
export default Footer;