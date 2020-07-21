import { call, all } from "redux-saga/effects";
import userSaga from "./user/user.saga";
import directorySaga from "./directory/directory.saga";
import shopSaga from "./shop/shop.saga";
import orderedListStart from "./ordered/ordered.saga";
export default function* rootSaga() {
  yield all([
    call(userSaga),
    call(directorySaga),
    call(shopSaga),
    call(orderedListStart),
  ]);
}
