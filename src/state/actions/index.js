import axios from 'axios';

const FETCH_REQUEST = 'FETCH_REQUEST';

const FETCH_ERROR = 'FETCH_ERROR';

const carsURL = 'http://localhost:3000/cars';

const logInURL = '';

export const fetchCarsData = (service = axios) => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  try {
    const res = await service.get(carsURL);

    dispatch({ type: "FETCH_CARS", payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, error });
  }
}

export const handleRegistration = (service = axios, data) => async (dispatch) => {
  dispatch({ type: 'REQUEST' });

  try {
    const res = await service.post(logInURL, data);

    dispatch({ type: "REGISTER_USER", payload: res.data})
  } catch (error) {
    dispatch({ type: "ERROR", error});
  }
}

export const handleLogin = (service = axios, data) => async (dispatch) => {
  dispatch({ type: 'REQUEST' });

  try {
    const res = await service.post(logInURL, data);

    dispatch({ type: "LOG_IN", payload: res.data})
  } catch (error) {
    dispatch({ type: "ERROR", error});
  }
}

export const handleSideBar = () => ({
  type: "HANDLE_SIDEBAR",
});

export const handleProfileModal = () => ({
  type: "HANDLE_PROFILE",
});

export const handleCarsModal = () => ({
  type: "HANDLE_CARS_MODAL",
});