import UserActionTypes from "./userTypes";

const initialState = {
  currentUser: null,
  loading: false,
  error: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case UserActionTypes.ADD_PLAN_START:
      return {
        ...state,
        loading: true,
      }
    case UserActionTypes.ADD_PLAN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      }
    case UserActionTypes.ADD_PLAN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state;
  }
};

export default userReducer;
