/* The saga or as we call it middleware it is used to do all asynchronous operations and mutate the state according
to the result of asynchronous operations by dispatching new action and again will be handled by reducer and state will
be mutated*/

import { put, takeLatest, all } from "redux-saga/effects";
import { API_URL } from "../assets/constant";
import axios from "axios";

function* fetchImages(action) {
  const res = yield axios
    .get(`${API_URL}limit=${action.limit}&category_ids=${action.id}`)
    .then((res) => res);
  yield put({ type: "IMAGES_RECEIVED", json: res.data, limit: action.limit });
}
function* actionWatcher() {
  yield takeLatest("GET_IMAGES", fetchImages);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
