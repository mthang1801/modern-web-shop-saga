import { call, all, takeLatest, put } from "redux-saga/effects";
import {
  auth,
  GoogleProvider,
  createUserProfileDocument,
  FacebookProvider,
  getCurrentUser,
} from "../../utils/firebase";
import userActionTypes from "./user.types";
import {
  signInSuccess,
  signInFail,
  signOutFail,
  signOutSuccess,
} from "./user.actions";
function* userStateFromAuth(userAuth, anotherData = null) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      anotherData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield call(userStateFromAuth, user);
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

function* signInWithFacebook() {
  try {
    const { user } = yield auth.signInWithPopup(FacebookProvider);
    yield call(userStateFromAuth, user);
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(userStateFromAuth, user);
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    yield put(signInSuccess(userAuth));
  } catch (error) {
    yield put(signInFail(error.message));
  }
}

function* onSignInWithGoogle() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onSignInWithFacebook() {
  yield takeLatest(userActionTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook);
}

function* onSignInWithEmailAndPassword() {
  yield takeLatest(
    userActionTypes.EMAIL_PASSWORD_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

function* checkUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export default function* userSaga() {
  yield all([
    call(onSignInWithGoogle),
    call(onSignInWithFacebook),
    call(onSignInWithEmailAndPassword),
    call(onSignOut),
    call(checkUserSession),
  ]);
}
