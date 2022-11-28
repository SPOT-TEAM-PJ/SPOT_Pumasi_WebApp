import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_IN_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  EDIT_MYINFO_SUCCESS,
  EDIT_MYINFO_FAILURE,
  EDIT_CHILD_SUCCESS,
  EDIT_CHILD_FAILURE,
} from '../reducers/user';
import { dummyLogin } from '../util/dummyData/dummyLogin';
// LogIn
function* logIn(action) {
  try {
    const result = dummyLogin;
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

// LogOut
function logOutAPI() {
  return axios.post('/user/logout');
}
function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

// SignUP
function signUpAPI(data) {
  return axios.post('/user', data);
}
function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

// Edit Myinfo

function* edit(action) {
  try {
    yield delay(1000);
    yield put({
      type: EDIT_MYINFO_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: EDIT_MYINFO_FAILURE,
      error: err.response.data,
    });
  }
}

// Edit Child

function* editchild(action) {
  try {
    yield delay(1000);
    yield put({
      type: EDIT_CHILD_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: EDIT_CHILD_FAILURE,
      error: err.response.data,
    });
  }
}

// Event Listener와 비슷한 역할
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUP() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchEdit() {
  yield takeLatest(EDIT_MYINFO_SUCCESS, edit);
}
function* watchEditChild() {
  yield takeLatest(EDIT_CHILD_SUCCESS, editchild);
}
export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUP),
    fork(watchEdit),
    fork(watchEditChild),
  ]);
}
