import axios from 'axios';

const FETCH_REQUEST = 'FETCH_REQUEST';

const FETCH_ERROR = 'FETCH_ERROR';

export const fetchCarsData = (service = axios) => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  try {
    const res = await service.get();

    dispatch({ type: "FETCH_CARS", payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, error });
  }
}