import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import CarCard from './CarCard';

const CarsModal = ({ toggleHandler }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderCars = () => {
    // TODO: Logic if state is loading

    if (!state.carsData.cars) {
      return <h2>No items to display or something went wrong</h2>
    }
    return state.carsData.cars.map((car) => (
      <CarCard data={car} />
    ));
  };

  return (
    <Modal toggle={toggleHandler} isOpen={state.utils.carsModal}>
      <ModalHeader>
        Header {/* TODO: Search/Filter bar */}
      </ModalHeader>
      <ModalBody>
        {renderCars()}
      </ModalBody>
    </Modal>
  );
};

export default CarsModal;