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

  const car = state.carsData.car;

  useEffect(() => {
    if (state.carsData.car === undefined) {
      dispatch(fetchCarData(car_id));
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
      {!state.carsData.loading && car && (
        <Container fluid={true} className={styles.container}>
          <NavBar handlerSB={handleSB} handlerPM={state.user.loggedIn ? null : handlePM} />
          <div className={styles.infoContainer}>
            <div className={styles.imageContainer}>
              <img src={car.image_url} alt={car.name}/>
            </div>
            <div className={styles.tableContainer}>
              <table>
                <tbody>
                  <tr>
                    <td>Price: </td>
                    <td>{car.price}</td>
                  </tr>
                  <tr>
                    <td>Fee:</td>
                    <td>{car.fee}</td>
                  </tr>
                </tbody>
              </table>
              <button type="button">Test Drive</button>
            </div>
            <div className={styles.nameContainer}>
              <h1>{car.name}</h1>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Car;