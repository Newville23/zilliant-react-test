import * as ActionTypes from '../actions/constants'
import { combineReducers } from 'redux'

const user = (
  state = { item: null, isFetchingUser: false, lastSuccessfulUserFetch: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return {
        ...state,
        isFetchingUser: true
      }
    case ActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        item: action.user,
        isFetchingUser: false,
        lastSuccessfulUserFetch: new Date()
      }

    default:
      return state
  }
}

const repos = (
  state = { items: [], isFetchingRepos: false, lastSuccessfulReposFetch: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_REPOS:
      return {
        ...state,
        isFetchingRepos: true
      }
    case ActionTypes.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        isFetchingRepos: false,
        items: action.repos,
        lastSuccessfulReposFetch: new Date()
      }

    default:
      return state
  }
}

const selectedRepo = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_REPO:
      return action.repo
    case ActionTypes.UNSELECT_REPO:
      return null
    default:
      return state
  }
}

// Updates error message to notify about failures
const errorMsg = (state = null, action) => {
  const { type, errorMsg } = action
  if (type === ActionTypes.DISMISS_ERROR) {
    return null
  } else if (errorMsg) {
    return errorMsg
  }
  return state
};

const rootReducer = combineReducers({
  user,
  repos,
  selectedRepo,
  errorMsg
})

export default rootReducer
