import React from 'react';
import {
  Paper,
  Button,
  DataTable,
  TableRow,
  TableColumn,
  TableBody
} from 'react-md';

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
    <div style={{ paddingTop: '20px', paddingRight: '20px', width: '100%' }}>
      <Button
        onClick={unselectRepo}
        style={{ marginBottom: '20px' }}
        mini
        floating
      >
        arrow_back
      </Button>
      <Paper style={{ padding: '20px' }}>
        <h2>{repo.name}</h2>
        <DataTable plain>
          <TableBody>{children}</TableBody>
        </DataTable>
      </Paper>
    </div>
  )
};

export default RepoDetail
