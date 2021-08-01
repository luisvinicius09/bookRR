import axios from 'axios';

const FETCH_REQUEST = 'FETCH_REQUEST';

const FETCH_ERROR = 'FETCH_ERROR';

const carsURL = 'https://api-rentalrr.herokuapp.com/cars';

const logInURL = 'https://api-rentalrr.herokuapp.com/sessions';

export const fetchCarsData = (service = axios) => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  try {
    const res = await service.get(carsURL);

    dispatch({ type: "FETCH_CARS", payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, error });
  }
}

export const fetchCarData = (id) => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  try {
    const res = await axios.get(`${carsURL}/${id}`);

    dispatch({type: "FETCH_CAR", payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, error });
  }
}

export const handleRegistration = (data) => async (dispatch) => {
  dispatch({ type: 'REQUEST' });

  try {
    const res = await axios.post(logInURL, {
      user: data,
    });

    dispatch({ type: "REGISTER_USER", payload: res.data})
  } catch (error) {
    dispatch({ type: "ERROR", error});
  }
}

export const handleLogin = (data) => async (dispatch) => {
  dispatch({ type: 'REQUEST' });

  try {
    const res = await axios.post(logInURL, {
      user: data,
    });

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

export const handleCloseModals = () => ({
  type: "HANDLE_CLOSE_MODALS",
})