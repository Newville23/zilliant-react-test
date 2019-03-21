import React, { Component } from 'react';
import { CircularProgress, Snackbar } from 'react-md';

import TopBar from './TopBar';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { fetchUser, dismissError } from '../actions';

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
    const { user, children, errorMsg, dismissError } = this.props
    const toasts = errorMsg ? [{ text: errorMsg }] : []
    return (
      <div>
        {user.isFetchingUser ? (
          <CircularProgress id='main-progress' />
        ) : (
          <div>
            <TopBar />
            <div className='main-container'>
              <Sidebar />
              {children}
            </div>
          </div>
        )}
        <Snackbar
          id='error-snackbar'
          toasts={toasts}
          onDismiss={dismissError}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ user, errorMsg }) => ({ user, errorMsg })

export default connect(
  mapStateToProps,
  { fetchUser, dismissError }
)(Layout)
