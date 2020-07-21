import orderedActionTypes from "./ordered.types";
import { firestore, auth } from "../../utils/firebase";
export const fetchOrderedListStart = () => ({
  type: orderedActionTypes.FETCH_ORDERED_LIST_START,
});

export const fetchOrderedListSuccess = (orderedList) => ({
  type: orderedActionTypes.FETCH_ORDERED_LIST_SUCCESS,
  payload: orderedList,
});

export const fetchOrderedListFail = (error) => ({
  type: orderedActionTypes.FETCH_ORDERED_LIST_FAIL,
  payload: error.message,
});

export const fetchOrderedList = () => async (dispatch) => {
  try {
    dispatch(fetchOrderedListStart());
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const orderedList = await firestore
          .collection("ordered")
          .where("userId", "==", userAuth.uid)
          .get();
        const orderedListToMap = orderedList.docs.map((ordered) => {
          return { id: ordered.id, ...ordered.data() };
        });
        dispatch(fetchOrderedListSuccess(orderedListToMap));
      }
    });
  } catch (error) {
    dispatch(fetchOrderedListFail(error.message));
  }
};
