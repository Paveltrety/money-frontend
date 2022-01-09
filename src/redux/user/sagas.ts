import { put, call } from 'redux-saga/effects';
import { updateUserInfo, login, logout } from './userActions';
import AuthService from '../../api/services/AuthService';
import { Result } from '../types';
import { AuthResponse } from '../../types/server/Auth';

export function* loginSaga({
  payload: { email, password },
}: ReturnType<typeof login>) {
  try {
    const { result, error }: Result<AuthResponse> = yield call(
      AuthService.login,
      {
        email,
        password,
      },
    );
    if (result) {
      localStorage.setItem('token', result.accessToken);
      yield put(updateUserInfo(result.user));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* registrationSaga({
  payload: { email, password },
}: ReturnType<typeof login>) {
  try {
    const { result, error } = yield call(AuthService.registration, {
      email,
      password,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* logoutSaga() {
  try {
    const { result, error } = yield call(AuthService.logout);
    debugger;
    if (result) {
      localStorage.removeItem('token');
      yield put(updateUserInfo(null));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* checkAuthSaga() {
  try {
    const { result, error }: Result<AuthResponse> = yield call(
      AuthService.checkAuth,
    );
    if (result) {
      localStorage.setItem('token', result.accessToken);
      yield put(updateUserInfo(result.user));
    }
  } catch (e) {
    console.log(e);
  }
}
