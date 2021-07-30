import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Container } from 'reactstrap';
import { fetchCarData } from '../state/actions';

const Car = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { car_id } = useParams();

  useEffect(() => {
    if (state.carsData.car === undefined) {
      dispatch(fetchCarData(axios, car_id));
    }
  }, [dispatch, car_id, state.carsData.car]);

  console.log(state.carsData.car);

  return (
    <>
    {!state.carsData.loading && state.carsData.car && (
      <Container fluid={true}>
        <h1>working</h1>
      </Container>
    )}
    </>
  );
};

export default Car;