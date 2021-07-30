import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import CarCard from './CarCard';
import styles from '../assets/css/carsmodal.module.css';
import { useEffect } from 'react';
import { fetchCarsData } from '../state/actions';

const CarsModal = ({ toggleHandler }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderCars = () => {
    // TODO: Logic if state is loading

    if (!state.carsData.cars) {
      return <h2>No items to display or something went wrong</h2>
    }
    return state.carsData.cars.map((car) => (
      <CarCard data={car} key={car.id} />
    ));
  };

  return (
    <Modal toggle={toggleHandler} isOpen={state.utils.carsModal}>
      <ModalHeader>
        Car models {/* TODO: Search/Filter bar */}
      </ModalHeader>
      <ModalBody className={styles.bodyContainer}>
        {renderCars()}
      </ModalBody>
    </Modal>
  );
};

export default CarsModal;