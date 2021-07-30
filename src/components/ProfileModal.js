import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileModal } from '../state/actions';

const ProfileModal = ({ isOpen, toggleHandler }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handlePM = () => {
    dispatch(handleProfileModal());
  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleHandler}>
        <ModalHeader>
          <button onClick={toggleHandler}>Close</button>
        </ModalHeader>
        <ModalBody>
          Works
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProfileModal;