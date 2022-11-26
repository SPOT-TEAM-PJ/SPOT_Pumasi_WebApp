import produce from '../util/produce';

export const initialState = {
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me: {
    id: 1,
    userId: 1, //아이디
    password: 1234,
    parent: {
      name: '이선정',
      nickname: '시후맘',
      job: '프리랜서',
      jobinfo: '아산',
      phoneNumber: '010-1234-5678',
      stateComment: 'test post 1',
      email: 'test1@gmail.com',
      address: '충청남도 아산시 신창면',
      image: '/',
    },
    children: [
      {
        childId: 1,
        school: '행복이 어린이집',
        age: 5,
        childrenname: '김시후',
        gender: '남자',
        image: '/',
      },
      {
        childId: 2,
        school: '행복이 어린이집',
        age: 7,
        childrenname: '이소은',
        gender: '여자',
        image: '/',
      },
    ],
  },
  userInfo: null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const EDIT_MYINFO_SUCCESS = 'EDIT_MYINFO_SUCCESS';
export const EDIT_MYINFO_FAILURE = 'EDIT_MYINFO_FAILURE';

export const EDIT_CHILD_SUCCESS = 'EDIT_CHILD_SUCCESS';
export const EDIT_CHILD_FAILURE = 'EDIT_CHILD_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case EDIT_MYINFO_SUCCESS:
        draft.me.parent.name = action.data.name;
        draft.me.parent.address = action.data.address;
        draft.me.parent.job = action.data.job;
        draft.me.parent.jobinfo = action.data.jobinfo;
        draft.me.parent.stateComment = action.data.stateComment;
        draft.me.parent.jobinfo = action.data.jobinfo;
        break;
      case EDIT_MYINFO_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case EDIT_CHILD_SUCCESS:
        const child = draft.me.children.find(
          (child) => child.childId === action.data.childId
        );
        child.childrenname = action.data.childrenname;
        child.age = action.data.age;
        child.gender = action.data.gender;
        child.school = action.data.school;
        break;
      case EDIT_CHILD_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      default:
        break;
    }
  });
};
export default reducer;
