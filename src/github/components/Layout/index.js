import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress, Snackbar } from 'react-md'

import TopBar from '../TopBar'
import Sidebar from '../Sidebar'

class Layout extends Component {
  componentDidMount () {
    const { fetchUser, user } = this.props
    const now = new Date()
    if (!user.lastSuccessfulUserFetch) {
      fetchUser()
    } else if ((now - user.lastSuccessfulUserFetch) / 1000 > 300) {
      fetchUser()
    }
  }

  render () {
    const { user, children, errorMsg, dismissError, fetchUser, fetchRepos } = this.props
    const toasts = errorMsg ? [{ text: errorMsg }] : []
    return (
      <div>
        {user.isFetchingUser ? (
          <CircularProgress id='main-progress' />
        ) : (
          <div>
            <TopBar user={user.item} fetchUser={fetchUser} fetchRepos={fetchRepos} />
            <div className='main-container'>
              <Sidebar user={user.item} />
              {children}
            </div>
          </div>
        )}
        <Snackbar id='error-snackbar' toasts={toasts} onDismiss={dismissError} />
      </div>
    )
  }
}

Layout.prototypes = {
  user: PropTypes.object,
  children: PropTypes.object,
  errorMsg: PropTypes.string,
  dismissError: PropTypes.func,
  fetchUser: PropTypes.func,
  fetchRepos: PropTypes.func
}
export default Layout
