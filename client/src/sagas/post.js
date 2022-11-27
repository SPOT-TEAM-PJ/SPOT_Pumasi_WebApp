import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  // ADD_POST_FAILURE,
  // ADD_POST_REQUEST,
  // ADD_POST_SUCCESS,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_OFFERER_POST_REQUEST,
  LOAD_OFFERER_POST_SUCCESS,
  LOAD_OFFERER_POST_FAILURE,
} from '../reducers/post';
// import { ADD_POST_TO_ME } from '../reducers/user';
import { dummyData, dummyPost } from '../util/dummyData/dummyData';

// AddPost
// function addPostAPI(data) {
//   return axios.post('/post', data);
// }
// function* addPost(action) {
//   try {
//     const result = yield call(addPostAPI, action.data);
//     yield put({
//       type: ADD_POST_SUCCESS,
//       data: result.data,
//     });
//     yield put({
//       type: ADD_POST_TO_ME,
//       data: result.data.id,
//     });
//   } catch (err) {
//     yield put({
//       type: ADD_POST_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// LoadPost
function loadPostAPI(data) {
  return axios.get(`post/${data}`);
}

function* loadPost(action) {
  try {
    // const result = yield call(loadPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: dummyPost,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

// LoadPost
function loadOffererPostAPI(data) {
  return axios.get(`post/${data}`);
}

function* loadOffererPost(action) {
  try {
    // const result = yield call(loadPostAPI, action.data);
    console.log('dummy:', dummyPost);
    yield delay(1000);
    yield put({
      type: LOAD_OFFERER_POST_SUCCESS,
      data: dummyPost,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_OFFERER_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchLoadOffererPost() {
  yield takeLatest(LOAD_OFFERER_POST_REQUEST, loadOffererPost);
}

// Event Listener와 비슷한 역할
// function* watchAddPost() {
//   yield takeLatest(ADD_POST_REQUEST, addPost);
// }

export default function* postSaga() {
  yield all([
    fork(watchLoadPost),
    fork(watchLoadOffererPost),
    //  fork(watchAddPost)
  ]);
}
