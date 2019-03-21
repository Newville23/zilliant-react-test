import React from 'react';
import { Avatar, Card, CardTitle, CardText, List, ListItem } from 'react-md';

const RepoCard = ({ repo, selectRepo }) => {
  return (
    <Card onClick={() => selectRepo(repo.id)}>
      <CardTitle
        title={repo.name}
        subtitle={repo.full_name}
        avatar={<Avatar random>{repo.name[0].toUpperCase()}</Avatar>}
      />
      <CardText>
        <p>{repo.description}</p>
        <List>
          <ListItem
            primaryText={repo.language ? repo.language : 'Unknown'}
            secondaryText='Language'
          />
        </List>
      </CardText>
    </Card>
  )
};

export default RepoCard
