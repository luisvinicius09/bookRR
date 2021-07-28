const initialState = {
  user: {},
  loggedIn: false,
  appoiments: [],
  error: null,
  loading: false,
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'REGISTER_USER':
      return {
        ...state,
        loading: false,
      };
    case 'LOG_IN':
      return {
        loading: false,
        loggedIn: true,
        ...state,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

export default userReducer;