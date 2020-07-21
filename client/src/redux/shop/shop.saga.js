import { call, put, takeLatest, all } from "redux-saga/effects";
import collectionActionTypes from "./shop.types";
import { firestore } from "../../utils/firebase";
import { fetchCollectionsSuccess, fetchCollectionsFail } from "./shop.actions";
function* fetchShopCollections() {
  try {
    const collectionsRef = yield firestore.collection("collections").get();
    const collections = collectionsRef.docs.map((collection) => {
      let data = collection.data();
      return { ...data, id: collection.id };
    });
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }
}

function* onFetchShopCollections() {
  yield takeLatest(
    collectionActionTypes.FETCH_COLLECTIONS_START,
    fetchShopCollections
  );
}

export default function* shopSaga() {
  yield all([call(onFetchShopCollections)]);
}
