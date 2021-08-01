import axios from 'axios';

const FETCH_REQUEST = 'FETCH_REQUEST';

const FETCH_ERROR = 'FETCH_ERROR';

const baseURL = "https://api-rentalrr.herokuapp.com";

export const fetchCarsData = (service = axios) => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  try {
    const res = await service.get(`${baseURL}/cars`);

    dispatch({ type: "FETCH_CARS", payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, error });
  }
}

export const fetchCarData = (id) => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  try {
    const res = await axios.get(`${baseURL}/cars/${id}`);

    dispatch({type: "FETCH_CAR", payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, error });
  }
}

export const handleRegistration = (data) => async (dispatch) => {
  dispatch({ type: 'REQUEST' });

  try {
    const res = await axios.post(`${baseURL}/registrations`, {
      user: data,
    });

    dispatch({ type: "REGISTER_USER", payload: res.data })
  } catch (error) {
    dispatch({ type: "ERROR", error });
  }
}

export const handleLogin = (data) => async (dispatch) => {
  dispatch({ type: 'REQUEST' });

  try {
    const res = await axios.post(`${baseURL}/sessions`, {
      user: data,
    });

    dispatch({ type: "LOG_IN", payload: res.data })
  } catch (error) {
    dispatch({ type: "ERROR", error });
  }
}

export const handleIsLogged_In = () => async (dispatch) => {
  dispatch({ type: "REQUEST" });
  
  try {
    const res = await axios.get(`${baseURL}/logged_in`);

    dispatch({ type: "LOGGED_IN", payload: res.data });
  } catch (error) {
    dispatch({ type: "ERROR", error });
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