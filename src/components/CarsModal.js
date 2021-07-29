import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

const CarsModal = ({ toggleHandler }) => {
  const state = useSelector((state) => state.utils);
  const dispatch = useDispatch();

  return (
    <Modal toggle={toggleHandler} isOpen={state.carsModal}>
      <ModalHeader>
        Header
      </ModalHeader>
      <ModalBody>
        Body
      </ModalBody>
    </Modal>
  );
};

export default CarsModal;