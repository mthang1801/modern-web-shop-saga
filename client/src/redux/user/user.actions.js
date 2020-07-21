import userActionTypes from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});
export const facebookSignInStart = () => ({
  type: userActionTypes.FACEBOOK_SIGN_IN_START,
});
export const emailPasswordSignInStart = (email, password) => ({
  type: userActionTypes.EMAIL_PASSWORD_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFail = (error) => ({
  type: userActionTypes.SIGN_UP_FAIL,
  payload: error,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFail = (error) => ({
  type: userActionTypes.SIGN_OUT_FAIL,
});
