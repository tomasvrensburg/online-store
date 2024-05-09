import Modal from 'react-bootstrap/Modal';
// Importing Bootstrap for modal styling
import 'bootstrap/dist/css/bootstrap.min.css';


export default function InfoModal(props) {
  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Shipping methods
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Express Shipping - delivered in 1 - 2 working days</p>
        <p>Standard Shipping - delivered within 3 - 5 working days</p>
        <p>Collection - collect in store or at one of our depots. We unfortunately must charge a handling fee for this.</p>
        <p>
          <strong>Shipping costs must be payed upon delivery</strong>
        </p>
      </Modal.Body>
    </Modal>
  );
}