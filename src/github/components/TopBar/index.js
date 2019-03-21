import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, Avatar, Button } from 'react-md'

const TopBar = ({ user, fetchUser, fetchRepos }) => {
  const updateAll = () => {
    fetchUser()
    fetchRepos()
  };
  const avatar = user ? <Avatar key='avt' src={user.avatar_url} /> : <Avatar key='avt' />
  const name = user ? user.login : ''
  const button = (
    <Button onClick={updateAll} icon>
      replay
    </Button>
  )
  return <Toolbar fixed colored nav={avatar} title={name} actions={button} />
};

TopBar.propTypes = {
  user: PropTypes.object,
  fetchUser: PropTypes.func,
  fetchRepos: PropTypes.func
}

export default TopBar
