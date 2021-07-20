const initialState = {
  modal: false,
  sideBar: false,
  profile: false,
};

const utilReducer = (state = initialState, action) => {
  switch(action.type) {
    case "HANDLE_MODAL":
      return {
        ...state,
        sideBar: false,
        modal: !state.modal,
      };
    case "HANDLE_PROFILE":
      return {
        ...state,
        sideBar: false,
        profile: !state.profile,
      }
    case "HANDLE_SIDEBAR":
      return {
        ...state,
        sideBar: !state.sideBar
      }
    default:
      return state;
  }
}

export default utilReducer;