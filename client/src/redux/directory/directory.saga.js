import { call, put, takeLatest, all } from "redux-saga/effects";
import directoryActionTypes from "./directory.types";
import { fetchDirectorySuccess, fetchDirectoryFail } from "./directory.actions";
import { firestore } from "../../utils/firebase";
function* fetchDirectory() {
  try {
    const directoryCollection = yield firestore.collection("directories").get();
    const transformedDirectoryData = directoryCollection.docs.map(
      (directory) => {
        const { title, imageUrl, linkUrl } = directory.data();
        return { id: directory.id, title, imageUrl, linkUrl };
      }
    );
    yield put(fetchDirectorySuccess(transformedDirectoryData));
  } catch (error) {
    yield put(fetchDirectoryFail(error.message));
  }
}

function* onFetchDirectoryStart() {
  yield takeLatest(directoryActionTypes.FETCH_DIRECTORY_START, fetchDirectory);
}

export default function* directorySaga() {
  yield all([call(onFetchDirectoryStart)]);
}
