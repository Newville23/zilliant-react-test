import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_REPOS,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  SELECT_REPO,
  UNSELESCT_REPO,
  USER_ERROR_MSG,
  REPOS_ERROR_MSG
} from "./constants";

import { getUser, getRepos } from "../requests";

// Getting User from Github
export const requestUser = () => ({
  type: FETCH_USER
});

export const requestUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user
});

export const requestUserFailure = () => ({
  type: FETCH_USER_FAILURE,
  errorMsg: USER_ERROR_MSG
});

export const fetchUser = user => {
  const request = getUser();
  return dispatch => {
    dispatch(requestUser());
    request
      .then(res => {
        dispatch(requestUserSuccess(res.data));
      })
      .cathch(() => {
        dispatch(requestUserFailure());
      });
  };
};

// Getting Repos from Github
export const requestRepos = () => ({
  type: FETCH_REPOS
});

export const requestReposSuccess = repos => ({
  type: FETCH_REPOS_SUCCESS,
  repos
});

export const requestReposFailure = () => ({
  type: FETCH_REPOS_FAILURE,
  errorMsg: REPOS_ERROR_MSG
});

export const fetchRepos = repos => {
  const request = getRepos();
  return dispatch => {
    dispatch(requestRepos());
    request
      .then(res => {
        dispatch(requestReposSuccess(res.data));
      })
      .cathch(() => {
        dispatch(requestReposFailure());
      });
  };
};

// Getting a single Repo from Repos
export const selectRepo = id => ({
  type: SELECT_REPO,
  id
});

export const unSelectRepo = () => ({
  type: UNSELESCT_REPO
});
