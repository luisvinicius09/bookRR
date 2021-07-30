import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Container } from 'reactstrap';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { handleSideBar, handleProfileModal, fetchCarData, handleCarsModal } from '../state/actions';
import styles from '../assets/css/car.module.css';

const Car = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { car_id } = useParams();

  useEffect(() => {
    if (state.carsData.car === undefined) {
      dispatch(fetchCarData(axios, car_id));
    }
  }, [dispatch, car_id, state.carsData.car]);

  console.log(state);

    // Side bar
    const handleSB = () => {
      dispatch(handleSideBar());
    };
  
    // Profile modal
    const handlePM = () => {
      dispatch(handleProfileModal());
    };
  
    // Cars modal
    const handleCM = () => {
      dispatch(handleCarsModal());
    };

  return (
    <div className={styles.wrapper}>
      {state.utils.sideBar ? <SideBar /> : null}
      {!state.carsData.loading && state.carsData.car && (
        <Container fluid={true} className={styles.container}>
          <NavBar handlerSB={handleSB} handlerPM={state.user.loggedIn ? null : handlePM} />
          <h1>working</h1>
        </Container>
      )}
    </div>
  );
};

export default Car;