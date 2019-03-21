import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_REPOS,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  SELECT_REPO,
  UNSELECT_REPO,
  USER_ERROR_MSG,
  REPOS_ERROR_MSG,
  DISMISS_ERROR
} from './constants';

import { getUser, getRepos } from '../requests';

// Getting User from Github
export const requestUser = () => ({
  type: FETCH_USER
})

export const requestUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user
})

export const requestUserFailure = () => ({
  type: FETCH_USER_FAILURE,
  errorMsg: USER_ERROR_MSG
})

export const fetchUser = () => dispatch => {
  dispatch(requestUser())
  getUser
    .then(res => {
      dispatch(requestUserSuccess(res.data))
    })
    .catch(() => {
      dispatch(requestUserFailure())
    })
};

// Getting Repos from Github
export const requestRepos = () => ({
  type: FETCH_REPOS
})

export const requestReposSuccess = repos => ({
  type: FETCH_REPOS_SUCCESS,
  repos
})

export const requestReposFailure = () => ({
  type: FETCH_REPOS_FAILURE,
  errorMsg: REPOS_ERROR_MSG
})

export const fetchRepos = () => dispatch => {
  dispatch(requestRepos())
  getRepos
    .then(res => {
      dispatch(requestReposSuccess(res.data))
    })
    .catch(() => {
      dispatch(requestReposFailure())
    })
};

// Getting a single Repo from Repos
export const selectRepo = repo => ({
  type: SELECT_REPO,
  repo
})

export const unSelectRepo = () => ({
  type: UNSELECT_REPO
})

// Dimiss eror

export const dismissError = () => ({
  type: DISMISS_ERROR
})
