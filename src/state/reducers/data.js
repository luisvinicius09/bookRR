const initialState = {};

const carsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_CARS":
      return {
        ...state
      }
    default:
      return state;
  }
}

export default carsReducer;