import UserActionTypes from "./userTypes";

const initialState = {
  authenticated: false,
  currentUser: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
        authenticated: true,
      };
    default:
      return state;
  }
};

export default userReducer;
