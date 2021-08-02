const initialState = {

};

const appoimentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "REQUEST":
      return {
        ...state,
      }
    case "CREATE_APPOIMENT":
      return {
        ...state,
      }
    default:
      return {
        ...state
      }
  }
}

export default appoimentsReducer;