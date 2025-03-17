import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDeleteDate } from '../customHooks/useDeleteData';

function DeleteModal({id,handleDelete}) {
 const {open,handleOpen,handleClose,submitClose}=useDeleteDate(handleDelete)
  return (
    <>
    <Button variant="primary" type='button' onClick={(e)=>{e.stopPropagation()
    e.preventDefault()
      handleOpen()
    }}>
      Delete
    </Button>

    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to delete?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        No
        </Button>
        <Button variant="primary" onClick={()=>{
         submitClose(id)
        }}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  </>

  );
}

export default DeleteModal;
