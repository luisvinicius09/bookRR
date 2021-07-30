import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileModal } from '../state/actions';

const ProfileModal = ({ isOpen, toggleHandler }) => {
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handlePM = () => {
    dispatch(handleProfileModal());
  };


  const displaySignUp = () => {
    setDisplay(true);
  };

  const displaySignIn = () => {
    setDisplay(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleHandler}>
        <ModalHeader>
          <button type="button" onClick={() => setDisplay(false)}>Sign In</button>
          <button type="button" onClick={() => setDisplay(true)}>Sign Up</button>
          <button type="button" onClick={toggleHandler}>Close</button>
        </ModalHeader>
        <ModalBody>
          {!display ? (
            <div>
              <h1>One</h1>
            </div>
          ) : (
            <div>
              <h1>Other</h1>
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProfileModal;