import { call, all, put, takeLatest } from "redux-saga/effects";
import orderedActionTypes from "./ordered.types";
import { firestore, auth } from "../../utils/firebase";
import {
  fetchOrderedListSuccess,
  fetchOrderedListFail,
} from "./ordered.actions";
function* fetchOrderedList() {
  try {
    const userAuth = auth.currentUser;
    if (!userAuth) {
      throw new Error("unAuthorized");
    }
    const orederedListRef = yield firestore
      .collection("ordered")
      .where("userId", "==", userAuth.uid)
      .get();
    const orderedList = orederedListRef.docs.map((orderedItem) =>
      orderedItem.data()
    );
    yield put(fetchOrderedListSuccess(orderedList));
  } catch (error) {
    yield put(fetchOrderedListFail(error.message));
  }
}

function* onFetchOrderedListStart() {
  yield takeLatest(
    orderedActionTypes.FETCH_ORDERED_LIST_START,
    fetchOrderedList
  );
}

export default function* orderedListSaga() {
  yield all([call(onFetchOrderedListStart)]);
}
