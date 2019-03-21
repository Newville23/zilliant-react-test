import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Cell } from 'react-md'

import RepoCard from '../RepoCard'

const RepoList = ({ repos, selectRepo }) => {
  return (
    <Grid>
      {repos.map((repo, idx) => {
        return (
          <Cell key={idx} size={6}>
            <RepoCard repo={repo} selectRepo={selectRepo} />
          </Cell>
        )
      })}
    </Grid>
  )
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
  selectRepo: PropTypes.func
}

export default RepoList
