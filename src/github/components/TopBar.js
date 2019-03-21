import React from 'react';
import { Toolbar, Avatar, Button } from 'react-md';

import { connect } from 'react-redux';
import { fetchUser, fetchRepos } from '../actions';

const TopBar = ({ user, fetchUser, fetchRepos }) => {
  const updateAll = () => {
    fetchUser()
    fetchRepos()
  };
  const avatar = user ? (
    <Avatar key='avt' src={user.avatar_url} />
  ) : (
    <Avatar key='avt' />
  )
  const name = user ? user.login : '';
  const button = (
    <Button onClick={updateAll} icon>
      replay
    </Button>
  )
  return <Toolbar fixed colored nav={avatar} title={name} actions={button} />
};
const mapStateToProps = ({ user }) => ({ user: user.item })
export default connect(
  mapStateToProps,
  { fetchRepos, fetchUser }
)(TopBar)
