import produce from '../util/produce';

export const initialState = {
  mainPosts: [],
  offererPosts: [],
  singlePost: null,
  imagePaths: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_OFFERER_POST_REQUEST = 'LOAD_OFFERER_POST_REQUEST';
export const LOAD_OFFERER_POST_SUCCESS = 'LOAD_OFFERER_POST_SUCCESS';
export const LOAD_OFFERER_POST_FAILURE = 'LOAD_OFFERER_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LOAD_OFFERER_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_OFFERER_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = action.data.filter((v) => v.postType === 1);
        break;
      case LOAD_OFFERER_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      // case ADD_POST_REQUEST:
      //   draft.addPostLoading = true;
      //   draft.addPostDone = false;
      //   draft.addPostError = null;
      //   break;
      // case ADD_POST_SUCCESS:
      //   draft.addPostLoading = false;
      //   draft.addPostDone = true;
      //   draft.mainPosts.unshift(action.data);
      //   draft.imagePaths = [];
      //   break;
      // case ADD_POST_FAILURE:
      //   draft.addPostLoading = false;
      //   draft.addPostError = action.error;
      default:
        break;
    }
  });

export default reducer;
