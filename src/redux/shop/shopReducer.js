import ShopActionTypes from "./shopTypes";

const initialState = {
  loading: false,
  errors: null,
  items: [],
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.GET_PLANS_START:
      return {
        ...state,
        loading: true,
      };
    case ShopActionTypes.GET_PLANS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
        items: payload,
      };
    case ShopActionTypes.GET_PLANS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
