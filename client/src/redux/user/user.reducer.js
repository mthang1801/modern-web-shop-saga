import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  loading: true,
  error: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.FACEBOOK_SIGN_IN_START:
    case userActionTypes.EMAIL_PASSWORD_SIGN_IN_START:
    case userActionTypes.SIGN_OUT_START:
      return {
        ...state,
        currentUser: null,
        loading: true,
        error: undefined,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
      };
    case userActionTypes.SIGN_UP_FAIL:
    case userActionTypes.SIGN_IN_FAIL:
    case userActionTypes.SIGN_OUT_FAIL:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
