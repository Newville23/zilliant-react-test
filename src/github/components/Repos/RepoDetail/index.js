import React from 'react'
import { Paper, Button, DataTable, TableRow, TableColumn, TableBody } from 'react-md'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const RepoDetail = ({ repo, unselectRepo }) => {
  let children = []
  for (let key in repo) {
    if (typeof repo[key] !== 'object') {
      children.push(
        <TableRow key={key}>
          <TableColumn>{key.toUpperCase()}</TableColumn>
          <TableColumn>
            {key.endsWith('url') ? (
              <a href={repo[key]}>{repo[key]}</a>
            ) : repo[key] !== null ? (
              repo[key].toString()
            ) : (
              'None'
            )}
          </TableColumn>
        </TableRow>
      )
    }
  }
  return (
    <div className={styles.detailContainer}>
      <Button onClick={unselectRepo} className={styles.arrowButoon} mini floating>
        arrow_back
      </Button>
      <Paper className={styles.paperCard}>
        <h2>{repo.name}</h2>
        <DataTable plain>
          <TableBody>{children}</TableBody>
        </DataTable>
      </Paper>
    </div>
  )
};
RepoDetail.propTypes = {
  repos: PropTypes.array,
  selectRepo: PropTypes.func
}

export default RepoDetail
