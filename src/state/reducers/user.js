const initialState = {
  user: {},
  loggedIn: false,
  appoiments: [],
  error: null,
  loading: false,
  status: undefined,
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
        user: action.payload.user,
        loggedIn: action.payload.logged_in,
      };
    case 'LOG_IN':
      return {
        loading: false,
        status: action.payload.status,
        loggedIn: action.payload.logged_in,
        user: action.payload,
        ...state,
      };
    case 'LOGGED_IN':
      return {
        loading: false,
        loggedIn: action.payload.logged_in,
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