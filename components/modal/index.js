import { Modal } from 'react-bootstrap';
// import styles from '../styles.module.css'

export default function GeneralModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size={props.size}
        aria-labelledby="contained-modal-title-vcenter"
        // dialogClassName={styles.modal}
      >
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </div>
  );
}
