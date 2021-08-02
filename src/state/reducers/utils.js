const initialState = {
  modal: false,
  sideBar: false,
  profile: false,
  carsModal: false,
  appoimentsModal: false,
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
    case "HANDLE_CARS_MODAL":
      return {
        ...state,
        carsModal: !state.carsModal,
        modal: false,
        sideBar: false,
      }
    case "HANDLE_CLOSE_MODALS":
      return {
        ...state,
        carsModal: false,
        modal: false,
      }
    case "HANDLE_APPOIMENT":
      return {
        ...state,
        appoimentsModal: !state.appoimentsModal,
        sideBar: false,
      }
    default:
      return state;
  }
}

export default utilReducer;