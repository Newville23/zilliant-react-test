import React from 'react';
import { Drawer, List, ListItem, Avatar, FontIcon } from 'react-md';

import { connect } from 'react-redux';

const Sidebar = ({ user }) => {
  return user.item ? (
    <Drawer
      className='sidebar'
      type={Drawer.DrawerTypes.PERSISTENT}
      visible
      onMediaTypeChange={() => {}}
      onVisibilityChange={() => {}}
    >
      <List>
        <ListItem
          leftAvatar={<Avatar icon={<FontIcon>favorite</FontIcon>} />}
          primaryText='Following'
          secondaryText={user.item.following}
        />
        <ListItem
          leftAvatar={<Avatar icon={<FontIcon>group</FontIcon>} />}
          primaryText='Followers'
          secondaryText={user.item.followers}
        />
        <ListItem
          leftAvatar={<Avatar icon={<FontIcon>folder_special</FontIcon>} />}
          primaryText='Public Repos'
          secondaryText={user.item.public_repos}
        />
        <ListItem
          leftAvatar={<Avatar icon={<FontIcon>local_activity</FontIcon>} />}
          primaryText='Public Gists'
          secondaryText={user.item.public_gists}
        />
      </List>
    </Drawer>
  ) : null
};
const mapStateToProps = ({ user }) => ({ user })
export default connect(mapStateToProps)(Sidebar)
