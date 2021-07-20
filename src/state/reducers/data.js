const initialState = {
  loading: false,
  error: null,
  cars: []
};

const carsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case "FETCH_CARS":
      return {
        ...state,
        loading: false,
        error: false,
        cars: action.payload
      }
    default:
      return state;
  }
}

export default carsReducer;