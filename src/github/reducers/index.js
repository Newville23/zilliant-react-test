import * as ActionTypes from "../actions/constants";
import { combineReducers } from "redux";

const initialState = {
  user: null,
  repos: [],
  selectedRepo: null,
  isFetchingUser: false,
  isFetchingRepos: false,
  errorMsg: null,
  lastSuccessfulUserFetch: null,
  lastSuccessfulReposFetch: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return {
        ...state,
        isFetchingUser: true
      };
    case ActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isFetchingUser: false,
        lastSuccessfulUserFetch: new Date()
      };

    default:
      return state;
  }
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_REPOS:
      return {
        ...state,
        isFetchingRepos: true
      };
    case ActionTypes.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        isFetchingRepos: false,
        repos: action.repos,
        lastSuccessfulReposFetch: new Date()
      };

    default:
      return state;
  }
};

const getRepo = (state, id) => {
  const selectedRepo = repos.find(repo => repo.id === id);
  if (selectedRepo) {
    return selectedRepo;
  }
};

const repo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_REPO:
      const selectedRepo = getRepo(state, action.id);
      return {
        ...state,
        selectedRepo
      };
    case ActionTypes.UNSELECT_REPO:
      return {
        ...state,
        selectedRepo: null
      };
    default:
      return state;
  }
};

const errorMessage = (state = initialState, action) => {
  const { type, errorMsg } = action;
  if (type === ActionTypes.DISMISS_ERROR) {
    return {
      ...state,
      errorMsg: null
    };
  } else if (errorMsg) {
    return {
      ...state,
      errorMsg
    };
  }
};

const rootReducer = combineReducers({
  user,
  repos,
  repo,
  errorMessage
});

export default rootReducer;
