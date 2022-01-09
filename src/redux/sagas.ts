import { takeEvery } from "redux-saga/effects";
import { TYPES } from "./user/actionTypes";
import {
  checkAuthSaga,
  loginSaga,
  logoutSaga,
  registrationSaga,
} from "./user/sagas";

export default function* projectSaga() {
  yield takeEvery(TYPES.LOGIN, loginSaga);
  yield takeEvery(TYPES.REGISTRATION, registrationSaga);
  yield takeEvery(TYPES.LOGOUT, logoutSaga);
  yield takeEvery(TYPES.CHECK_AUTH, checkAuthSaga);
}
